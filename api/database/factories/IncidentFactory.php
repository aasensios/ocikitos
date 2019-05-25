<?php

/* @var $factory \Illuminate\Database\Eloquent\Factory */

use App\Incident;
use App\Sample;
use Faker\Generator as Faker;

$factory->define(Incident::class, function (Faker $faker) {
    // Generate a random pattern with realiable key-value pairs based on strs existing table.
    $droppings_samples = DB::select("SELECT * from samples WHERE origin='droppings'");
    foreach ($droppings_samples as $dropping_sample) {
        // ...
    }

    return [
        'photo' => 'path/to/photo.jpg',
        'location' => $faker->address, // Adaptable depending on 'faker_locale' value (in config/app.php).
        'sample_barcode' => Sample::where('origin', 'droppings')->get()->first()->barcode,
    ];
});
