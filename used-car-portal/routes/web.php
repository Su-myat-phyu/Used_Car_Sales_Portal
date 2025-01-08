<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\CarDetailController;
use App\Models\Car;
use App\Http\Controllers\CarController;
use Illuminate\Http\Request;


//Route::get('/', function () {
   // return view('Home');
//});

Route::get('/', function () {
    return inertia('Home');
});

Route::get('/about', function () {
    return Inertia('features/AboutUs/Pages/AboutUsPage');
});



Route::get('/contact', function () {
    return Inertia('features/ContactUs/Pages/ContactUsPage');
});

Route::get('/research', function () {
    return Inertia('features/CarListing/Pages/CarListingPage');
});

Route::get('/car-details/{id}', [CarDetailController::class, 'show'])->name('car.details');


Route::get('/register', fn() => Inertia::render('Auth/Register'));
Route::post('/register', [AuthController::class, 'register']);

Route::get('/login', fn() => Inertia::render('Auth/Login'));
Route::post('/login', [AuthController::class, 'login']);

Route::post('/logout', [AuthController::class, 'logout']);
Route::middleware('auth')->get('/user-dashboard', function () {
    return Inertia::render('Dashboard/UserDashboard'); // Render React component
});

//Added car
//Route::middleware(['auth'])->group(function () {
   // Route::post('/api/cars', [CarController::class, 'store'])->name('cars.store'); // Add car
   // Route::get('/api/cars', [CarController::class, 'index'])->name('cars.index'); // Get cars
//});
Route::prefix('cars')->group(function () {
    Route::post('/', [CarController::class, 'store'])->name('cars.store');
    Route::get('/', [CarController::class, 'index'])->name('cars.index');
});
// Car API Routes
//Route::get('/cars', [CarController::class, 'apiIndex'])->name('cars.index');; // Fetch all cars
//Route::post('/cars', [CarController::class, 'apiStore']); // Create a new car
//Route::get('cars/{id}', [CarController::class, 'apiShow']); // Fetch a single car by ID
