<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\TestDrive;
use Illuminate\Support\Facades\Auth;
use App\Models\Bid;

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

    $validated['user_id'] = Auth::id();

    // Check if a test drive already exists for the same car, user, and date
    $existingTestDrive = TestDrive::where('car_id', $validated['car_id'])
        ->where('user_id', $validated['user_id'])
        ->where('date', $validated['date'])
        ->first();

    if ($existingTestDrive) {
        return response()->json(['error' => 'You have already scheduled a test drive for this car on the selected date.'], 400);
    }

    $testDrive = TestDrive::create($validated);

    return response()->json(['message' => 'Test drive scheduled successfully', 'testDrive' => $testDrive], 201);
}


    public function index()
    {
        $appointments = TestDrive::with('car')->where('status', 'pending')->get();

        return response()->json($appointments);
    }

    public function updateStatus(Request $request, $id)
    {
        $request->validate([
            'status' => 'required|in:approved,rejected',
        ]);

        $testDrive = TestDrive::findOrFail($id);
        $testDrive->status = $request->status;
        $testDrive->save();

        return response()->json(['message' => 'Appointment status updated successfully']);
    }


    public function update(Request $request, $id)
{
    try {
        $request->validate([
            'status' => 'required|in:approved,rejected',
        ]);

        $testDrive = TestDrive::findOrFail($id);
        $testDrive->status = $request->status;
        $testDrive->save();

        return response()->json(['message' => 'Test drive status updated successfully']);
    } catch (\Exception $e) {
        return response()->json(['error' => $e->getMessage()], 500);
    }
}

    public function getUserTestDrives(Request $request)
{
    try {
        $userId = Auth::id();

        if (!$userId) {
            return response()->json(['error' => 'User not authenticated'], 401);
        }

        // Fetch test drives for the authenticated user
        $testDrives = TestDrive::with('car')
            ->where('user_id', $userId)
            ->get(['id', 'car_id', 'date', 'status']);

        if ($testDrives->isEmpty()) {
            return response()->json(['message' => 'No test drives found'], 404);
        }

        return response()->json($testDrives, 200);
    } catch (\Exception $e) {
        return response()->json(['error' => $e->getMessage()], 500);
    }
}





    /*public function scheduleTestDrive(Request $request)
{
    try {
        // Validate incoming data
        $validated = $request->validate([
            'car_id' => 'required|exists:cars,id',
            'name' => 'required|string|max:255',
            'email' => 'required|email|max:255',
            'date' => 'required|date|after:today',
        ]);

        // Create a new Test Drive
        TestDrive::create([
            'car_id' => $validated['car_id'],
            'name' => $validated['name'],
            'email' => $validated['email'],
            'date' => $validated['date'],
            'status' => 'pending', // Default status
        ]);

        // Return success response
        return response()->json(['message' => 'Test drive scheduled successfully!'], 201);

    } catch (\Illuminate\Validation\ValidationException $e) {
        // Return validation errors
        return response()->json([
            'message' => 'Validation failed',
            'errors' => $e->errors(),
        ], 422);
    } catch (\Exception $e) {
        // Return general error
        return response()->json([
            'message' => 'Failed to schedule the test drive',
            'error' => $e->getMessage(),
        ], 500);
    }
}*/

// Approve a test drive
public function approveTestDrive($id)
{
    try {
        $testDrive = TestDrive::with('car')->findOrFail($id);

        // Ensure only authorized users can approve
        if (Auth::user()->role !== 'admin' && $testDrive->car->user_id !== Auth::id()) {
            return response()->json(['error' => 'Unauthorized action.'], 403);
        }

        // Update status to approved
        $testDrive->status = 'approved';
        $testDrive->save();

        return response()->json(['message' => 'Appointment approved successfully.']);
    } catch (\Exception $e) {
        return response()->json(['error' => 'Failed to approve appointment: ' . $e->getMessage()], 500);
    }
}

// Reject a test drive
public function rejectTestDrive($id)
{
    try {
        $testDrive = TestDrive::with('car')->findOrFail($id);

        // Ensure only authorized users can reject
        if (Auth::user()->role !== 'admin' && $testDrive->car->user_id !== Auth::id()) {
            return response()->json(['error' => 'Unauthorized action.'], 403);
        }

        // Update status to rejected
        $testDrive->status = 'rejected';
        $testDrive->save();

        return response()->json(['message' => 'Appointment rejected successfully.']);
    } catch (\Exception $e) {
        return response()->json(['error' => 'Failed to reject appointment: ' . $e->getMessage()], 500);
    }
}


}
