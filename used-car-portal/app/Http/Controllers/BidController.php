<?php
namespace App\Http\Controllers;

use App\Models\Bid;
use Illuminate\Http\Request;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Support\Facades\Auth;

class BidController extends Controller
{
    public function store(Request $request)
    {
        $request->validate([
            'car_id' => 'required|exists:cars,id',
            'bid_amount' => 'required|numeric|min:1',
        ]);

        $bid = Bid::create([
            'car_id' => $request->car_id,
            'user_id' => Auth::id(),
            'bid_amount' => $request->bid_amount,
        ]);

        return response()->json([
            'message' => 'Bid submitted successfully!',
            'bid' => $bid,
        ], 201);
    }

    public function index($id)
{
    $bids = Bid::where('car_id', $id)->with('user')->get();

    return response()->json($bids);
}

}
