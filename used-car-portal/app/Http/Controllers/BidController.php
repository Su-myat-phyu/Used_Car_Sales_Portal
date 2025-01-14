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

public function getReceivedBids(Request $request)
{
    $userId = Auth::id();

    $bids = Bid::with(['car', 'user']) // Eager load car and user details
        ->whereHas('car', function ($query) use ($userId) {
            $query->where('user_id', $userId); // Only cars posted by the logged-in user
        })
        ->get();

    return response()->json($bids, 200);
}
public function acceptBid($bidId)
{
    $bid = Bid::with('car')->findOrFail($bidId);

    // Ensure the car belongs to the logged-in user
    if ($bid->car->user_id !== Auth::id()) {
        return response()->json(['error' => 'Unauthorized action.'], 403);
    }

    // Mark the bid as accepted
    $bid->update(['status' => 'accepted']);

    return response()->json(['message' => 'Bid accepted successfully.']);
}

public function declineBid($bidId)
{
    $bid = Bid::with('car')->findOrFail($bidId);

    // Ensure the car belongs to the logged-in user
    if ($bid->car->user_id !== Auth::id()) {
        return response()->json(['error' => 'Unauthorized action.'], 403);
    }

    // Mark the bid as declined
    $bid->update(['status' => 'declined']);

    return response()->json(['message' => 'Bid declined successfully.']);
}



}
