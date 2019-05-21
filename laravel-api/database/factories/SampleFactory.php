<?php

/* @var $factory \Illuminate\Database\Eloquent\Factory */

use App\Sample;
use Faker\Generator as Faker;

$factory->define(Sample::class, function (Faker $faker) {
    // Random pattern
    // $pattern = $faker->randomBetween($minRepeats, $maxRepeats);

    return [
        'barcode' => $faker->unique()->numerify('KIT-########'), //  KIT- and 8 digits
        'origin' => $faker->randomElement(['blood', 'saliva', 'droppings']),
        'sequence' => $faker->sentence(),
        'pattern' => [
            "FH2001" => 10,
            "FH2004" => 11,
            "FH2010" => 12,
            "FH2054" => 13,
            "FH2088" => 14,
            "FH2107" => 15,
            "FH2309" => 16,
            "FH2328" => 17,
            "FH3377" => 18,
            "PEZ02" => 19,
            "PEZ05" => 20,
            "PEZ16" => 21,
            "PEZ17" => 22,
            "PEZ21" => 10,
            "VWF.X" => 10,
        ],
        'dog_id' => $faker->numberBetween([1, 50]),
    ];
});
