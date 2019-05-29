<?php

use App\Infraction;
use Illuminate\Database\Seeder;

class InfractionsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        factory(Infraction::class, 11)->create();
    }
}
