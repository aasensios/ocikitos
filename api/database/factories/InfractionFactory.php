<?php

/* @var $factory \Illuminate\Database\Eloquent\Factory */

use App\Infraction;
use App\Role;
use Faker\Generator as Faker;

$factory->define(Infraction::class, function (Faker $faker) {
    $status = $faker->randomElement(['pending', 'approved', 'rejected']);
    $document = ($status = 'pending') ? null : 'path/to/file.pdf';

    return [
        'status' => $status,
        'document' => $document,
        'incident_id' => $faker->randomElement(DB::table('incidents')->pluck('id')),
        'officer_user_id' => Role::where('name', 'officer')->first()->users()->first()->id,
    ];
});
