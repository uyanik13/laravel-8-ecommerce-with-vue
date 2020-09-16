<?php

namespace App\Http\Controllers\Api;

use App\Models\Order;
use App\Models\Payment;
use App\Models\Setting;
use App\Mail\ShortEmail;
use App\Models\Appointment;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use App\Http\Controllers\ApiController;
use Illuminate\Support\Facades\Validator;


class ApiAdminController extends ApiController
{


  public function __construct(Request $request)
  {
    $this->user = auth()->setRequest($request)->user();
  }


    /**
     * Display a listing of the resource.
     *
     * @return string
     */
      public function index(Request $request)
    {

      if ($this->user->role !== 'admin') {
        return $this->responseUnauthorized();
      }

      $orders = Order::orderBy('created_at','desc')->get();
      $payments = Payment::orderBy('created_at','desc')->get();

      $data = [
          'orders' => $orders,
          'payments' => $payments,
      ];

      return $data;
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {

    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\RedirectResponse
     */
    public function store(Request $request)
    {

      }



    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Appointment  $appointment
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request)
    {
        //
    }

  /**
   * Remove the specified resource from storage.
   *
   * @param Request $request
   * @param $id
   * @return \Illuminate\Http\JsonResponse
   */
    public function destroy(Request $request, $id)
    {

    }
}
