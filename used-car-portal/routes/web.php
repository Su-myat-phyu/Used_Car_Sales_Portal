<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\Auth\RegistrationController;
use App\Http\Controllers\Auth\LoginController;

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
Route::post('/login', [LoginController::class, 'login']);
Route::post('/logout', [LoginController::class, 'logout'])->name('logout');

Route::get('/car-details/{id}', function ($id) {
    $cars = [
        [
            'id' => 1,
            'title' => 'Toyota Camry 2021',
            'price' => '$20,000',
            'tagline' => 'Reliable. Affordable. Ready for You.',
            'image' => '/assets/images/toyota-camry.jpg',
        ],
        // Add more cars...
    ];

    $car = collect($cars)->firstWhere('id', $id);

    if (!$car) {
        abort(404, 'Car not found');
    }

    return Inertia::render('features/CarDetail/Pages/CarDetailPage', [
        'car' => $car,
    ]);
})->name('car.details');