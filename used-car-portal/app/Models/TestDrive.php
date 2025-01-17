<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class TestDrive extends Model
{
    use HasFactory;

    protected $fillable = [
        'car_id', 'name', 'email', 'date',
    ];

    public function car()
    {
        return $this->belongsTo(Car::class);
    }
}

