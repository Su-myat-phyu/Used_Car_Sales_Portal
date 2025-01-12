<?php
namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use App\Models\Car;
use Illuminate\Support\Facades\Auth;

class CarController extends Controller
{
    public function index(Request $request)
    {
        $query = Car::query();

    // Filter by user-specific cars
    $query->where('user_id', Auth::id());

    // Apply filters if provided
    if ($request->has('make')) {
        $query->where('make', $request->make);
    }
    if ($request->has('model')) {
        $query->where('model', $request->model);
    }
    if ($request->has('year')) {
        $query->where('year', $request->year);
    }
    if ($request->has('minPrice')) {
        $query->where('price', '>=', $request->minPrice);
    }
    if ($request->has('maxPrice')) {
        $query->where('price', '<=', $request->maxPrice);
    }
        
    $cars = $query->get();

    foreach ($cars as $car) {
        if (!empty($car->images)) {
            $car->images = collect(json_decode($car->images))->map(function ($path) {
                return asset('storage/' . $path);
            })->toArray();
        }
    }

    return response()->json($cars);
}

    public function store(Request $request)
    {
        // Validate incoming request
        $validatedData = $request->validate([
            'make' => 'required|string|max:255',
            'model' => 'required|string|max:255',
            'year' => 'required|integer|min:1886|max:' . date('Y'),
            'price' => 'required|numeric|min:0',
            'images' => 'nullable|array',
            'images.*' => 'image|max:2048',
            'biddingPrice' => 'required|numeric|min:0',
        ]);

        // Handle image upload
        $imagePaths = [];
        if ($request->hasFile('images')) {
            foreach ($request->file('images') as $image) {
                $path = $image->store('cars', 'public');
                $imagePaths[] = $path;
            }
        }

        // Save car to the database
        $car = Car::create([
            'make' => $validatedData['make'],
            'model' => $validatedData['model'],
            'year' => $validatedData['year'],
            'price' => $validatedData['price'],
            'biddingPrice' => $validatedData['biddingPrice'],
            'user_id' => Auth::id(),
        ]);
        $car->images = json_encode($imagePaths); // Save image paths as JSON
        $car->save();

        return response()->json(['message' => 'Car created successfully!', 'car' => $car], 201);
    }

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
