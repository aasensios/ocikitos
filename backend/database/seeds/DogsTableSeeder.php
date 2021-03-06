<?php

use App\Dog;
use Illuminate\Database\Seeder;

class DogsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        factory(Dog::class, 50)->create();
    }
}
