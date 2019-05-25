<?php

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        // Roles creation has to be executed first.
        // $this->call(RolesTableSeeder::class);

        // Then, the users will need the previous generated roles.
        $this->call(UsersTableSeeder::class);
        
        // Business tables that do not have an associated model.
        $this->call(BreedsTableSeeder::class);
        $this->call(ColorsTableSeeder::class);
        $this->call(StrsTableSeeder::class);

        // Tables that do have an associated model.
        $this->call(DogsTableSeeder::class);
        $this->call(SamplesTableSeeder::class);
        // $this->call(IncidentsTableSeeder::class);
        // $this->call(InfractionsTableSeeder::class);
    }
}
