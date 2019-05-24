<?php

namespace App\Http\Controllers\API;

use App\Dog;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Validator;

class DogController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $dogs = Dog::all();
        $data = $dogs->toArray();

        $response = [
            'success' => true,
            'data' => $data,
            'message' => 'Dogs retrieved successfully.',
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
            'chip' => 'numeric',
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
            $response = [
                'success' => false,
                'data' => 'Validation Error.',
                'message' => $validator->errors(),
            ];
            return response()->json($response, 404);
        }

        $dog = Dog::create($input);
        $data = $dog->toArray();

        $response = [
            'success' => true,
            'data' => $data,
            'message' => 'Dog stored successfully.',
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
        $dog = Dog::find($id);

        if (is_null($dog)) {
            $response = [
                'success' => false,
                'data' => 'Empty',
                'message' => 'Dog not found.',
            ];
            return response()->json($response, 404);
        }

        $data = $dog->toArray();

        $response = [
            'success' => true,
            'data' => $data,
            'message' => 'Dog retrieved successfully.',
        ];

        return response()->json($response, 200);
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
            'chip' => 'numeric',
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
            $response = [
                'success' => false,
                'data' => 'Validation Error.',
                'message' => $validator->errors(),
            ];
            return response()->json($response, 404);
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
        $dog->save();

        $data = $dog->toArray();

        $response = [
            'success' => true,
            'data' => $data,
            'message' => 'Dog updated successfully.',
        ];

        return response()->json($response, 200);
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
        $data = $dog->toArray();

        $response = [
            'success' => true,
            'data' => $data,
            'message' => 'Dog deleted successfully.',
        ];

        return response()->json($response, 200);
    }

    // Auxiliar methods to retrieve data from static tables.

    /**
     * Display a listing of the breeds.
     *
     * @return \Illuminate\Http\Response
     */
    public function getBreeds()
    {
        $breeds = DB::table('breeds')->get();
        $data = $breeds->toArray();

        $response = [
            'success' => true,
            'data' => $data,
            'message' => 'Breeds retrieved successfully.',
        ];

        return response()->json($response, 200);
    }

    /**
     * Display a listing of the colors.
     *
     * @return \Illuminate\Http\Response
     */
    public function getColors()
    {
        $colors = DB::table('colors')->get();
        $data = $colors->toArray();

        $response = [
            'success' => true,
            'data' => $data,
            'message' => 'colors retrieved successfully.',
        ];

        return response()->json($response, 200);
    }
}
