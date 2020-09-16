@php
    $cart = Helper::cart();
    $cartTotal = Helper::cartTotal();
    $currency = $setting['currency']->value;
@endphp

<div class="breadcrumb-area mb-50">
    <div class="container">
        <div class="row">
            <div class="col">
                <div class="breadcrumb-container">
                    <ul>
                        <li><a href="/"><i class="fa fa-home"></i> Home</a></li>
                        <li class="active">Checkout</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</div>



<div class="page-section section mb-50">
    <div class="container">
        <div class="row">
            <div class="col-12">


                 <form action="{{route('checkout.guest_or_missing_data')}}" method="post" class="checkout-form">

                    @csrf
                    <div class="row row-40">

                        <div class="col-lg-7 mb-20">

                            <!-- Billing Address -->
                            <div id="billing-form" class="mb-40">
                                <h4 class="checkout-title">Billing Address</h4>
                                <div class="row">

                                    @isset($user->address)
                                        @php
                                            $bill = json_decode($user->bill_address);
                                        @endphp
                                    @endisset
                                    <div class="col-md-6 col-12 mb-20">
                                        <label>Full Name*</label>
                                        <input type="text" name="name" value="@isset($user){{$user->name}}@endisset" placeholder="First Name" required>
                                    </div>

                                    <div class="col-md-6 col-12 mb-20">
                                        <label>Email Address*</label>
                                        <input type="email" @isset($user->email) value="{{$user->email}}" @endisset placeholder="Email Address" name="email" required>
                                    </div>

                                    <div class="col-md-6 col-12 mb-20">
                                        <label>Phone no*</label>
                                        <input type="tel" @isset($user->phone) value="{{$user->phone}}" @endisset placeholder="Phone number" name="phone" required>
                                    </div>

                                    <div class="col-12 mb-20">
                                        <label>Address*</label>
                                        <input type="text" @isset($bill->address_line1) value="{{$bill->address_line1}}" @endisset name="address_line1" placeholder="Address line 1" required>
                                        <input type="text" @isset($bill->address_line2) value="{{$bill->address_line2}}" @endisset name="address_line2" placeholder="Address line 2">
                                    </div>

                                    <div class="col-md-6 col-12 mb-20">
                                        <label>Country*</label>
                                        <input type="text" @isset($bill->country) value="{{$bill->country}}" @endisset placeholder="Country"  name="country" required>
                                    </div>

                                    <div class="col-md-6 col-12 mb-20">
                                        <label>Town/City*</label>
                                        <input type="text" @isset($bill->town) value="{{$bill->town}}" @endisset placeholder="Town/City" name="town" required>
                                    </div>

                                    <div class="col-md-6 col-12 mb-20">
                                        <label>State*</label>
                                        <input type="text" @isset($bill->state) value="{{$bill->state}}" @endisset placeholder="State" name="state" required>
                                    </div>

                                    <div class="col-md-6 col-12 mb-20">
                                        <label>Post Code*</label>
                                        <input type="text" @isset($bill->post_code) value="{{$bill->post_code}}" @endisset name="post_code" placeholder="Post Code" >
                                    </div>

                                    @if (!$user)
                                    <div class="col-md-6 col-12 mb-20 optional_password" >
                                        <label>Password*</label>
                                        <input type="password" id="password" name="password" placeholder="Password" >
                                    </div>
                                    <div class="col-md-6 col-12 mb-20 optional_password">
                                        <label>Password Confirm*</label>
                                        <input type="password" name="password_confirmation" id="guest_password_confirm" placeholder="Password Confirm" >
                                    </div>

                                   @endif

                                </div>

                            </div>


                        </div>
                        <div class="col-lg-5">
                            <div class="row">
                            @isset($cart)
                                    <div class="col-12 mb-60">

                                        <h4 class="checkout-title">Cart Total</h4>

                                        <div class="checkout-cart-total">

                                            <h4>Product <span>Total</span></h4>
                                            <ul>
                                                @foreach($cart as $product)

                                                @php
                                                $firstData = $product->toArray();
                                                $secondData = (object)$firstData;
                                                $item = $user ?  $product : $secondData;
                                                $post = $user ?  $product->post : (object)$secondData->post;
                                                $lastPrice = $post->discounted_price ? $post->discounted_price : $post->price;
                                               @endphp

                                                    <li>{{substr($post->title,0,30)}} X {{$item->quantity}} <span>{{ $currency }} {{$lastPrice}} </span></li>
                                                @endforeach
                                            </ul>



                                            <p>Sub Total <span>{{ $currency }} {{$cartTotal}}</span></p>
                                            <p>Shipping Fee <span> {{ $currency }} @isset($setting['shipping_cost']) {{  $setting['shipping_cost']->value }} @endisset</span></p>

                                            <h4>Grand Total <span>{{ $currency }} {{$cartTotal}} </span></h4>

                                            @endisset
                                        </div>

                                    </div>

                                    <!-- Payment Method -->
                                    <div class="col-12">



                                        <div class="checkout-payment-method">

                                            <div class="single-method">
                                                <input type="checkbox" id="accept_terms" name="accept_terms">
                                                <label for="accept_terms"><a href="/terms-conditions" target="_blank">I’ve read and accept the terms &
                                                    conditions</a></label>
                                            </div>

                                        </div>


                                        <button type="submit" class="place-order">Save And Pay</button>





                                    </div>

                            </div>
                        </div>

                    </div>
                </form>

            </div>
        </div>
    </div>
</div>



<!--=====  End of Footer  ======-->


<!-- scroll to top  -->
<a href="#" class="scroll-top"></a>





