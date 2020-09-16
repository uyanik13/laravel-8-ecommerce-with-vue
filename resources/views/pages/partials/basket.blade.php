@php
    $cart = Helper::cart();
    $cartTotal = Helper::cartTotal();
@endphp
    <!-- end of search bar -->
    <!-- shopping cart -->
    @if(isset($user))
    <div class="shopping-cart" id="basket_parent">
     <a href="/cart">
         <div class="cart-icon d-inline-block">
             <span class="icon_bag_alt"></span>
         </div>
         <div class="cart-info d-inline-block">
             <p>Shopping Cart
                 <span>
                     @isset($products_in_basket){{count($products_in_basket)}}@endisset  item(s) - @isset($cartTotal)@isset($setting['currency']) {{  $setting['currency']->value }} @endisset {{$cartTotal}}@endisset
                                         </span>
             </p>
         </div>
     </a>
     <!-- end of shopping cart -->

     <!-- cart floating box -->
     <div class="cart-floating-box" id="cart-floating-box"  style="overflow: auto;max-height: 500px">
         <div class="cart-items">
             @isset($cart)
             @foreach($cart as $item)
                 <div class="cart-float-single-item d-flex">
                 <span class="remove-item"><a onclick="remove_from_basket({{$item->id}})"><i class="fa fa-times"></i></a></span>
                 <div class="cart-float-single-item-image">
                     <a href="{{route('product.find',$item->post->slug)}}"><img
                             src="{{$item->post->thumbnail}}" class="img-fluid"
                             alt=""></a>
                 </div>
                 <div class="cart-float-single-item-desc">
                     <p class="product-title"> <a href="{{route('product.find',$item->post->slug)}}">{{substr($item->post->title,0,28)}}
                         </a></p>
                         @isset($item->post)
                         @php
                          $data = json_decode($item->post)
                         @endphp
                     <p class="price"><span class="count">{{$item->quantity}}x - </span> @isset($setting['currency']) {{  $setting['currency']->value }} @endisset @if(isset($data->discounted_price)) <span style="text-decoration:line-through ">${{$data->price}}</span>
                         <span style="color: #5f9341">{{$data->discounted_price}}</span>@isset($setting['currency']) {{  $setting['currency']->value }} @endisset @else{{$data->price}}@endif</p>
                         @endisset
                 </div>
             </div>
             @endforeach
                 @endisset
         </div>
         <div class="cart-calculation">
             <div class="calculation-details">
                <p class="total">Subtotal <span>@isset($setting['currency']) {{  $setting['currency']->value }} @endisset {{$cartTotal}}</span></p>
             </div>
             <div class="floating-cart-btn text-center">
                 <a href="/checkout">Checkout</a>
                 <a href="/cart">View Cart</a>
             </div>
         </div>
     </div>
     <!-- end of cart floating box -->
 </div>
    @else

    <div class="shopping-cart" id="basket_parent">
        <a href="/cart">
            <div class="cart-icon d-inline-block">
                <span class="icon_bag_alt"></span>
            </div>
            <div class="cart-info d-inline-block">
                <p>Shopping Cart

                    @isset($cart)
                    <span>
                         {{count($cart)}} item(s) - @isset($setting['currency']) {{  $setting['currency']->value }} @endisset {{$cartTotal}}
                    </span>
                        @else
                        <span>
                           0 item(s) - @isset($setting['currency']) {{  $setting['currency']->value }} @endisset 0
                        </span>
                        @endisset
                </p>
            </div>
        </a>
        <!-- end of shopping cart -->
        <!-- cart floating box -->
        @isset($cart)

        <div class="cart-floating-box" id="cart-floating-box"  style="overflow: auto;max-height: 500px">
            <div class="cart-items">
                    @foreach($cart as $id => $cartProduct)
                        <div class="cart-float-single-item d-flex">
                            <span class="remove-item"><a onclick="remove_from_basket({{ $cartProduct['id']}},-1)"><i class="fa fa-times"></i></a></span>
                            <div class="cart-float-single-item-image">
                                <a href="{{route('product.find',$cartProduct['product']->slug)}}"><img
                                        src="{{$cartProduct['product']->thumbnail}}" class="img-fluid"
                                        alt=""></a>
                            </div>
                            <div class="cart-float-single-item-desc">
                                <p class="product-title"> <a href="{{route('product.find',$cartProduct['product']->slug)}}">{{substr($cartProduct['product']->title,0,28)}}
                                    </a></p>
                                    <p class="price"><span class="count">{{$cartProduct['quantity']}}x - </span>
                                        <span style="color: #5f9341">@isset($setting['currency']) {{  $setting['currency']->value }} @endisset {{$cartProduct['product']->price}}</span></p>

                            </div>
                        </div>
                        @endforeach
            </div>
            <div class="cart-calculation">
                <div class="calculation-details">
                    @isset($cart)
                        <p class="total">Subtotal <span>@isset($setting['currency']) {{  $setting['currency']->value }} @endisset {{$cartTotal}}</span></p>
                    @else
                        <p class="total">Subtotal <span>@isset($setting['currency']) {{  $setting['currency']->value }} @endisset 0</span></p>
                    @endisset
                </div>
                <div class="floating-cart-btn text-center">
                    <a href="/checkout">Checkout</a>
                    <a href="/cart">View Cart</a>
                </div>
            </div>
        </div>
         @endisset

        <!-- end of cart floating box -->
    </div>


    @endif



