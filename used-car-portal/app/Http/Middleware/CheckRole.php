<?php
namespace App\Http\Middleware;

use Closure;
use Illuminate\Support\Facades\Auth;

class CheckRole
{
    public function handle($request, Closure $next, ...$role)
    {
        //if (Auth::check() && Auth::user()->role === $role) {
            //return $next($request);
        //}

        //return redirect('/'); // Redirect unauthorized users

        $user = Auth::user();

        // Ensure user is authenticated and has roles
        if ($user && $user->role->isNotEmpty()) {
            // Extract only the role names
            $roleNames = $user->role->pluck('name')->toArray();
            // Check if the user has any of the roles passed in the middleware
            if (!array_intersect($roleNames, $role)) {
                return redirect()->route('home');  // Redirect if no matching roles
            }
        }

        return $next($request);  // Proceed if roles match
    }
}
