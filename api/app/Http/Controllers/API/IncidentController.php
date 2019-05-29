<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\API\BaseController as BaseController;
use App\Incident;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Validation\Rule;
use Validator;

class IncidentController extends BaseController
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $incidents = Incident::all();

        return $this->sendResponse($incidents->toArray(), 'Incidents retrieved successfully.');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $input = $request->all();

        $validator = Validator::make($input, [
            'photo', // 'mimes:jpeg,jpg,png'
            'location' => 'required',
            'sample_barcode' => 'required',
            'agent_user_id',
        ]);

        if ($validator->fails()) {
            return $this->sendError('Validation Error.', $validator->errors());
        }

        $incident = Incident::create($input);

        return $this->sendResponse($incident->toArray(), 'Incident added successfully.');
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show(int $id)
    {
        $incident = Incident::find($id);

        if (is_null($incident)) {
            return $this->sendError('Incident not found.');
        }

        return $this->sendResponse($incident->toArray(), 'Incident retrieved successfully.');
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Incident  $incident
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Incident $incident)
    {
        $input = $request->all();

        $validator = Validator::make($input, [
            'photo', // 'mimes:jpeg,jpg,png'
            'location',
            'sample_barcode' => 'required',
            'agent_user_id',
        ]);

        if ($validator->fails()) {
            return $this->sendError('Validation Error.', $validator->errors());
        }

        if ($request->has('photo')) {
            $incident->photo = $input['photo'];
        }
        if ($request->has('location')) {
            $incident->location = $input['location'];
        }
        if ($request->has('sample_barcode')) {
            $incident->sample_barcode = $input['sample_barcode'];
        }
        if ($request->has('agent_user_id')) {
            $incident->agent_user_id = $input['agent_user_id'];
        }

        $incident->save();

        return $this->sendResponse($incident->toArray(), 'Incident updated successfully.');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Incident  $incident
     * @return \Illuminate\Http\Response
     */
    public function destroy(Incident $incident)
    {
        $incident->delete();

        return $this->sendResponse($incident->toArray(), 'Incident deleted successfully.');
    }

}
