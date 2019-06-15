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

// User unprotected routes.
Route::post('register', 'API\UserController@register');
// "Login route" is /oauth/token, managed by Laravel Passport.
Route::post('logout/{id}', 'API\UserController@logout');

// Protected resource routes.
Route::middleware('auth:api')->group( function () {
    // API resources routes grouped all together.
	Route::apiResources([
        'users' => 'API\UserController',
        'dogs' => 'API\DogController',
        'samples' => 'API\SampleController',
        'incidents' => 'API\IncidentController',
        'infractions' => 'API\InfractionController',
    ]);
});

// Unprotected additional routes to access non-confidential bussiness data.
Route::get('breeds', 'API\DogController@getBreeds');
Route::get('colors', 'API\DogController@getColors');
Route::get('strs', 'API\SampleController@getStrs');
