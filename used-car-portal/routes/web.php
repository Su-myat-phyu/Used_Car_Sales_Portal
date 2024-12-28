<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\Auth\RegistrationController;
use App\Http\Controllers\Auth\LoginController;
use App\Http\Controllers\CarController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use App\Http\Controllers\UserDashboardController;

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


Route::get('/register', [RegistrationController::class, 'showRegistrationForm'])->name('register');
Route::post('/register', [RegistrationController::class, 'register']);

Route::get('/login', [LoginController::class, 'showLoginForm'])->name('login');
Route::post('/login', [LoginController::class, 'login'])->name('login');
Route::post('/logout', [LoginController::class, 'logout'])->name('logout');

Route::get('/car-details/{id}', [CarController::class, 'show'])->name('car.details');

//User Dashboard
// Post a Car for Sale
Route::post('/dashboard/post-car', function (Request $request) {
    $validated = $request->validate([
        'carTitle' => 'required|string|max:255',
        'carPrice' => 'required|string|max:255',
        'carImage' => 'required|image|mimes:jpeg,png,jpg|max:2048', // Validate image file
    ]);

    // Store the uploaded image
    $path = $request->file('carImage')->store('public/cars');

    // Save car data (replace this with actual database save logic)
    $carData = [
        'title' => $validated['carTitle'],
        'price' => $validated['carPrice'],
        'image_path' => Storage::url($path),
    ];

    // Log or save car data
    info('Car Posted:', $carData);

    return response()->json([
        'message' => 'Car posted successfully!',
        'car' => $carData,
    ]);
})->middleware('auth');

// Update User Profile
Route::post('/dashboard/update-profile', function (Request $request) {
    $validated = $request->validate([
        'userName' => 'required|string|max:255',
        'userEmail' => 'required|email|max:255',
    ]);

    // Save profile data (replace this with actual database save logic)
    $profileData = [
        'name' => $validated['userName'],
        'email' => $validated['userEmail'],
    ];

    info('Profile Updated:', $profileData);

    return response()->json([
        'message' => 'Profile updated successfully!',
        'profile' => $profileData,
    ]);
})->middleware('auth');

// Post Bidding Price
Route::post('/dashboard/post-bid', function (Request $request) {
    $validated = $request->validate([
        'userBidPrice' => 'required|numeric|min:1',
    ]);

    // Save bid data (replace this with actual database save logic)
    $bidData = [
        'bid_price' => $validated['userBidPrice'],
    ];

    info('Bid Posted:', $bidData);

    return response()->json([
        'message' => 'Bid posted successfully!',
        'bid' => $bidData,
    ]);
})->middleware('auth');

// Go to Dashboard after Successful Login
Route::middleware(['auth'])->group(function () {
    Route::get('/dashboard', [UserDashboardController::class, 'index'])->name('user.dashboard');
});