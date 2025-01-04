<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class roles extends Model
{
    use HasFactory;
    protected $table = 'role';
    protected $fillable = ['name', 'description'];

    public static function validationRules()
    {
        return [
            'name' => 'required|string|unique:roles,name',
            'description' => 'required|string',
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