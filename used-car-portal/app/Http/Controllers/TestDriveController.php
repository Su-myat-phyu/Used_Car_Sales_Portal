<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\TestDrive;

class TestDriveController extends Controller
{
    // Handle scheduling a test drive
    public function store(Request $request)
    {
        $validated = $request->validate([
            'car_id' => 'required|exists:cars,id',
            'name' => 'required|string|max:255',
            'email' => 'required|email|max:255',
            'date' => 'required|date|after_or_equal:today',
        ]);

        $testDrive = TestDrive::create($validated);

        return response()->json(['message' => 'Test drive scheduled successfully', 'testDrive' => $testDrive], 201);
    }
}
