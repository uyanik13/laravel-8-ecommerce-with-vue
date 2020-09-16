@php
    $cart = Helper::cart();
    $cartTotal = Helper::cartTotal();
    $currency = $setting['currency']->value;
@endphp
	<!--=============================================
	=            Header         =
	=============================================-->



	<!--=====  End of Header  ======-->

	<!--=============================================
    =            breadcrumb area         =
    =============================================-->

	<div class="breadcrumb-area mb-50">
		<div class="container">
			<div class="row">
				<div class="col">
					<div class="breadcrumb-container">
						<ul>
							<li><a href="index.html"><i class="fa fa-home"></i> Home</a></li>
							<li class="active">Cart</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	</div>

	<!--=====  End of breadcrumb area  ======-->


	<!--=============================================
    =            Cart page content         =
    =============================================-->


	<div class="page-section section mb-50">
		<div class="container">
			<div class="row">
				<div class="col-9">
					<form action="#">
						<div class="cart-table table-responsive mb-40">
							<table class="table">
								<thead>
									<tr>
										<th class="pro-thumbnail">Image</th>
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
                             $firstData = $product->toArray();
                             $secondData = (object)$firstData;
                             $item = $user ?  $product : $secondData;
                             $post = $user ?  $product->post : (object)$secondData->post;
                             $lastPrice = $post->discounted_price ? $post->discounted_price : $post->price;
                            @endphp
                             <tr id="card_page_products{{$item->id}}">
                                 <td class="pro-thumbnail"><a href="#"><img
                                     src="{{$post->thumbnail}}" class="img-fluid"
                                     alt="Product"></a></td>
                                 <td class="pro-title"><a href="/product/{{$post->slug}}">{{$post->title}}</a></td>
                                 <td class="pro-price" id="proPrice" value="{{$cartTotal}}">
                                    {{$currency}} {{$lastPrice}}
                                 </td>
                                 <td class="pro-quantity">
                                     <div class="pro-qty2"><input  type="text" id="input_id{{$item->id}}" onchange="checkout_quantity_update(`{{$item->id}}`,this.value)" value="{{$item->quantity}}"></div>
                                 </td>
                                 <td class="pro-subtotal"><span id="checkout_subtotal{{$item->id}}" > {{$currency}} {{$lastPrice*$item->quantity}}</span></td>
                                 <td class="pro-remove"><a onclick="remove_from_basket({{$item->id}},1,`{{$currency}}`)"><i class="fa fa-trash-o"></i></a></td>
                             </tr>
                             @empty
                             @endforelse
                             @endisset
                             @endif



                            </tbody>
                        </table>
                    </div>




					</form>

                </div>
                <div class="col-3">

                    <div class="cart-summary">
                        <div class="cart-summary-wrap">
                            <h4>Cart Summary</h4>
                            <p >Sub Total <span id="checkout_sub_total">{{$currency}}  {{$cartTotal}}</span></p>
                            <p>Shipping Fee <span>{{ $currency }} @isset($setting['shipping_cost']) {{  $setting['shipping_cost']->value }} @endisset</span></p>
                            <h2>Grand Total <span id="checkout_last_total">{{$currency}} {{$cartTotal}}</span></h2>
                        </div>
                        <div class="cart-summary-button">
                            <a href="/checkout" class="place-order">Pay It</a>
                        </div>
                    </div>

                </div>
			</div>
		</div>
	</div>

