<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Models\User;

class UserController extends Controller
{
    public function updateProfile(Request $request)
    {
        $user = $request->user();

    $validated = $request->validate([
        'full_name' => 'required|string|max:255',
        'email' => 'required|email|max:255|unique:users,email,' . $user->id,
        'phone_number' => 'required|string|max:15',
        'address' => 'required|string|max:255',
        'employeeId' => 'nullable|string|max:50',
        'department' => 'nullable|string|max:50',
        'profilePicture' => 'nullable|image|max:2048',
    ]);

    if ($request->hasFile('profilePicture')) {
        $path = $request->file('profilePicture')->store('profile_pictures', 'public');
        $validated['profilePicture'] = $path;
    }

    $user->update($validated);

    return redirect()->route('dashboard')->with([
        'message' => 'Profile updated successfully.',
        'auth.user' => $user->fresh(), // Ensure Inertia gets updated user data
    ]);
}

public function index()
{
    // Fetch all users with role 'user'
    $users = User::where('role', 'user')->get();
    return response()->json($users);
}

public function update(Request $request, $id)
{
    // Validate input
    $request->validate([
        'full_name' => 'required|string|max:255',
        'email' => 'required|email|max:255',
    ]);

    // Update user
    $user = User::findOrFail($id);
    $user->update($request->only('full_name', 'email', 'phone_number', 'address'));

    return response()->json(['message' => 'User updated successfully']);
}

public function destroy($id)
{
    // Delete user
    $user = User::findOrFail($id);
    $user->delete();

    return response()->json(['message' => 'User deactivated successfully']);
}
}
