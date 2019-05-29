<?php

use App\Role;
use Illuminate\Database\Seeder;

class RolesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $this->createRole('guest', 'Guest');
        $this->createRole('admin', 'Admin');
        $this->createRole('vet', 'Veterinarian');
        $this->createRole('bio', 'Bioinformatic');
        $this->createRole('agent', 'Street Agent');
        $this->createRole('officer', 'Police Officer');
    }

    /**
     * Create a user.
     *
     * @return void
     */
    private function createRole(string $name, string $description)
    {
        $role_admin = new Role();
        $role_admin->name = $name;
        $role_admin->description = $description;
        $role_admin->save();
    }
}
