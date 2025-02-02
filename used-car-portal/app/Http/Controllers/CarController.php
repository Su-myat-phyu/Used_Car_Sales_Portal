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
                //$car->features = json_decode($car->features, true) ?? [];
                // Check if 'features' is valid JSON before decoding
            if (!empty($car->features) && !is_array($car->features)) {
                $decodedFeatures = json_decode($car->features, true);

                // If decoding fails, log an error
                if (json_last_error() !== JSON_ERROR_NONE) {
                    //\Log::error("Invalid JSON in car ID: {$car->id}, Data: {$car->features}");
                    $decodedFeatures = []; // Fallback to empty array
                }

                $car->features = $decodedFeatures;
            }
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
            'description' => 'nullable|string',
            'mileage' => 'nullable|string',
            'transmission' => 'nullable|in:Automatic,Manual,Automatic+Manual',
            'fuel_type' => 'nullable|in:Petrol,Diesel,Electric,Hybrid',
            //'features' => 'nullable|array',
            //'features.*' => 'string',
            'features' => 'nullable|json', // Validate as JSON
            'images' => 'nullable|array',
            'images.*' => 'image|max:2048',
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
            'description' => $request->input('description', 'No description provided'),
            'mileage' => $request->input('mileage', null), // Add mileage
            'transmission' => $request->input('transmission', null), // Add transmission
            'fuel_type' => $request->input('fuel_type', null), // Add fuel type
            //'features' => json_encode($request->input('features', [])), // Add features
            //'features' => $request->input('features', '[]'), // Store as JSON
            'features' => json_decode($request->input('features', '[]')), // Decode JSON
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
                'description' => 'required|string',
                'image_path' => asset('storage/images/toyotaCar.png'),
            
        ]);
    }
    public function updateCar(Request $request, $id)
{
    $car = Car::findOrFail($id);

    if ($car->user_id !== $request->user()->id) {
        return response()->json(['error' => 'Unauthorized'], 403);
    }

    $validatedData = $request->validate([
        'make' => 'required|string|max:255',
        'model' => 'required|string|max:255',
        'year' => 'required|integer',
        'price' => 'required|numeric',
        'description' => 'nullable|string',
    ]);

    $car->update($validatedData);

    return response()->json($car);
}

    // Fetch all car posts with user details
    public function getAllCarPosts()
    {
        try {
            $carPosts = Car::with('user')->get();

            $carPosts = $carPosts->map(function ($car) {
                return [
                    'id' => $car->id,
                    'make' => $car->make,
                    'model' => $car->model,
                    'price' => $car->price,
                    'year' => $car->year,
                    'user_name' => $car->user ? $car->user->name : 'Unknown', // Get user name
                ];
            });

            return response()->json($carPosts);
        } catch (\Exception $e) {
            return response()->json(['error' => $e->getMessage()], 500);
        }
    }

    // Approve a car post
    public function approveCarPost($id)
    {
        try {
            $car = Car::findOrFail($id);
            $car->status = 'approved'; // Assuming 'status' is a column in the 'cars' table
            $car->save();

            return response()->json(['message' => 'Car post approved successfully!']);
        } catch (\Exception $e) {
            return response()->json(['error' => $e->getMessage()], 500);
        }
    }

    // Deactivate (delete) a car post
    public function deactivateCarPost($id)
    {
        try {
            $car = Car::findOrFail($id);
            $car->delete();

            return response()->json(['message' => 'Car post deactivated successfully!']);
        } catch (\Exception $e) {
            return response()->json(['error' => $e->getMessage()], 500);
        }
    }


    
}