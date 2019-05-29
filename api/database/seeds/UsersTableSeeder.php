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

        $user = new User();
        $user->name = 'Guest';
        $user->email = 'guest@ocikitos.com';
        $user->password = bcrypt('guest');
        $user->save();
        $user->roles()->attach($role_guest);

        $user = new User();
        $user->name = 'Administrator';
        $user->email = 'admin@ocikitos.com';
        $user->password = bcrypt('admin');
        $user->save();
        $user->roles()->attach($role_admin);
    }
}
