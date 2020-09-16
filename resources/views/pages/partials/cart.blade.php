@php
            //$cart = session()->forget('cart');
            //$cart = session()->remove('cart');
    $cart = Helper::cart();
    $cartTotal = Helper::cartTotal();
    $currency = $setting['currency']->value;
    //$cart = session()->forget('cart');

@endphp



    <!-- end of search bar -->
    <!-- shopping cart -->

    <div class="shopping-cart" id="cart_parent">
     <a href="/cart">
         <div class="cart-icon d-inline-block">
             <span class="icon_bag_alt"></span>
         </div>
         <div class="cart-info d-inline-block">
             <p>Shopping Cart
                 <span>
                     @isset($cart){{count($cart)}}@endisset  item(s) -  {{ $currency .' '. $cartTotal }}
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

             @php
                 $firstData = $item->toArray();
                 $secondData = (object)$firstData;
                 $item = $user ?  $item : $secondData;
                 $post = $user ?  $item->post : (object)$secondData->post;
             @endphp

                 <div class="cart-float-single-item d-flex">
                 <span class="remove-item"><a onclick="remove_from_basket({{$item->id}})"><i class="fa fa-times"></i></a></span>
                 <div class="cart-float-single-item-image">
                     <a href="{{route('product.find',$post->slug)}}"><img
                             src="{{$post->thumbnail}}" class="img-fluid"
                             alt=""></a>
                 </div>
                 <div class="cart-float-single-item-desc">
                     <p class="product-title"> <a href="{{route('product.find',$post->slug)}}">{{substr($post->title,0,28)}}
                         </a></p>
                         @isset($post)
                         @php
                          $data = $user ? json_decode($post) : $post;
                          $lastPrice = $data->discounted_price ? $data->discounted_price : $data->price ;
                         @endphp
                     <p class="price">
                         <span class="count">{{$item->quantity}}x - </span>

                         <span style="text-decoration:line-through ">{{$currency . $data->price}}</span>
                         <span style="color: #5f9341">{{$currency .$data->discounted_price}}</span>
                        </p>
                         @endisset
                 </div>
             </div>
             @endforeach
                 @endisset
         </div>
         <div class="cart-calculation">
             <div class="calculation-details">
                <p class="total">Subtotal <span>{{ $currency }} {{$cartTotal}}</span></p>
             </div>
             <div class="floating-cart-btn text-center">
                 <a href="/checkout">Checkout</a>
                 <a href="/cart">View Cart</a>
             </div>
         </div>
     </div>
     <!-- end of cart floating box -->
 </div>


