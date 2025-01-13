<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\CarDetailController;
use App\Models\Car;
use App\Http\Controllers\CarController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Http\Controllers\UserDashboardController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\UserActivityController;


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
// New route to fetch authenticated user's data


//Route::get('/user-dashboard', function () {
    //return Inertia::render('Dashboard/UserDashboard');
//})->middleware(['auth', 'verified', 'role:user'])->name('user-dashboard');

//Route::middleware('auth')->get('/user-dashboard', function () {
    //return Inertia::render('Dashboard/UserDashboard'); // Render React component
//});

/*Route::middleware('auth')->get('/user-dashboard', function () {
    return Inertia::render('Dashboard/UserDashboard'); // Render React component
})->name('user-dashboard');

Route::get('/user-dashboard', function () {
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
})->middleware(['auth', 'verified'])->name('dashboard');*/
Route::middleware(['auth', 'verified'])->get('/user-dashboard', function () {
    $user = Auth::user();
    if ($user) {
        if ($user->role === 'user') {
            return Inertia::render('Dashboard/UserDashboard'); // React component for user dashboard
        }

        if ($user->role === 'admin') {
            return redirect()->route('admin-dashboard');
        }
    }

    return redirect()->route('home');
})->name('user-dashboard');

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

/*Route::post('/register', [RegistrationController::class, 'register']);
Route::post('/login', [LoginController::class, 'login']);
Route::middleware('auth')->get('/user-dashboard', function () {
    return Inertia::render('Dashboard/UserDashboard'); // Render React component
});*/

//Handle username in dashboard
Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('/user-dashboard', [UserDashboardController::class, 'userDashboard'])->name('user.dashboard');
});

//update user profile
Route::middleware('auth')->group(function () {
    Route::get('/profile', function () {
        return inertia('Dashboard/Components/Profile');
    })->name('profile.view'); // Name your route for easier reference

    //Route::put('/user/profile-information', [UserController::class, 'updateProfile'])->name('profile.update');
    Route::match(['put', 'patch'], '/user/profile-information', [UserController::class, 'updateProfile'])->name('profile.update');

});

Route::middleware('auth')->group(function () {
    Route::get('/profile/edit', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile/update', [ProfileController::class, 'update'])->name('profile.update');
});

//Posted car and bid
Route::middleware('auth')->group(function () {
    Route::get('/user/cars-for-sale', [UserActivityController::class, 'getCarsForSale']);
    Route::get('/user/active-bids', [UserActivityController::class, 'getActiveBids'])->middleware('auth');;
    Route::delete('/user/car/{id}', [UserActivityController::class, 'deleteCar']);
});

Route::get('/cars/active-bids', [CarController::class, 'getActiveBids']);
Route::get('/cars/inactive-bids', [CarController::class, 'getInactiveBids']);

Route::patch('/cars/{id}/update-bidding-status', [CarController::class, 'updateBiddingStatus']);







