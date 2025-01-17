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

    public function index()
    {
        // Fetch test drive requests with related car details
        $testDrives = TestDrive::with('car')->get();

        return response()->json($testDrives);
    }

    public function update(Request $request, $id)
    {
        // Approve or reject test drive
        $testDrive = TestDrive::findOrFail($id);
        $testDrive->status = $request->status; // 'approved' or 'rejected'
        $testDrive->save();

        return response()->json(['message' => 'Test drive status updated successfully.']);
    }
}
