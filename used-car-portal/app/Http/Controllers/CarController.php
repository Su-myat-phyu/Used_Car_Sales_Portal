<?php
namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use App\Models\Car;
use Illuminate\Support\Facades\Auth;

class CarController extends Controller
{
    public function index()
{
    try {
        $cars = Car::all();
        foreach ($cars as $car) {
            if (!empty($car->image_path)) {
                // Use asset() to generate full URL
                $car->image_path = collect(json_decode($car->image_path))->map(function ($path) {
                    return asset('storage/cars/' . $path);
                });
            }
        }
        return response()->json($cars);
    } catch (\Exception $e) {
        return response()->json(['error' => $e->getMessage()], 500);
    }
}
    // Store a new car
    public function store(Request $request)
{
    // Validate incoming request
    $validatedData = $request->validate([
        'make' => 'required|string|max:255',
        'model' => 'required|string|max:255',
        'year' => 'required|integer|min:1886|max:' . date('Y'),
        'price' => 'required|numeric|min:0',
        'images.*' => 'nullable|image|max:2048', // Array of images
        'biddingPrice' => 'required|numeric|min:0',
    ]);

    // Handle image upload
    $imagePaths = [];
    if ($request->hasFile('images')) {
        foreach ($request->file('images') as $image) {
            $path = $image->store('cars', 'public');
            $imagePaths[] = Storage::url($path);
        }
    }

    // Save car to the database
    $car = Car::create([
        'make' => $validatedData['make'],
        'model' => $validatedData['model'],
        'year' => $validatedData['year'],
        'price' => $validatedData['price'],
        //'image_path' => $imagePaths ? Storage::url($imagePath) : null,
        'biddingPrice' => $validatedData['biddingPrice'],
        'user_id' => Auth::id(), // Set user_id from authenticated user
    ]);
    // Store image paths in a separate table or as JSON
    $car->images = json_encode($imagePaths);
    $car->save();

    return response()->json(['message' => 'Car created successfully!', 'car' => $car], 201);
}

    // Fetch a specific car
    public function apiShow($id)
    {
        // Simulated response for fetching a specific car
        return response()->json([
            'id' => 1,
                'make' => 'Toyota',
                'model' => 'Camry',
                'year' => 2021,
                'price' => 20000,
                'image_path' => asset('storage/images/toyotaCar.png'),
                'biddingPrice' => 25000,
            
        ]);
    }

    
}
