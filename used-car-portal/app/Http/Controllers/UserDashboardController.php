<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Illuminate\Support\Facades\Auth;
class UserDashboardController extends Controller
{
    /**
     * Show the user dashboard.
     */

     
    public function index()
    {
        return Inertia::render('Dashboard/UserDashboard'); // Ensure DashboardPage exists in resources/js/Pages
        
    }

    public function userDashboard()
    {
        return inertia('Dashboard/UserDashboard', [
            'userName' => Auth::user()->full_name, // Pass the user's full name
        ]);
    }
    
}


