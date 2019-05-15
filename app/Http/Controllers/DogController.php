<?php

namespace App\Http\Controllers;

use App\Dog;
// use App\Http\Requests;
use App\Http\Resources\Dog as DogResource;
use Illuminate\Http\Request;

class DogController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        // Get dogs
        $dogs = Dog::paginate(15);

        // Return collection of dogs as a resource
        return DogResource::collection($dogs);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $dog = $request->isMethod('put') ? Dog::findOrFail($request->id) : new Dog;

        $dog->id = $request->input('id');
        $dog->chip = $request->input('chip');
        $dog->name = $request->input('name');
        $dog->gender = $request->input('gender');
        $dog->breed_id = $request->input('breed_id');
        $dog->color_id = $request->input('color_id');
        $dog->birthdate = $request->input('birthdate');
        // $dog->deathdate = $request->input('deathdate');
        $dog->owner_dni = $request->input('owner_dni');
        $dog->owner_fullname = $request->input('owner_fullname');
        $dog->residence = $request->input('residence');

        dd($request->all());
        
        if ($dog->save()) {
            return new DogResource($dog);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        // Get dog
        $dog = Dog::findOrFail($id);

        // Return single dog as a resource
        return new DogResource($dog);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        // Get dog
        $dog = Dog::findOrFail($id);

        if ($dog->delete()) {
            return new DogResource($dog);
        }
    }
}
