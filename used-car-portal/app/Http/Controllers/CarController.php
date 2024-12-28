<?php
namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class CarController extends Controller
{
    public function show($id)
    {
        $cars = [
            [
                'id' => 1,
                'title' => 'Toyota Camry 2021',
                'price' => '$20,000',
                'tagline' => 'Reliable. Affordable. Ready for You.',
                'image' => asset('storage/images/toyotaCamry.webp'),
                'make' => 'Toyota',
                'model' => 'Camry',
                'year' => 2021,
                'mileage' => '20,000 miles',
                'condition' => 'Excellent',
                'fuelType' => 'Gasoline',
                'transmission' => 'Automatic',
                'exteriorColor' => 'White',
                'interiorColor' => 'Black',
            ],
            // Add more cars...
        ];

        $car = collect($cars)->firstWhere('id', $id);

        if (!$car) {
            abort(404, 'Car not found');
        }

        return Inertia::render('features/CarDetail/Pages/CarDetailPage', [
            'car' => $car,
        ]);
    }
}
