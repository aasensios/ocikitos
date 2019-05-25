<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Incident;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Validator;

class IncidentController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $incidents = Incident::all();
        $data = $incidents->toArray();

        $response = [
            'success' => true,
            'data' => $data,
            'message' => 'Incidents retrieved successfully.',
        ];

        return response()->json($response, 200);
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
            'photo' => 'required', // 'mimes:jpeg,jpg,png'
            'location' => 'required',
            'sample_barcode' => 'required',
        ]);

        if ($validator->fails()) {
            $response = [
                'success' => false,
                'data' => 'Validation Error.',
                'message' => $validator->errors(),
            ];
            return response()->json($response, 404);
        }

        $incident = Incident::create($input);
        $data = $incident->toArray();

        $response = [
            'success' => true,
            'data' => $data,
            'message' => 'Incident stored successfully.',
        ];

        return response()->json($response, 200);
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
            $response = [
                'success' => false,
                'data' => 'Empty',
                'message' => 'Incident not found.',
            ];
            return response()->json($response, 404);
        }

        $data = $incident->toArray();

        $response = [
            'success' => true,
            'data' => $data,
            'message' => 'Incident retrieved successfully.',
        ];

        return response()->json($response, 200);
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
            'photo' => 'required', // 'mimes:jpeg,jpg,png'
            'location' => 'required',
            'sample_barcode' => 'required',
        ]);

        if ($validator->fails()) {
            $response = [
                'success' => false,
                'data' => 'Validation Error.',
                'message' => $validator->errors(),
            ];
            return response()->json($response, 404);
        }

        $incident->photo = $input['photo'];
        $incident->location = $input['location'];
        $incident->sample_id = $input['sample_id'];
        $incident->save();

        $data = $incident->toArray();

        $response = [
            'success' => true,
            'data' => $data,
            'message' => 'Incident updated successfully.',
        ];

        return response()->json($response, 200);
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
        $data = $incident->toArray();

        $response = [
            'success' => true,
            'data' => $data,
            'message' => 'Incident deleted successfully.',
        ];

        return response()->json($response, 200);
    }

}
