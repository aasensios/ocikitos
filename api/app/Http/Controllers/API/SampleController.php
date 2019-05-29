<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\API\BaseController as BaseController;
use App\Sample;
use App\Role;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Validation\Rule;
use Validator;

class SampleController extends BaseController
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $samples = Sample::all();

        return $this->sendResponse($samples->toArray(), 'Samples retrieved successfully.');
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
            'barcode' => 'required|unique:samples',
            'origin' => [
                'required',
                Rule::in(['saliva', 'blood', 'droppings']),
            ],
            'sequence', // => 'nullable|mimetypes:text/plain', // plain/fasta
            'pattern' => 'nullable|json',
            'dog_id' => 'nullable|numeric',
            'bio_user_id',
        ]);

        if ($validator->fails()) {
            return $this->sendError('Validation Error.', $validator->errors());
        }

        $sample = Sample::create($input);

        return $this->sendResponse($sample->toArray(), 'Sample added successfully.');
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
            return $this->sendError('Sample not found.');
        }

        return $this->sendResponse($sample->toArray(), 'Sample retrieved successfully.');
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
            'barcode' => Rule::unique('samples')->ignore($sample->id),
            'origin' => Rule::in(['saliva', 'blood', 'droppings']),
            'sequence', // => 'nullable|mimetypes:text/plain', // plain/fasta
            'pattern' => 'nullable|json',
            'dog_id' => 'nullable|numeric',
            // Track the bioinformatic who last updated the sample.
            'bio_user_id' => [
                'required',
                Rule::in(Role::where('name', 'bio')->first()->users()->pluck('id')),
            ],
        ]);

        if ($validator->fails()) {
            return $this->sendError('Validation Error.', $validator->errors());
        }

        if ($request->has('barcode')) {
            $sample->barcode = $input['barcode'];
        }
        if ($request->has('origin')) {
            $sample->origin = $input['origin'];
        }
        if ($request->has('sequence')) {
            $sample->sequence = $input['sequence'];
        }
        if ($request->has('pattern')) {
            $sample->pattern = $input['pattern'];
        }
        if ($request->has('dog_id')) {
            $sample->dog_id = $input['dog_id'];
        }
        if ($request->has('dbio_user_idog_id')) {
            $sample->bio_user_id = $input['bio_user_id'];
        }

        $sample->save();

        return $this->sendResponse($sample->toArray(), 'Sample updated successfully.');
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

        return $this->sendResponse($sample->toArray(), 'Sample deleted successfully.');
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

        return $this->sendResponse($strs->toArray(), 'STRs retrieved successfully.');
    }
}
