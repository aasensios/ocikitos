<?php

/* @var $factory \Illuminate\Database\Eloquent\Factory */

use App\Dog;
use Faker\Generator as Faker;

$factory->define(Dog::class, function (Faker $faker) {
    return [
        'chip' => $faker->randomNumber(8),
        'name' => $faker->firstName,
        'gender' => $faker->randomElement(['male', 'female']),
        'breed_id' => $faker->numberBetween(1, 5),
        'color_id' => $faker->numberBetween(1, 5),
        'birthdate' => $faker->date(),
        // 'deathdate' => $faker->randomElement([null, $faker->date()]),
        'owner_dni' => $faker->dni(),
        'owner_fullname' => $faker->name(),
        'residence' => $faker->address()
    ];
});
