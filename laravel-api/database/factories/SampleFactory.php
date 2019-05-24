<?php

/* @var $factory \Illuminate\Database\Eloquent\Factory */

use App\Sample;
use Faker\Generator as Faker;

$factory->define(Sample::class, function (Faker $faker) {
    // Generate a random pattern with realiable key-value pairs based on strs existing table.
    $pattern = [];
    $strs = DB::select('SELECT * from strs');
    foreach ($strs as $str) {
        $pattern[$str->locus] = $faker->numberBetween($str->min_repeats, $str->max_repeats);
    }

    return [
        'barcode' => $faker->unique()->numerify('KIT-########'), // Format: 'KIT-' followed by 8 digits
        'origin' => $faker->randomElement(['blood', 'saliva', 'droppings']),
        'sequence' => $faker->sentence(),
        'pattern' => $pattern,
        'dog_id' => $faker->randomElement([NULL, $faker->numberBetween(1, 50)]),
    ];
});
