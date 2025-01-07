<?php
use App\Http\Controllers\AuthController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Models\Car;
use App\Http\Controllers\CarController;

Route::post('/register', [AuthController::class, 'register']);
Route::post('/login', [AuthController::class, 'login']);
Route::middleware('auth:sanctum')->group(function () {
    Route::post('/logout', [AuthController::class, 'logout']);
});
// Car API Routes
Route::get('cars', [CarController::class, 'apiIndex'])->name('cars.index');; // Fetch all cars
Route::post('cars', [CarController::class, 'apiStore']); // Create a new car
Route::get('cars/{id}', [CarController::class, 'apiShow']); // Fetch a single car by ID


//Route::prefix('api')->group(function () {
    //Route::get('cars', [CarController::class, 'apiIndex'])->name('cars.index');
    //Route::post('cars', [CarController::class, 'apiStore'])->name('cars.store');
    //Route::get('cars/{id}', [CarController::class, 'apiShow']); // Fetch a single car by ID
//});