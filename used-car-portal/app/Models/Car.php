<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Car extends Model
{
    use HasFactory;

    protected $fillable = [
        'make',
        'model',
        'year',
        'price',
        'images',
        'description',
        'status',
        'sold_status',
        'mileage', 'transmission', 'fuel_type', 'features',
        'user_id',
    ];

    protected $casts = [
        'images' => 'array', // Cast images column as an array
        'features' => 'array', // Cast JSON 'features' to array
    ];

    public function bids()
{
    return $this->hasMany(Bid::class);
}
public function user()
{
    return $this->belongsTo(User::class);
}

}