<?php

namespace App\Http\Requests;

use App\Models\User;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class ProfileUpdateRequest extends FormRequest
{
    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function authorize(): bool
    {
        return true; // Ensure the user is authorized to make this request
    }

    public function rules(): array
    {
        return [
            'full_name' => 'nullable|string|max:255',
            'email' => 'nullable|email',
            'phone_number' => 'nullable|string|max:15',
            'address' => 'nullable|string|max:500',
            'profile_picture' => 'nullable|file|image|max:2048',
        ];
    }
}
