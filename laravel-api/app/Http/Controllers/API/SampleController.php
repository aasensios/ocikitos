<?php

namespace App\Http\Controllers\API;

use App\Sample;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Validator;

class SampleController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $Samples = Sample::all();
        $data = $Samples->toArray();

        $response = [
            'success' => true,
            'data' => $data,
            'message' => 'Samples retrieved successfully.',
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
            'barcode' => 'required',
            'origin',
            'sequence' => 'required',
            'pattern',
            'dog_id' => 'nullable|numeric',
        ]);

        if ($validator->fails()) {
            $response = [
                'success' => false,
                'data' => 'Validation Error.',
                'message' => $validator->errors(),
            ];
            return response()->json($response, 404);
        }

        $Sample = Sample::create($input);
        $data = $Sample->toArray();

        $response = [
            'success' => true,
            'data' => $data,
            'message' => 'Sample stored successfully.',
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
        $Sample = Sample::find($id);

        if (is_null($Sample)) {
            $response = [
                'success' => false,
                'data' => 'Empty',
                'message' => 'Sample not found.',
            ];
            return response()->json($response, 404);
        }

        $data = $Sample->toArray();

        $response = [
            'success' => true,
            'data' => $data,
            'message' => 'Sample retrieved successfully.',
        ];

        return response()->json($response, 200);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Sample  $Sample
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Sample $Sample)
    {
        $input = $request->all();

        $validator = Validator::make($input, [
            'barcode' => 'required',
            'origin',
            'sequence' => 'required',
            'pattern',
            'dog_id' => 'nullable|numeric',
        ]);

        if ($validator->fails()) {
            $response = [
                'success' => false,
                'data' => 'Validation Error.',
                'message' => $validator->errors(),
            ];
            return response()->json($response, 404);
        }

        $Sample->chip = $input['chip'];
        $Sample->name = $input['name'];
        $Sample->gender = $input['gender'];
        $Sample->breed_id = $input['breed_id'];
        $Sample->color_id = $input['color_id'];
        $Sample->birthdate = $input['birthdate'];
        $Sample->deathdate = $input['deathdate'];
        $Sample->owner_dni = $input['owner_dni'];
        $Sample->owner_fullname = $input['owner_fullname'];
        $Sample->residence = $input['residence'];
        $Sample->save();

        $data = $Sample->toArray();

        $response = [
            'success' => true,
            'data' => $data,
            'message' => 'Sample updated successfully.',
        ];

        return response()->json($response, 200);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Sample  $Sample
     * @return \Illuminate\Http\Response
     */
    public function destroy(Sample $Sample)
    {
        $Sample->delete();
        $data = $Sample->toArray();

        $response = [
            'success' => true,
            'data' => $data,
            'message' => 'Sample deleted successfully.',
        ];

        return response()->json($response, 200);
    }
}
