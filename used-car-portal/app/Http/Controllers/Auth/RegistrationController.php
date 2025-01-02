<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\Rule;

class RegistrationController extends Controller
{
    public function showRegistrationForm()
    {
        return inertia('Auth/Pages/RegisterPage'); // Ensure you have an Inertia component named Register
    }

    public function register(Request $request)
    {
        $validated = $request->validate([
            'full_name' => 'required|string|max:255',
            'email' => 'required|email|unique:users',
            'password' => 'required|confirmed|min:8',
            'role' => 'required|in:user,admin',
        
            // User-specific validation
            'phone_number' => 'nullable|required_if:role,user|string',
            'address' => 'nullable|required_if:role,user|string|max:500',
            'profile_picture' => 'nullable|file|image|max:2048',
        
            // Admin-specific validation
            'employee_id' => 'nullable|required_if:role,admin|string|max:50',
            'department' => 'nullable|required_if:role,admin|string',
        ]);

        // Handle Profile Picture Upload
        if ($request->hasFile('profile_picture')) {
            $path = $request->file('profile_picture')->store('profile_pictures', 'public');
            $validated['profile_picture'] = $path;
        }

        // Create User
        User::create([
            'name' => $validated['full_name'],
            'email' => $validated['email'],
            'password' => Hash::make($validated['password']),
            'role' => $validated['role'],
            'phone_number' => $validated['phone_number'] ?? null,
            'address' => $validated['address'] ?? null,
            'profile_picture' => $validated['profile_picture'] ?? null,
            'employee_id' => $validated['employee_id'] ?? null,
            'department' => $validated['department'] ?? null,
        ]);
        

        return redirect('/login')->with('success', 'Registration successful! Please log in.');
    }
}
