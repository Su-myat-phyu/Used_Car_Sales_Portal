<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up()
    {
        Schema::table('cars', function (Blueprint $table) {
            $table->integer('mileage')->nullable(); // Mileage in kilometers/miles
            $table->enum('transmission', ['Automatic', 'Manual', 'Automatic+Manual'])->default('Automatic');
            $table->enum('fuel_type', ['Petrol', 'Diesel', 'Electric', 'Hybrid'])->default('Petrol');
            $table->json('features')->nullable()->change(); // JSON array for car features
        });
    }

    public function down()
    {
        Schema::table('cars', function (Blueprint $table) {
            $table->dropColumn(['mileage', 'transmission', 'fuel_type', 'features']);
        });
    }
};
