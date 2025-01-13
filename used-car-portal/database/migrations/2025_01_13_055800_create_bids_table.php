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
    Schema::create('bids', function (Blueprint $table) {
        $table->id(); // Primary key
        $table->foreignId('user_id')->constrained()->onDelete('cascade'); // Foreign key to users table
        $table->foreignId('car_id')->constrained()->onDelete('cascade'); // Foreign key to cars table
        $table->decimal('bid_amount', 10, 2); // Bid amount
        $table->boolean('is_active')->default(true); // Active bid flag
        $table->timestamps(); // Created_at and updated_at
    });
}


    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('bids');
    }
};
