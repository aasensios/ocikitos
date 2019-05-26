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

// Resource routes.
Route::apiResources([
    // 'users' => 'API\UserController',
    'dogs' => 'API\DogController',
    'samples' => 'API\SampleController',
    'incidents' => 'API\IncidentController',
    'infractions' => 'API\InfractionController',
]);

// Additional routes to access data from non-modeled tables.
Route::get('breeds', 'API\DogController@getBreeds');
Route::get('colors', 'API\DogController@getColors');
Route::get('strs', 'API\SampleController@getStrs');
