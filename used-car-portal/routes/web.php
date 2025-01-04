<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\CarController;
use App\Http\Models\User;
use App\Http\Models\Role;
use Illuminate\Support\Facades\Auth;

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

Route::get('/car-details/{id}', [CarController::class, 'show'])->name('car.details');


Route::get('/register', fn() => Inertia::render('Auth/Register'));
Route::post('/register', [AuthController::class, 'register']);

Route::get('/login', fn() => Inertia::render('Auth/Login'));
Route::post('/login', [AuthController::class, 'login']);

Route::post('/logout', [AuthController::class, 'logout']);



Route::get('/dashboard', function () {
    $user = Auth::user();
    if ($user) {
        if ($user->roles->contains('name', 'user')) {
            return redirect()->route('user-dashboard');
        }

        if ($user->roles->contains('name', 'admin')) {
            return redirect()->route('admin-dashboard');
        }    
    }
    return redirect()->route('home');
})->middleware(['auth', 'verified'])->name('dashboard');



