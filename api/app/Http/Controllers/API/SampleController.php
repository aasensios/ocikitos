<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Sample;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
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
        $samples = Sample::all();
        $data = $samples->toArray();

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
            'origin' => ['required', Rule::in(['saliva', 'blood', 'droppings'])],
            'sequence', // => 'nullable|mimetypes:text/plain', // plain/fasta
            'pattern' => 'nullable|json',
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

        $sample = Sample::create($input);
        $data = $sample->toArray();

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
        $sample = Sample::find($id);

        if (is_null($sample)) {
            $response = [
                'success' => false,
                'data' => 'Empty',
                'message' => 'Sample not found.',
            ];
            return response()->json($response, 404);
        }

        $data = $sample->toArray();

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
     * @param  \App\Sample  $sample
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Sample $sample)
    {
        $input = $request->all();

        $validator = Validator::make($input, [
            'barcode' => 'required',
            'origin' => ['required', Rule::in(['saliva', 'blood', 'droppings'])],
            'sequence', // => 'nullable|mimetypes:text/plain', // plain/fasta
            'pattern' => 'nullable|json',
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

        $sample->barcode = $input['barcode'];
        $sample->origin = $input['origin'];
        $sample->sequence = $input['sequence'];
        $sample->pattern = $input['pattern'];
        $sample->dog_id = $input['dog_id'];
        $sample->save();

        $data = $sample->toArray();

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
     * @param  \App\Sample  $sample
     * @return \Illuminate\Http\Response
     */
    public function destroy(Sample $sample)
    {
        $sample->delete();
        $data = $sample->toArray();

        $response = [
            'success' => true,
            'data' => $data,
            'message' => 'Sample deleted successfully.',
        ];

        return response()->json($response, 200);
    }

    // Additional methods to retrieve data from non-modeled tables.

    /**
     * Display a listing of the Short Tandem Repeats (STRs).
     *
     * @return \Illuminate\Http\Response
     */
    public function getStrs()
    {
        $strs = DB::table('strs')->get();
        $data = $strs->toArray();

        $response = [
            'success' => true,
            'data' => $data,
            'message' => 'STRs retrieved successfully.',
        ];

        return response()->json($response, 200);
    }
}
