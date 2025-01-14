<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Illuminate\Support\Facades\Auth;
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
    
}


