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
use App\Http\Controllers\AdminDashboardController;
use App\Http\Controllers\BidController;
use App\Http\Controllers\TestDriveController;

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
/*Route::middleware(['auth', 'verified'])->get('/user-dashboard', function () {
    $user = Auth::user();
    if ($user) {
        if ($user->role === 'user') {
            return Inertia::render('Dashboard/UserDashboard'); // React component for user dashboard
        }

        if ($user->role === 'admin') {
            return Inertia::render('Dashboard/AdminDashboard'); 
        }
    }

    return redirect()->route('home');
})->name('dashboard');*/
// User Dashboard Route
/*Route::middleware(['auth', 'verified', 'role:user'])->get('/user-dashboard', function () {
    return Inertia::render('Dashboard/UserDashboard');
})->name('user.dashboard');

// Admin Dashboard Route
Route::middleware(['auth', 'verified', 'role:admin'])->get('/admin-dashboard', function () {
    return Inertia::render('Dashboard/AdminDashboard');
})->name('admin.dashboard');
// Middleware to handle role-based dashboard redirection
Route::middleware(['auth', 'verified'])->get('/dashboard', function () {
    $user = Auth::user();

    if ($user->role === 'admin') {
        return redirect()->route('admin.dashboard');
    }

    if ($user->role === 'user') {
        return redirect()->route('user.dashboard');
    }

    return redirect('/home'); // Fallback
})->name('dashboard');*/
/*Route::get('/user-dashboard', function () {
    return Inertia::render('Dashboard/UserDashboard');
})->middleware(['auth', 'verified', 'role:user'])->name('user-dashboard');

Route::get('/admin-dashboard', function () {
    return Inertia::render('Dashboard/AdminDashboard');
})->middleware(['auth', 'verified'])->name('admin-dashboard');

Route::get('/dashboard', function () {
    $user = Auth::user();
    if ($user) {
        if ($user->role->contains('name', 'admin')) {
            return redirect()->route('admin-dashboard');
        }

        if ($user->role->contains('name', 'user')) {
            return redirect()->route('user-dashboard');
        }

        
    }
    return redirect()->route('home');
})->middleware(['auth', 'verified'])->name('dashboard');*/

// Dashboard Routes (Protected by Middleware)
Route::middleware('auth')->group(function () {
    Route::get('/admin-dashboard', function () {
        return inertia('Dashboard/AdminDashboard'); // Render Admin Dashboard
    })->middleware('role:admin');

    Route::get('/user-dashboard', function () {
        return inertia('Dashboard/UserDashboard'); // Render User Dashboard
    })->middleware('role:user');
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

/*Route::post('/register', [RegistrationController::class, 'register']);
Route::post('/login', [LoginController::class, 'login']);
Route::middleware('auth')->get('/user-dashboard', function () {
    return Inertia::render('Dashboard/UserDashboard'); // Render React component
});*/

//Handle username in dashboard
Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('/user-dashboard', [UserDashboardController::class, 'userDashboard'])->name('user.dashboard');
});

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('/admin-dashboard', [AdminDashboardController::class, 'adminDashboard'])->name('admin.dashboard');
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
    Route::put('/user/car/{id}', [CarController::class, 'updateCar']);
});



Route::patch('/cars/{id}/update-bidding-status', [CarController::class, 'updateBiddingStatus']);

//Authenticated parts
Route::get('/authResearch', function () {
    return Inertia('features/CarListing/Pages/AuthCarListingPage');
});

Route::get('/authHome', function () {
    return inertia('AuthHome');
});

Route::get('/authAbout', function () {
    return Inertia('features/AboutUs/Pages/AuthAboutUsPage');
});

Route::get('/authContact', function () {
    return Inertia('features/ContactUs/Pages/AuthContactUsPage');
});

Route::post('/bids', [BidController::class, 'store']);

Route::get('/cars/{id}/bids', [BidController::class, 'index']);

//fetch bids received
Route::middleware(['auth'])->group(function () {
    //Route::post('/user/bids-received', [BidController::class, 'getReceivedBids']);
    //Route::match(['GET', 'POST'], '/user/bids-received', [BidController::class, 'getReceivedBids']);
    Route::get('/user/bids-received', [BidController::class, 'getReceivedBids']);

});

//accept bid
Route::post('/user/bid/{bidId}/accept', [BidController::class, 'acceptBid']);

//decline bid
Route::post('/user/bid/{bidId}/decline', [BidController::class, 'declineBid']);

Route::middleware(['auth'])->group(function () {
    Route::post('/user/bid/{bidId}/accept', [BidController::class, 'acceptBid']);
    Route::post('/user/bid/{bidId}/decline', [BidController::class, 'declineBid']);
});

Route::middleware(['auth'])->group(function () {
    Route::get('/user/bids', [BidController::class, 'getUserBids']);
});

//Admin
// Admin routes for managing users
Route::get('/users-management', [UserController::class, 'index']);
Route::put('/users-management/{id}', [UserController::class, 'update']);
Route::delete('/users-management/{id}', [UserController::class, 'destroy']);

// Admin routes for managing test drive appointments

Route::post('/test-drives', [TestDriveController::class, 'store']);
Route::get('/test-drives', [TestDriveController::class, 'index']);
Route::patch('/test-drives/{id}', [TestDriveController::class, 'update'])->name('test-drives.update');

//Test drive approval for user
Route::middleware('auth')->group(function () {
    Route::get('/user/test-drives', [TestDriveController::class, 'getUserTestDrives']);
});

Route::post('/schedule-test-drive', [TestDriveController::class, 'scheduleTestDrive']);

Route::middleware(['auth'])->group(function () {
    Route::post('/test-drives/{id}/approve', [TestDriveController::class, 'approveTestDrives']);
    Route::post('/test-drives/{id}/reject', [TestDriveController::class, 'rejectTestDrives']);
});