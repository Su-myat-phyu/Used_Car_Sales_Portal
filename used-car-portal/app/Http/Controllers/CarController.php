<?php
namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use App\Models\Car;

class CarController extends Controller
{
    public function store(Request $request)
    {
        $validated = $request->validate([
            'make' => 'required|string|max:255',
            'model' => 'required|string|max:255',
            'year' => 'required|integer|min:1900|max:' . date('Y'),
            'price' => 'required|numeric|min:0',
            'images' => 'nullable|array',
            'images.*' => 'image|mimes:jpeg,png,jpg|max:2048',
        ]);

        $imagePaths = [];
        if ($request->hasFile('images')) {
            foreach ($request->file('images') as $image) {
                $imagePaths[] = $image->store('cars', 'public');
            }
        }

        $car = Car::create([
            'make' => $validated['make'],
            'model' => $validated['model'],
            'year' => $validated['year'],
            'price' => $validated['price'],
            'images' => json_encode($imagePaths),
        ]);

        return response()->json(['car' => $car], 201);
    }

    public function index()
    {
        $cars = Car::all();
        return response()->json(['cars' => $cars]);
    }
}
