<div class="gf-product tab-slider-sub-product">
    <div class="image">
        <a href="{{route('product.find',$item->slug)}}">
            @isset($item->discounted_price)<span
                class="onsale">Sale!</span>@endisset
            <img src="{{$item->thumbnail}}"
                 style="height: 250px;width: 350px" class="img-fluid"
                 alt="">
        </a>
        <div class="product-hover-icons">
            <a onclick="add_to_basket({{$item->id}})" data-tooltip="Add to cart"> <span
                    class="icon_cart_alt"></span></a>
            @isset($user) <a onclick="add_to_wishlist({{$item->id}})" data-tooltip="Add to wishlist"> <span
                    class="icon_heart_alt"></span> </a>@endisset
        </div>
    </div>
    <div class="product-content">

        <div class="product-categories">
            @isset($item->category)
            <a href="{{route('category.find',$item->category->slug)}}">{{$item->category->title}}</a>
            @endisset

        </div>
        <h3 class="product-title"><a href="{{route('product.find',$item->slug)}}">
            {{substr($item->title,0,22)}}</a>
        </h3>
        <div class="price-box">
            @if(isset($item->discounted_price))
                <span class="main-price">@isset($setting['currency']) {{  $setting['currency']->value }} @endisset {{$item->price}}</span>
                <span
                    class="discounted-price">@isset($setting['currency']) {{  $setting['currency']->value }} @endisset {{$item->discounted_price}}</span>
            @else
                <span class="discounted-price">@isset($setting['currency']) {{  $setting['currency']->value }} @endisset {{$item->discounted_price}}</span>
            @endif
        </div>
    </div>
</div>
