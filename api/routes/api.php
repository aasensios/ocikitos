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

// User routes.
Route::post('register', 'API\RegisterController@register');
// Login route is /oauth/token, managed by Laravel Passport.

// Protected logged in user information.
Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

// Protected resource routes.
Route::middleware('auth:api')->group( function () {
	Route::apiResources([
        'dogs' => 'API\DogController',
        'samples' => 'API\SampleController',
        'incidents' => 'API\IncidentController',
        'infractions' => 'API\InfractionController',
    ]);
});

// Non-protected additional routes to access non-confidential bussiness data.
Route::get('breeds', 'API\DogController@getBreeds');
Route::get('colors', 'API\DogController@getColors');
Route::get('strs', 'API\SampleController@getStrs');
