<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Models\User;

class UserController extends Controller
{
    public function updateProfile(Request $request)
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|email|max:255|unique:users,email,' . Auth::id(),
        ]);

        /** @var User $user */
        $user = Auth::user();
        $user->update($request->only('name', 'email'));

        return response()->json(['message' => 'Profile updated successfully.']);
    }
}
