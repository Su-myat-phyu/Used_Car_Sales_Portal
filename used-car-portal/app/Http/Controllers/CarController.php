<?php
namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class CarController extends Controller
{
    // Fetch all cars
    public function apiIndex()
    {
        return response()->json([
            [
                'id' => 1,
                'make' => 'Toyota',
                'model' => 'Camry',
                'year' => 2021,
                'price' => 20000,
                'image_path' => asset('storage/images/toyotaCar.png'),
                'biddingPrice' => 25000,
            ],
            [
                'id' => 2,
                'make' => 'Honda',
                'model' => 'Civic',
                'year' => 2020,
                'price' => 18000,
                'image_path' => 'https://example.com/images/car2.jpg',
                'biddingPrice' => 13000,
            ],
        ]);
    }

    // Store a new car
    public function apiStore(Request $request)
    {
        // Validate incoming request
        $validatedData = $request->validate([
            'make' => 'required|string|max:255',
            'model' => 'required|string|max:255',
            'year' => 'required|integer|min:1886|max:' . date('Y'),
            'image_path' => 'nullable|image|max:2048', // Optional image upload
            'biddingPrice' => 'required|numeric|min:0',
        ]);

        // Handle image upload
        $imagePath = null;
        if ($request->hasFile('image')) {
            $imagePath = $request->file('image')->store('cars', 'public');
        }

        // Simulate saving car to DB
        $car = [
            'id' => rand(100, 999),
            'make' => $validatedData['make'],
            'model' => $validatedData['model'],
            'year' => $validatedData['year'],
            'price' => $validatedData['price'],
            'image_path' => $imagePath ? Storage::url($imagePath) : null,
            'biddingPrice' => $validatedData['biddingPrice'],
        ];

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
