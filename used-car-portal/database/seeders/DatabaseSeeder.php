<?php

namespace Database\Seeders;

use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Role;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // User::factory(10)->create();

        User::factory()->count(10)->create(); 

        $userRole = Role::create(['name' => 'user']);
        //$adminRole = Role::create(['name' => 'admin']);
    
        $user = User::find(1); // Replace with an actual user ID
        $user->roles()->attach($userRole);
    }
}
