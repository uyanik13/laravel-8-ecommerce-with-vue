<?php

namespace App\Http\Controllers\Auth;

use App\Models\User;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Foundation\Auth\RegistersUsers;

class RegisterController extends Controller
{
  use RegistersUsers;

  /**
   * Create a new controller instance.
   *
   * @return void
   */
  public function __construct()
  {
    $this->middleware('guest');
  }

  /**
   * The user has been registered.
   *
   * @param  \Illuminate\Http\Request  $request
   * @param  \App\Models\User  $user
   * @return \Illuminate\Http\JsonResponse
   */
  protected function registered(Request $request, User $user)
  {
    if ($user instanceof MustVerifyEmail) {
      $user->sendEmailVerificationNotification();

      return response()->json(['status' => trans('verification.sent')]);
    }

    return response()->json($user);
  }

  /**
   * Get a validator for an incoming registration request.
   *
   * @param  array  $data
   * @return \Illuminate\Contracts\Validation\Validator
   */
  protected function validator(array $data)
  {
    return Validator::make($data, [
      'name' => 'required|string|max:255',
      'email' => 'required|string|email|max:255|unique:users',
      //'phone' => 'required|unique:users| min:10',
      'password' => 'required|string|min:6|confirmed',
    ]);
  }


  protected function create(array $data)
  {
      if (isset($data['bill_address'])){

          return User::create([
              'name' => $data['name'],
              'email' => $data['email'],
              'password' => bcrypt($data['password']),
              'bill_address' => $data['bill_address'],
              'phone' => $data['phone']
          ]);
        }
      return User::create([
        'name' => $data['name'],
        'email' => $data['email'],
        //'phone' => $data['phone'],
        'password' => bcrypt($data['password']),

      ]);
  }

}
