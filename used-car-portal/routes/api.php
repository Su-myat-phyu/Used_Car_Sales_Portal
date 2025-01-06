<?php
use App\Http\Controllers\AuthController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Models\Car;

Route::post('/register', [AuthController::class, 'register']);
Route::post('/login', [AuthController::class, 'login']);
Route::middleware('auth:sanctum')->group(function () {
    Route::post('/logout', [AuthController::class, 'logout']);
});

Route::post('/cars', function (Request $request) {
    $validated = $request->validate([
        'make' => 'required|string|max:255',
        'model' => 'required|string|max:255',
        'year' => 'required|integer',
        'price' => 'required|numeric',
        'images' => 'nullable|array',
        'images.*' => 'image|mimes:jpeg,png,jpg|max:2048',
    ]);

    $imagePaths = [];
    if ($request->hasFile('images')) {
        foreach ($request->file('images') as $image) {
            $path = $image->store('cars', 'public');
            $imagePaths[] = $path;
        }
    }

    Car::create([
        'make' => $validated['make'],
        'model' => $validated['model'],
        'year' => $validated['year'],
        'price' => $validated['price'],
        'image_path' => json_encode($imagePaths),
    ]);

    return response()->json(['message' => 'Car posted successfully!']);
});

