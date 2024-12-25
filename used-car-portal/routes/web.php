<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

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

Route::get('/register', function () {
    return Inertia('features/Register/Pages/RegisterPage');
});