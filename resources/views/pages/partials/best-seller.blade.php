<div class="col">
    <div class="single-best-seller-item">
        <div class="best-seller-sub-product">
            <div class="row">
                <div class="col-lg-4 pl-0 pr-0">
                    <div class="image">
                        <a href="{{route('product.find',$item->slug)}}">
                            <img src="{{$item->thumbnail}}" class="img-fluid"
                                 alt="">
                        </a>
                    </div>
                </div>
                @if ($item->options)
                    @php
                        $data =  json_decode($item->product_options, true);
                    @endphp
                @endif
                <div class="col-lg-8 pl-0 pr-0">
                    <div class="product-content">
                        <h3 class="product-title"><a
                                href="{{route('product.find',$item->slug)}}">{{$item->title}}</a></h3>
                        <div class="price-box">
                            @if(isset($item->discounted_price))
                                <span class="main-price">@isset($setting['currency']) {{  $setting['currency']->value }} @endisset{{$item->price}}</span>
                                <span class="discounted-price">@isset($setting['currency']) {{  $setting['currency']->value }} @endisset{{$item->discounted_price}}</span>
                            @else
                                <span class="discounted-price">@isset($setting['currency']) {{  $setting['currency']->value }} @endisset{{$item->price}}</span>
                            @endif
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>

</div>
