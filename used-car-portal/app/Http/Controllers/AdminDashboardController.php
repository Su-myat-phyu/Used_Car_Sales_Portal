<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Illuminate\Support\Facades\Auth;
use App\Models\User;
use App\Models\Bid;
use App\Models\Car;
class AdminDashboardController extends Controller
{
    /**
     * Show the admin dashboard.
     */

     
    public function index()
    {
        return Inertia::render('Dashboard/AdminDashboard'); // Ensure DashboardPage exists in resources/js/Pages
        
    }

    public function adminDashboard()
    {
        return inertia('Dashboard/AdminDashboard', [
            'userName' => Auth::user()->full_name, // Pass the user's full name
        ]);
    }

    public function overview()
{
    try {
        // Fetch totals
        $totalUsers = User::count(); // Fetch all users for simplicity
        $totalCars = Car::count();
        $availableCars = Car::where('sold_status', 'available')->count();
        $soldCars = Car::where('sold_status', 'sold')->count();

        // Bids over time
        $bidsOverTime = Bid::selectRaw('DATE(created_at) as date, COUNT(*) as total_bids')
            ->groupBy('date')
            ->orderBy('date', 'asc')
            ->get();

        return response()->json([
            'totalUsers' => $totalUsers,
            'totalCars' => $totalCars,
            'availableCars' => $availableCars,
            'soldCars' => $soldCars,
            'bidsOverTime' => $bidsOverTime,
        ]);
    } catch (\Exception $e) {

        return response()->json(['error' => 'Unable to fetch overview data'], 500);
    }
}

    
}


