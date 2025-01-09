<?php

use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return inertia('Home'); // "Home" matches the React component name
});

Route::get('/about', function () {
    return inertia('features/aboutus/pages/AboutUsPage');
});

Route::get('/contact', function () {
    return inertia('features/contactus/pages/ContactUsPage');
});