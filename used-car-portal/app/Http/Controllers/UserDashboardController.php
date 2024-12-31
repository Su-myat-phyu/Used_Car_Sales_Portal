<?php

namespace App\Http\Controllers;

use Inertia\Inertia;

class UserDashboardController extends Controller
{
    /**
     * Show the user dashboard.
     */

     
    public function index()
    {
        return Inertia::render('Dashboard/UserDashboard'); // Ensure DashboardPage exists in resources/js/Pages
        
    }
    
}


