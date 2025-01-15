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
        'user_id',
    ];

    protected $casts = [
        'images' => 'array', // Cast images column as an array
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

