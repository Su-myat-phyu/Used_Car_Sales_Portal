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
                if (!empty($car->images)) {
                    // Decode and map image paths for the frontend
                    $car->images = collect(json_decode($car->images))->map(function ($path) {
                        return asset('storage/' . $path); // Convert paths to full URLs
                    })->toArray();
                }
            }
            return response()->json($cars); // Return cars with images
        } catch (\Exception $e) {
            return response()->json(['error' => $e->getMessage()], 500);
        }
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
