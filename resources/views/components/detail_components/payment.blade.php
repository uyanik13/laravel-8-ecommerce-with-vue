@push('header')
<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.0.8/css/all.css">

@endpush
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
                        <li class="active">Payment</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</div>



<div class="page-section section mb-50 ml-10">
    @auth
    <div class="col-12">
    <div class="row">
        <aside class="col-sm-6">
        <article class="card">
            <div class="card-body p-5">
                @if(session()->has('message'))
                <p class="alert alert-success"> {{ session()->get('message') }}</p>
                         @endif

            <div class="form-group">
                Payment amounnt :@isset($setting['currency']) {{  $setting['currency']->value }} @endisset   {{$cartTotal}}
           <br> <label for="username">Full name (on the card)</label>
            <div class="input-group">
                <div class="input-group-prepend">
                    <span class="input-group-text"><i class="fa fa-user"></i></span>
                </div>
                <input type="text" class="form-control" name="name" placeholder="" required="">
            </div> <!-- input-group.// -->
            </div> <!-- form-group.// -->

            <div class="form-group">
            <label for="cardNumber">Card number</label>
            <div class="input-group">
                <div class="input-group-prepend">
                    <span class="input-group-text"><i class="fa fa-credit-card"></i></span>
                </div>
                <input type="text" class="form-control" id="card_number" value="" placeholder="">
            </div>
            </div>

            <div class="row">
                <div class="col-sm-4">
                    <div class="form-group">
                        <label data-toggle="tooltip" title="Month" >Month <i class="fa fa-question-circle"></i></label>
                        <input class="form-control"  id="exp_month" required="" value=""  placeholder="MM" type="text">
                    </div> <!-- form-group.// -->
                </div>
                <div class="col-sm-4">
                    <div class="form-group">
                        <label data-toggle="tooltip" title="Year">Year <i class="fa fa-question-circle"></i></label>
                        <input class="form-control"  id="exp_year" required="" value=""  placeholder="YYYY" type="text">
                    </div> <!-- form-group.// -->
                </div>
                <div class="col-sm-4">
                    <div class="form-group">
                        <label data-toggle="tooltip" title="CVV"  >CVV <i class="fa fa-question-circle"></i></label>
                        <input class="form-control" id="cvc" required="" value="" type="text">
                    </div> <!-- form-group.// -->
                </div>
            </div> <!-- row.// -->
            <input type="hidden" class="form-control" id="order_id" value="{{$itemId}}">

            <button onclick="ajax_payment();" class="subscribe btn btn-primary btn-block"> Confirm  </button>
            <button onclick="test();" class="subscribe btn btn-primary btn-block"> test  </button>

            </div> <!-- card-body.// -->


        </article>
        </aside>

        <aside class="col-sm-6">
            <article class="card">
                <div class="card-body p-5">
                    @if(session()->has('message'))
                    <p class="alert alert-success"> {{ session()->get('message') }}</p>
                             @endif


                <div class="cart-table table-responsive mb-40">
                    <table class="table">
                        <thead>
                            <tr>
                                <th class="pro-title">Product</th>
                                <th class="pro-price">Price</th>
                                <th class="pro-quantity">Quantity</th>
                                <th class="pro-subtotal">Total</th>
                                <th class="pro-remove">Remove</th>
                            </tr>
                        </thead>
                        <tbody>


                     @if ($cart)
                     @isset($cart)
                     @forelse($cart as $product)
                     @php
                     $lastPrice = $product->post->discounted_price ? $product->post->discounted_price : $product->post->price;
                    @endphp
                     <tr id="card_page_products{{$product->id}}">
                         <td class="pro-title"><a href="/product/{{$product->post->slug}}">{{substr($product->post->title,0,10)}}</a></td>
                         <td class="pro-price" id="proPrice" value="{{$cartTotal}}">
                            {{$currency}} {{$lastPrice}}
                         </td>
                         <td class="pro-quantity">
                             <div class="pro-qty2"><input  type="text" id="input_id{{$product->id}}" onchange="checkout_quantity_update(`{{$product->id}}`,this.value)" value="{{$product->quantity}}"></div>
                         </td>
                         <td class="pro-subtotal"><span id="checkout_subtotal{{$product->id}}" > {{$currency}} {{$lastPrice*$product->quantity}}</span></td>
                         <td class="pro-remove"><a onclick="remove_from_basket({{$product->id}},1,`{{$currency}}`)"><i class="fa fa-trash-o"></i></a></td>
                     </tr>
                     @empty
                     @endforelse
                     @endisset
                     @endif



                    </tbody>
                </table>
                    </div>
                </div> <!-- card-body.// -->


            </article>
            </aside>

    </div> <!-- row.// -->
    </div> <!-- row.// -->


   @endauth
</div>



<!--=====  End of Footer  ======-->


<!-- scroll to top  -->
<a href="#" class="scroll-top"></a>




@push('scripts')

@endpush
