<?php

use Illuminate\Database\Seeder;

class ColorsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        // Official list of existing dog colors (consulted on 2019-05-18). Source: https://en.wikipedia.org/wiki/Coat_(dog)#Colors
        // The array must inlcude the 'name' key for the next insert call.
        $colors = [
            ['name' => 'Brown'],
            ['name' => 'Reddish'],
            ['name' => 'Gold'],
            ['name' => 'Cream'],
            ['name' => 'Fawn'],
            ['name' => 'Black'],
            ['name' => 'Blue'],
            ['name' => 'Grey'],
            ['name' => 'White'],
        ];

        // Insert the data into the database.
        DB::table('colors')->insert($colors);
    }
}
