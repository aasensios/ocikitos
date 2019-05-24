<?php

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


// Initial user methods.

// Route::post('register', 'API\UserController@register');
// Route::post('login', 'API\UserController@login');

// Laravel Passport authentication middleware filter.
Route::middleware('auth:api')->group(function () {
    Route::apiResources([
        'users' => 'API\UserController',
        'dogs' => 'API\DogController',
        'samples' => 'API\SampleController',
        'incidents' => 'API\IncidentController',
        'infractions' => 'API\InfractionController',
    ]);
});

// Alternative without authentication.

// Route::apiResources([
//     'users' => 'API\UserController',
//     'dogs' => 'API\DogController',
//     'samples' => 'API\SampleController',
//     'incidents' => 'API\IncidentController',
//     'infractions' => 'API\InfractionsController',
// ]);

// Additional routes to access data from non-modeled tables.
Route::get('breeds', 'API\DogController@getBreeds');
Route::get('colors', 'API\DogController@getColors');
Route::get('strs', 'API\SampleController@getStrs');
