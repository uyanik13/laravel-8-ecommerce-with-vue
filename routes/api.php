<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Auth\AuthController;
use App\Http\Controllers\Auth\LoginController;
use App\Http\Controllers\Api\ApiBlogController;
use App\Http\Controllers\Api\ApiPostController;
use App\Http\Controllers\Api\ApiUserController;
use App\Http\Controllers\Api\ApiAdminController;
use App\Http\Controllers\Api\ApiOrderController;
use App\Http\Controllers\Api\ApiCustomController;
use App\Http\Controllers\Auth\RegisterController;
use App\Http\Controllers\Api\ApiGalleryController;
use App\Http\Controllers\Api\ApiPackageController;
use App\Http\Controllers\Api\ApiSettingController;
use App\Http\Controllers\Auth\VerificationController;
use App\Http\Controllers\Api\ApiAppointmentController;
use App\Http\Controllers\Auth\ForgotPasswordController;





Route::group(['middleware' => 'auth:api'], function () {



 //API RESOURCES
 Route::apiResource('admin',ApiAdminController::class); //ADMIN
  Route::apiResource('blog', ApiBlogController::class);
  Route::apiResource('post', ApiPostController::class );
  Route::apiResource('setting', ApiSettingController::class);
  Route::apiResource('appointment', ApiAppointmentController::class );
  Route::apiResource('users', ApiUserController::class);
  Route::apiResource('custom', ApiCustomController::class);
  Route::apiResource('gallery', ApiGalleryController::class);
  Route::apiResource('order',ApiOrderController::class);




  //POST METHODS
  Route::post('logout', [LoginController::class, 'logout']);
  Route::post('addCategory', [ApiPostController::class, 'addCategory']);
  Route::post('updateCategory', [ApiPostController::class, 'updateCategory']);
  Route::post('removeCategory',[ApiPostController::class, 'removeCategory'] );
  Route::post('uploadCv',[ApiUserController::class, 'uploadCv']);
  Route::post('uploadAdditionalFiles', [ApiPostController::class, 'uploadAdditionalFiles'] );



  //FOLLOW & UNFOLLOW
  Route::post('user/follow', [ApiUserController::class, 'follow']);
  Route::post('user/un-follow',[ApiUserController::class, 'unFollow']);
  Route::get('user/my-follow-data', [ApiUserController::class, 'myFollowData']);
  Route::get('user/contacts', [ApiUserController::class, 'contacts']);




  //GET METHODS


  Route::get('user', [ApiUserController::class, 'CurrentUser']);
  Route::get('cases/my-cases',[ApiPostController::class, 'MyCases']);



});


Route::group(['middleware' => 'guest:api'], function () {
  //POST METHODS

  Route::post('login', [LoginController::class, 'login'] );
  Route::post('logout', [AuthController::class, 'logout'])->name('logout');
  Route::post('ajax-logout', [LoginController::class, 'logout'])->name('ajax.logout');
  Route::get('refresh', [AuthController::class, 'checkToken']);
  Route::post('register', [RegisterController::class, 'register']);
  Route::post('password/email', [ForgotPasswordController::class, 'sendResetLinkEmail']);
  Route::post('email/verify/{user}',[VerificationController::class, 'verify'] )->name('verification.verify');
  Route::post('email/resend', [VerificationController::class, 'resend']);
  Route::post('create_session', [ApiCustomController::class, 'create_session']);



  //Route::get('cities', [SettingController::class, 'getCities']);



});



