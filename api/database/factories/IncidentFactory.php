<?php

/* @var $factory \Illuminate\Database\Eloquent\Factory */

use App\Incident;
use App\Role;
use App\Sample;
use Faker\Generator as Faker;

$factory->define(Incident::class, function (Faker $faker) {
    return [
        'photo' => 'storage/app/photos/droppings/file.jpg',
        'location' => $faker->address, // Adaptable depending on 'faker_locale' value (in config/app.php).
        'sample_barcode' => Sample::where('origin', 'droppings')->get()->first()->barcode,
        'agent_user_id' => Role::where('name', 'agent')->first()->users()->first()->id,
    ];
});
