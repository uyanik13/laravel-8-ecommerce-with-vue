<?php

namespace App\Http\Controllers\Api;

use App\Models\User;
use App\Models\Order;
use App\Models\Payment;
use App\Models\Setting;
use App\Mail\OrderCreated;
use Cartalyst\Stripe\Stripe;
use Illuminate\Http\Request;
use App\utils\Helpers\Helper;
use Illuminate\Routing\Route;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Mail;

class ApiPaymentController extends Controller
{
    public function __construct()
    {
        $this->setting = Helper::namedSettings(Setting::all());
        $this->stripe = new Stripe(env('STRIPE_API_KEY'));
        $this->user = Auth::user();
        $this->admin = User::where('role','admin')->first();


    }

    public function create_payment(Request $request){



        $cartTotal = Helper::cartTotal();
        $cart = Helper::cart();



        $order = Order::create([
            'user_id' => $this->user->id,
            'order_details' => $cart,
            'order_id' => $request->order_id,
            'price' => $cartTotal,
            'status' => 'pending',
        ]);

        $payment = Payment::create([
            'user_id' => $this->user->id,
            'payment_id' => $request->order_id,
            'payment_method' => 'stripe', //DO AOUTO
            'amount' => $cartTotal,
            'status' => 'pending',
        ]);

        $customer = $this->stripe->customers()->create([
            'email' => $this->user->email,
            'name' => $this->user->name,
        ]);

        $token = $this->stripe->tokens()->create([
            'card' => [
                'number' => $request->card_number,
                'exp_month' => $request->exp_month,
                'exp_year' => $request->exp_year,
                'cvc' => $request->cvc
            ],
        ]);

        $card = $this->stripe->cards()->create( $customer['id'], $token['id']);

        $charge = $this->stripe->charges()->create([
            'customer' => $customer['id'],
            'currency' => $this->setting['currency']->value,
            'amount'   => $cartTotal,
        ]);


        if($charge['status'] === 'succeeded'){
            $order->status = 'completed';
            $order->save();

            $payment->status = 'completed';
            $payment->save();

            Mail::to($this->user)
            ->cc($this->admin)
            ->send(new OrderCreated($order));

            $toEmptyCart = Helper::toEmptyCart();
        }

        return response()->json($charge['status']);
    }



}
