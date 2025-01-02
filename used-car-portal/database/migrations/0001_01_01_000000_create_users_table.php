<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up()
{
    Schema::create('users', function (Blueprint $table) {
        $table->id();
        $table->string('full_name')->nullable();
        $table->string('email')->unique();
        $table->string('password');
        $table->string('role')->default('user');
        $table->string('phone_number')->nullable();
        $table->string('address')->nullable();
        $table->string('profile_picture')->nullable();
        $table->string('employee_id')->nullable();
        $table->string('department')->nullable();
        $table->timestamps();
    });
}

    public function down(): void
    {
        Schema::dropIfExists('users');
    }
};


