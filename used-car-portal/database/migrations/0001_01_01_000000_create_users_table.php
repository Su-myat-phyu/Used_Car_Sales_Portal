<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('users', function (Blueprint $table) {
            $table->id();
            $table->string('full_name');
            $table->string('email')->unique();
            $table->string('password');
            $table->enum('role', ['user', 'admin']);
            
            // User-specific fields
            $table->string('phone_number')->nullable();
            $table->text('address')->nullable();
            $table->string('profile_picture')->nullable();
            
            // Admin-specific fields
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


