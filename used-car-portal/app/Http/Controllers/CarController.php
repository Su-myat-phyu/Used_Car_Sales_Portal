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
    $cars = Car::all(); // Fetch cars from the database
    return response()->json($cars); // Return them as JSON
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
        'image' => 'nullable|image|max:2048', // Optional image upload
        'biddingPrice' => 'required|numeric|min:0',
    ]);

    // Handle image upload
    $imagePath = null;
    if ($request->hasFile('image')) {
        $imagePath = $request->file('image')->store('cars', 'public');
    }

    // Save car to the database
    $car = Car::create([
        'make' => $validatedData['make'],
        'model' => $validatedData['model'],
        'year' => $validatedData['year'],
        'price' => $validatedData['price'],
        'image_path' => $imagePath ? Storage::url($imagePath) : null,
        'biddingPrice' => $validatedData['biddingPrice'],
        'user_id' => Auth::id(), // Set user_id from authenticated user
    ]);

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
