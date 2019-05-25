<?php

/* @var $factory \Illuminate\Database\Eloquent\Factory */

use App\Dog;
use Faker\Generator as Faker;

$factory->define(Dog::class, function (Faker $faker) {
    // Random gender.
    $gender = $faker->randomElement(['female', 'male']);

    // Random name depending on the previous assigned gender.
    switch ($gender) {
        case 'female':
            $name = $faker->randomElement([
                'Bella',
                'Luna',
                'Molly',
                'Lola',
                'Lucy',
                'Princess',
                'Roxy',
                'Sophie',
                'Coco',
                'Ivy',
            ]);
            break;
        case 'male':
            $name = $faker->randomElement([
                'Max',
                'Bear',
                'Charlie',
                'Toby',
                'Lucky',
                'Cooper',
                'Teddy',
                'Loki',
                'Rocky',
                'Finn',
            ]);
            break;
        default:
            $name = 'Dug'; // https://pixar.fandom.com/wiki/Dug
    }

    // Define date variables before the return because deathdate depends on birthdate.
    $birthdate = $faker->dateTimeBetween("-10 years", 'now')->format("Y-m-d");
    $deathdate = $faker->dateTimeBetween($birthdate, 'now')->format("Y-m-d");

    return [
        // Dog chips have 15 digits. Source: http://www.realtrace.com/page-sp/regulacion
        // 'chip' => $faker->unique()->randomNumber(15), // With 15 digits, throws "InvalidArgumentException  : randomNumber() can only generate numbers up to mt_getrandmax()".
        'chip' => $faker->unique()->numerify('###############'),
        'name' => $name,
        'gender' => $gender,
        'breed_id' => $faker->numberBetween(1, 216),
        'color_id' => $faker->numberBetween(1, 9),
        'birthdate' => $birthdate,
        'deathdate' => $faker->randomElement([NULL, $deathdate]), // Randomize alive or dead.
        'owner_dni' => $faker->dni, // Only available with 'faker_locale' => 'es_ES' (in config/app.php).
        'owner_fullname' => $faker->name, // Adaptable depending on 'faker_locale' value (in config/app.php).
        'residence' => $faker->address, // Adaptable depending on 'faker_locale' value (in config/app.php).
    ];
});
