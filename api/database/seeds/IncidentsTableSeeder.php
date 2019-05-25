<?php

use App\Incident;
use Illuminate\Database\Seeder;

class IncidentsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        factory(Incident::class, 10)->create();
    }
}
