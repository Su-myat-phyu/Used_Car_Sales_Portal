<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Http\Requests\Auth\LoginRequest;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Inertia\Response;

class AuthenticatedSessionController extends Controller
{
    /**
     * Display the login view.
     */
    public function create(): Response
    {
        return Inertia::render('Auth/Login', [
            'canResetPassword' => Route::has('password.request'),
            'status' => session('status'),
        ]);
    }

    /**
     * Handle an incoming authentication request.
     */
    public function store(LoginRequest $request): RedirectResponse
    {
        $request->authenticate();

        $request->session()->regenerate();

        $user = Auth::user();
        //$redirectRoute = $user->role === 'admin' ? 'admin.dashboard' : 'user.dashboard';
    
        //return redirect()->route($redirectRoute);

        //return redirect()->intended(route('dashboard', absolute: false));
        // Check if the user has roles and redirect accordingly
        if ($user) {
            // Check for admin role first
            if ($user->role->pluck('name')->contains('admin')) {
                return redirect()->route('admin-dashboard');
            }

            // Check for member role if no admin role
            if ($user->roles->pluck('name')->contains('user')) {
                return redirect()->route('user-dashboard');
            }

            

            // Default redirection if no specific role matches
            return redirect()->route('home');
        }

        // Fallback if no user is authenticated
        return redirect()->route('login');
    }
    

    /**
     * Destroy an authenticated session.
     */
    public function destroy(Request $request): RedirectResponse
    {
        Auth::guard('web')->logout();

        $request->session()->invalidate();

        $request->session()->regenerateToken();

        return redirect('/');
    }
}
