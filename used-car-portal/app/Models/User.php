<?php

namespace App\Models;

use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;

class User extends Authenticatable
{
    use Notifiable;

    // app/Models/User.php
protected $fillable = [
    'full_name', 'email', 'password', 'role', 'phone_number', 
    'address', 'profile_picture', 'employee_id', 'department',
];

protected $hidden = ['password', 'remember_token'];

}


