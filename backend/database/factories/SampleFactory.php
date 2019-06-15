<?php

/* @var $factory \Illuminate\Database\Eloquent\Factory */

use App\Role;
use App\Sample;
use App\Dog;
use Faker\Generator as Faker;

$factory->define(Sample::class, function (Faker $faker) {
    // Generate a random pattern with realiable key-value pairs based on strs existing table.
    $strs = DB::table('strs')->get();
    $pattern = [];
    foreach ($strs as $str) {
        $pattern[$str->locus] = $faker->numberBetween($str->min_repeats, $str->max_repeats);
    }

    $dog_ids = Dog::all()->pluck('id');

    return [
        'barcode' => $faker->unique()->numerify('KIT-########'), // Format: 'KIT-' followed by 8 digits
        'origin' => $faker->randomElement(['blood', 'saliva', 'droppings']),
        // 'sequence' => file_get_contents("storage/app/fasta/sample_$sample_number.fasta"),
        'sequence' => 'storage/app/fasta/sample_1.fasta',
        'pattern' => $pattern,
        'dog_id' => $faker->randomElement([NULL, $faker->randomElement($dog_ids)]),
        'bio_user_id' => Role::where('name', 'bio')->first()->users()->first()->id,
    ];
});
