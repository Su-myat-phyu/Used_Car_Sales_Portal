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
Route::prefix('cars')->group(function () {
    Route::post('/', [CarController::class, 'store'])->name('cars.store');
    Route::get('/', [CarController::class, 'index'])->name('cars.index');
});
