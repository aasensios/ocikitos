<?php

/* @var $factory \Illuminate\Database\Eloquent\Factory */

use App\Infraction;
use Faker\Generator as Faker;

$factory->define(Infraction::class, function (Faker $faker) {
    return [
        'status' => $faker->randomElement(['pending', 'approved', 'rejected']),
        'document' => 'path/to/file.pdf',
        // 'indicent_id' => $faker->numberBetween(1, 27),
        // 'police_officer_id' => User::where('role', 'officer')->first()->id
    ];
});
