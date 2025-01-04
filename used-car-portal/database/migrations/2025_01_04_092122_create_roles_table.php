<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
use database\helpers\SchemaDefinitions;

return new class extends Migration {
    public function up()
    {
        Schema::create('roles', function (Blueprint $table) {
            SchemaDefinitions::createRoles($table);
        });
    }

    public function down()
    {
        Schema::dropIfExists('roles');
    }
};

