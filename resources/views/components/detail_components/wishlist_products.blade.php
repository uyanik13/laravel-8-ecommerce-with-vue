@php
    $wishes = Helper::wishlist(auth()->user()->id);
@endphp
<form action="#">
    <!--=======  cart table  =======-->

    <div class="cart-table table-responsive">
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
            @if(isset($wishes))
                @foreach($wishes as $wish)
                    <tr id="column_wish{{$wish->id}}" >
                        <td class="pro-thumbnail"><a href="{{route('product.find',$wish->post->slug)}}"><img
                                    src="{{$wish->post->thumbnail}}" class="img-fluid"
                                    alt="Product"></a></td>
                        <td class="pro-title"><a href="/product/{{$wish->post->slug}}">{{$wish->post->title}}</a></td>
                        @php($data = json_decode($wish->post->product_options))
                        <td class="pro-price"><span>
                                                @if(isset($data->discounted_price))
                                    @php($last_price = $data->discounted_price)
                                    <span style="text-decoration:line-through ">${{$data->price}}</span>
                                    <span style="color: #5f9341">${{$data->discounted_price}}</span>
                                @else
                                    @php($last_price = $data->price)
                                    @isset($setting['currency']) {{  $setting['currency']->value }} @endisset {{$data->price}}
                                @endif</span></td>
                        <td class="pro-quantity">
                            <div class="pro-qty"><input id="input_id{{$wish->id}}" readonly onchange="quantity_change(`{{$wish->id}}`,`{{csrf_token()}}`,this)" type="text" value="{{$wish->quantity}}"></div>
                        </td>
                        <input type="hidden" id="hidden_post" value="{{$wish->id}}">
                        <td class="pro-subtotal">
                            <span>
                                <span id="subtotal_span{{$wish->id}}" style="color: #5f9341">$<?php echo $last_price*$wish->quantity; ?></span>
                            </span>
                        </td>
                        <td class="pro-remove"><a onclick="remove_wish(this,{{$wish->id}})"><i class="fa fa-trash-o"></i></a></td>
                    </tr>
                @endforeach
            @endif

            </tbody>
        </table>
    </div>

    <!--=======  End of cart table  =======-->

</form>
