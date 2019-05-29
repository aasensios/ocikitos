<?php

/* @var $factory \Illuminate\Database\Eloquent\Factory */

use App\Infraction;
use App\User;
use Faker\Generator as Faker;

$factory->define(Infraction::class, function (Faker $faker) {
    return [
        'status' => $faker->randomElement(['pending', 'approved', 'rejected']),
        'document' => 'path/to/file.pdf',
        'incident_id' => $faker->numberBetween(1, 25),
        // 'police_officer_id' => User::where('role', 'officer')->first()->id
    ];
});
