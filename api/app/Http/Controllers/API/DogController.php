<?php

namespace App\Http\Controllers\API;

use App\Dog;
use App\Http\Controllers\API\BaseController as BaseController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Validation\Rule;
use Validator;

class DogController extends BaseController
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        // $dogs = Dog::all();
        // $data = $dogs->toArray();

        // $response = [
        //     'success' => true,
        //     'data' => $data,
        //     'message' => 'Dogs retrieved successfully.',
        // ];

        // return response()->json($response, 200);

        $dogs = Dog::all();

        return $this->sendResponse($dogs->toArray(), 'Dogs retrieved successfully.');
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
            'chip' => 'numeric|unique:dogs',
            'name' => 'required',
            'gender' => 'required',
            'breed_id',
            'color_id',
            'birthdate' => 'nullable|date|before_or_equal:today',
            'deathdate' => 'nullable|date|before_or_equal:today',
            'owner_dni' => 'regex:/^([a-zA-Z0-9])[0-9]{7}([a-zA-Z0-9])$/i',
            'owner_fullname' => 'required',
            'residence',
        ]);

        if ($validator->fails()) {
            return $this->sendError('Validation Error.', $validator->errors());
        }

        $dog = Dog::create($input);

        // $response = [
        //     'success' => true,
        //     'data' => $data,
        //     'message' => 'Dog stored successfully.',
        // ];

        // return response()->json($response, 200);

        return $this->sendResponse($dog->toArray(), 'Dog added successfully.');
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show(int $id)
    {
        $dog = Dog::find($id);

        if (is_null($dog)) {
            return $this->sendError('Dog not found.');
        }

        // $data = $dog->toArray();

        // $response = [
        //     'success' => true,
        //     'data' => $data,
        //     'message' => 'Dog retrieved successfully.',
        // ];

        // return response()->json($response, 200);

        return $this->sendResponse($dog->toArray(), 'Dog retrieved successfully.');
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Dog  $dog
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Dog $dog)
    {
        $input = $request->all();

        $validator = Validator::make($input, [
            'chip' => [
                'numeric',
                Rule::unique('dogs')->ignore($dog->id),
            ],
            'name' => 'required',
            'gender' => 'required',
            'breed_id',
            'color_id',
            'birthdate' => 'nullable|date|before_or_equal:today',
            'deathdate' => 'nullable|date|before_or_equal:today',
            'owner_dni' => 'regex:/^([a-zA-Z0-9])[0-9]{7}([a-zA-Z0-9])$/i',
            'owner_fullname' => 'required',
            'residence',
        ]);

        if ($validator->fails()) {
            return $this->sendError('Validation Error.', $validator->errors());
        }

        $dog->chip = $input['chip'];
        $dog->name = $input['name'];
        $dog->gender = $input['gender'];
        $dog->breed_id = $input['breed_id'];
        $dog->color_id = $input['color_id'];
        $dog->birthdate = $input['birthdate'];
        $dog->deathdate = $input['deathdate'];
        $dog->owner_dni = $input['owner_dni'];
        $dog->owner_fullname = $input['owner_fullname'];
        $dog->residence = $input['residence'];

        // if ($request->has('chip')) {
        //     $dog->chip = $input['chip'];
        // }
        // if ($request->has('name')) {
        //     $dog->name = $input['name'];
        // }
        // if ($request->has('gender')) {
        //     $dog->gender = $input['gender'];
        // }
        // if ($request->has('breed_id')) {
        //     $dog->breed_id = $input['breed_id'];
        // }
        // if ($request->has('color_id')) {
        //     $dog->color_id = $input['color_id'];
        // }
        // if ($request->has('birthdate')) {
        //     $dog->birthdate = $input['birthdate'];
        // }
        // if ($request->has('deathdate')) {
        //     $dog->deathdate = $input['deathdate'];
        // }
        // if ($request->has('owner_dni')) {
        //     $dog->owner_dni = $input['owner_dni'];
        // }
        // if ($request->has('owner_fullname')) {
        //     $dog->owner_fullname = $input['owner_fullname'];
        // }
        // if ($request->has('residence')) {
        //     $dog->residence = $input['residence'];
        // }
        $dog->save();

        return $this->sendResponse($dog->toArray(), 'Dog updated successfully.');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Dog  $dog
     * @return \Illuminate\Http\Response
     */
    public function destroy(Dog $dog)
    {
        $dog->delete();

        return $this->sendResponse($dog->toArray(), 'Dog deleted successfully.');
    }

    /*
    |-------------------------------------------------------------------------
    | Methods to retrieve data from other tables related to this resource.
    |-------------------------------------------------------------------------
    |
     */

    /**
     * Display a listing of the breeds.
     *
     * @return \Illuminate\Http\Response
     */
    public function getBreeds()
    {
        $breeds = DB::table('breeds')->get();
        
        return $this->sendResponse($breeds->toArray(), 'Breeds retrieved successfully.');
    }

    /**
     * Display a listing of the colors.
     *
     * @return \Illuminate\Http\Response
     */
    public function getColors()
    {
        $colors = DB::table('colors')->get();
        
        return $this->sendResponse($colors->toArray(), 'Colors retrieved successfully.');
    }
}
