<?php

namespace Database\Helpers;

use Illuminate\Database\Schema\Blueprint;

class SchemaDefinitions
{
    

    public static function createRoles(Blueprint $table)
    {
        $table->id();
        $table->string('name')->unique();
        $table->longText('description');
        $table->timestamps();
    }
    
}