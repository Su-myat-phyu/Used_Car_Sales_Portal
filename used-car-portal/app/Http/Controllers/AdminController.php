<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;

class AdminController extends Controller
{
    // Get all users with the role "user"
    public function getUsers()
    {
        $users = User::where('role', 'user')->get(['id', 'full_name', 'email', 'phone_number', 'address']);
        return response()->json($users);
    }

    // Update a user's information
    public function updateUser(Request $request, $id)
    {
        $validatedData = $request->validate([
            'full_name' => 'required|string|max:255',
            'email' => 'required|email|unique:users,email,' . $id,
            'phone_number' => 'nullable|string|max:15',
            'address' => 'nullable|string|max:255',
        ]);

        $user = User::findOrFail($id);
        $user->update($validatedData);

        return response()->json(['message' => 'User updated successfully.']);
    }

    // Delete a user
    public function deleteUser($id)
    {
        $user = User::findOrFail($id);
        $user->delete();

        return response()->json(['message' => 'User deleted successfully.']);
    }
}

