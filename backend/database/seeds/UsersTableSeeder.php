<?php

use App\Role;
use App\User;
use Illuminate\Database\Seeder;

class UsersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $role_guest = Role::where('name', 'guest')->first();
        $role_admin = Role::where('name', 'admin')->first();
        $role_vet = Role::where('name', 'vet')->first();
        $role_bio = Role::where('name', 'bio')->first();
        $role_agent = Role::where('name', 'agent')->first();
        $role_officer = Role::where('name', 'officer')->first();

        $this->createUser('Guest', 'guest', '123456', $role_guest);
        $this->createUser('Alejandro Asensio', 'alejandro', '123456', $role_admin);
        $this->createUser('Óscar Burgos', 'oscar', '123456', $role_admin);
        $this->createUser('Elisabet Aguayo', 'elisabet', '123456', $role_vet);
        $this->createUser('Francisco Regaña', 'paco', '123456', $role_bio);
        $this->createUser('Ainhoa Barceló', 'ainhoa', '123456', $role_agent);
        $this->createUser('Pablo Cubiles', 'pablo', '123456', $role_officer);
    }

    /**
     * Create a user.
     *
     * @return void
     */
    private function createUser(string $name, string $alias, string $password, Role $role)
    {
        $user = new User();
        $user->name = $name;
        $user->email = "$alias@ocikitos.com";
        $user->password = bcrypt($password);
        $user->save();
        $user->roles()->attach($role);
    }
}
