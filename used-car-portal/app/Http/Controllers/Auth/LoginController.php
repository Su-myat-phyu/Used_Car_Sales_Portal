<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class LoginController extends Controller
{
    // Show login form
    public function showLoginForm()
    {
        return Inertia::render('Auth/Pages/LoginPage');
    }

    // Handle login request
    public function login(Request $request)
    {
        $credentials = $request->validate([
            'email' => ['required', 'email'],
            'password' => ['required'],
        ]);

        if (Auth::attempt($credentials, $request->boolean('remember'))) {
            $request->session()->regenerate();
    
            $user = Auth::user();
    
            // Pass the user's role to the frontend
            return inertia('Dashboard', [
                'role' => $user->role, // This makes the role available to the Inertia component
            ]);
    
            // Alternatively, redirect based on role
            if ($user->role === 'admin') {
                return redirect()->route('admin.dashboard');
             }
            if ($user->role === 'user') {
                return redirect()->route('user.dashboard');
             }
        }
        

        // Return errors if login fails
        return back()->withErrors([
            'email' => 'The provided credentials do not match our records.',
        ])->onlyInput('email');
        
    }

    // Handle logout
    public function logout(Request $request)
    {
        Auth::logout();

        $request->session()->invalidate();
        $request->session()->regenerateToken();

        return redirect('/');
    }
}
