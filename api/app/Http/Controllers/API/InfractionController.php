<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Infraction;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Validator;

class InfractionController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $infractions = Infraction::all();
        $data = $infractions->toArray();

        $response = [
            'success' => true,
            'data' => $data,
            'message' => 'Infractions retrieved successfully.',
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
            //
        ]);

        if ($validator->fails()) {
            $response = [
                'success' => false,
                'data' => 'Validation Error.',
                'message' => $validator->errors(),
            ];
            return response()->json($response, 404);
        }

        $infraction = Infraction::create($input);
        $data = $infraction->toArray();

        $response = [
            'success' => true,
            'data' => $data,
            'message' => 'Infraction stored successfully.',
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
        $infraction = Infraction::find($id);

        if (is_null($infraction)) {
            $response = [
                'success' => false,
                'data' => 'Empty',
                'message' => 'Infraction not found.',
            ];
            return response()->json($response, 404);
        }

        $data = $infraction->toArray();

        $response = [
            'success' => true,
            'data' => $data,
            'message' => 'Infraction retrieved successfully.',
        ];

        return response()->json($response, 200);
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
            $response = [
                'success' => false,
                'data' => 'Validation Error.',
                'message' => $validator->errors(),
            ];
            return response()->json($response, 404);
        }

        $infraction->status = $input['status'];
        $infraction->save();

        $data = $infraction->toArray();

        $response = [
            'success' => true,
            'data' => $data,
            'message' => 'Infraction updated successfully.',
        ];

        return response()->json($response, 200);
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
        $data = $infraction->toArray();

        $response = [
            'success' => true,
            'data' => $data,
            'message' => 'Infraction deleted successfully.',
        ];

        return response()->json($response, 200);
    }

}
