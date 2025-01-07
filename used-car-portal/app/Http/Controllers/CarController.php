<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class CarController extends Controller
{
    // Mock database for cars (you should replace this with an actual database)
    private static $cars = [];

    /**
     * Add a new car with images.
     */
    public function store(Request $request)
    {
        // Validate input data
        $validatedData = $request->validate([
            'make' => 'required|string',
            'model' => 'required|string',
            'year' => 'required|integer',
            'price' => 'required|numeric',
            'images.*' => 'file|image|max:2048', // Validate uploaded images
        ]);

        // Handle uploaded images
        $images = [];
        if ($request->hasFile('images')) {
            foreach ($request->file('images') as $image) {
                $path = $image->store('uploads', 'public');
                $images[] = Storage::url($path);
            }
        }

        // Create a new car (mock database implementation)
        $newCar = array_merge($validatedData, [
            'id' => count(self::$cars) + 1,
            'images' => $images,
        ]);

        self::$cars[] = $newCar;

        // Return the newly created car
        return response()->json(['car' => $newCar], 201);
    }

    /**
     * Get all cars with filtering options.
     */
    public function index(Request $request)
    {
        // Get filtering parameters from query
        $make = $request->query('make');
        $model = $request->query('model');
        $year = $request->query('year');
        $minPrice = $request->query('minPrice');
        $maxPrice = $request->query('maxPrice');

        // Filter cars (mock database implementation)
        $filteredCars = collect(self::$cars);

        if ($make) $filteredCars = $filteredCars->where('make', $make);
        if ($model) $filteredCars = $filteredCars->where('model', $model);
        if ($year) $filteredCars = $filteredCars->where('year', (int)$year);
        if ($minPrice) $filteredCars = $filteredCars->where('price', '>=', (float)$minPrice);
        if ($maxPrice) $filteredCars = $filteredCars->where('price', '<=', (float)$maxPrice);

        // Return filtered cars
        return response()->json(['cars' => $filteredCars->values()]);
    }
}
