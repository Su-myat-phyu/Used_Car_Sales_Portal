<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Role extends Model
{
    use HasFactory;
    protected $table = 'role';
    

    public static function validationRules()
    {
        return [
            'name' => 'required|string|unique:role,name',
            
        ];
    }

    public function users()
    {
        return $this->belongsToMany(User::class, 'user_with_role', 'role_id', 'user_id');
    }

    public function findByName(string $name)
    {
        return $this->where('name', $name)->first();
    }
}