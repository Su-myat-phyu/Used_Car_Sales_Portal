<?php 
namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Car;
use App\Models\Bid;
use Illuminate\Support\Facades\Auth;

class UserActivityController extends Controller
{
    public function getCarsForSale()
    {
        $userId = Auth::id();
        $cars = Car::where('user_id', $userId)->get();

        foreach ($cars as $car) {
            if (!empty($car->images)) {
                $car->images = collect(json_decode($car->images))->map(fn($path) => asset('storage/' . $path))->toArray();
            }
        }

        return response()->json($cars);
    }

    public function getActiveBids()
    {
        $userId = Auth::id();
        $bids = Bid::with('car')->where('user_id', $userId)->where('is_active', true)->get();

        return response()->json($bids);
    }

    public function deleteCar($id)
    {
        $userId = Auth::id();
        $car = Car::where('id', $id)->where('user_id', $userId)->first();

        if ($car) {
            $car->delete();
            return response()->json(['message' => 'Car deleted successfully']);
        }

        return response()->json(['error' => 'Car not found or unauthorized'], 404);
    }

    public function updateStatus(Request $request, $id)
{
    $request->validate([
        'is_active' => 'required|boolean',
    ]);

    $bid = Bid::find($id);

    if (!$bid) {
        return response()->json(['error' => 'Bid not found'], 404);
    }

    $bid->is_active = $request->input('is_active');
    $bid->save();

    return response()->json(['message' => 'Bid status updated successfully'], 200);
}

}

