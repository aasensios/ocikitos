<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

// List dogs
Route::get('dogs', 'DogController@index');

// Show single dog
Route::get('dog/{id}', 'DogController@show');

// Add new dog
Route::post('dog', 'DogController@store');

// Modify an existing dog
Route::put('dog', 'DogController@store');

// Delete dog
Route::delete('dog/{id}', 'DogController@destroy');
