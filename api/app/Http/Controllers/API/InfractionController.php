<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\API\BaseController as BaseController;
use App\Infraction;
use Illuminate\Http\Request;
use Illuminate\Validation\Rule;
use Validator;

class InfractionController extends BaseController
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $infractions = Infraction::all();

        return $this->sendResponse($infractions->toArray(), 'Infractions retrieved successfully.');
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
            // Nothing to validate due to an infraction proposal is generated
            // automatically when an STR match occurs.
        ]);

        if ($validator->fails()) {
            return $this->sendError('Validation Error.', $validator->errors());
        }

        $infraction = Infraction::create($input);

        return $this->sendResponse($infraction->toArray(), 'Infraction added successfully.');
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show(int $id)
    {
        $infraction = Infraction::find($id);

        if (is_null($infraction)) {
            return $this->sendError('Infraction not found.');
        }

        return $this->sendResponse($infraction->toArray(), 'Infraction retrieved successfully.');
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Infraction  $infraction
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Infraction $infraction)
    {
        $input = $request->all();

        $validator = Validator::make($input, [
            'status' => [
                'required',
                Rule::in(['approved', 'rejected']),
            ],
        ]);

        if ($validator->fails()) {
            return $this->sendError('Validation Error.', $validator->errors());
        }

        if ($request->has('status')) {
            $infraction->status = $input['status'];
        }

        $infraction->save();

        if ($infraction->status = 'approved') {
            // TODO: generate a PDF document with the official Infraction (later to be emitted to the local government).
            //
        }

        return $this->sendResponse($infraction->toArray(), 'Infraction updated successfully.');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Infraction  $infraction
     * @return \Illuminate\Http\Response
     */
    public function destroy(Infraction $infraction)
    {
        $infraction->delete();

        return $this->sendResponse($infraction->toArray(), 'Infraction deleted successfully.');
    }

}
