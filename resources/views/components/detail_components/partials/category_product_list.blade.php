<div class="shop-product-wrap grid row no-gutters mb-35">
    @foreach($catProducts as $catProduct)

        <div class="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-12">
        <!--=======  Grid view product  =======-->
            <div class="bg-white text-center p-1" id="success_wishlist" style="position: fixed;bottom:10px;left: 25px;height: 60px;width: 200px;z-index: 1;border-radius: 50px;display: none">
                <img style="height: 30px;width: 30px;align-self: center" src="https://www.melissacuturich.com.au/wp-content/uploads/2017/11/success-png-success-icon-image-23194-400.png" alt="">
                <div class="text-success">
                    Added wishlist successfuly
                </div>
            </div>
        <div class="gf-product shop-grid-view-product">
            <div class="image">
                <a href="{{route('product.find',$catProduct->slug)}}">
                    @if(isset($catProduct->discounted_price))<span class="onsale">Sale!</span>@endif
                    <img src="{{$catProduct->thumbnail}}"  style="height: 250px;width: 350px"  class="img-fluid" alt="">
                </a>
                <div class="product-hover-icons">
                    <a onclick="add_to_basket({{$catProduct->id}},`{{csrf_token()}}`)"  data-tooltip="Add to cart" style="color: white"> <span
                            class="icon_cart_alt"></span></a>
                    <a onclick="add_to_wishlist({{$catProduct->id}},`{{csrf_token()}}`)" data-tooltip="Add to wishlist" style="color: white"> <span
                            class="icon_heart_alt"></span>
                    </a>

                </div>
            </div>
            <div class="product-content">
                <div class="product-categories">

                </div>
                <h3 class="product-title"><a href="{{route('product.find',$catProduct->slug)}}">{{substr($catProduct->title,0,22)}}</a></h3>
                <div class="price-box">
                    @if(isset($catProduct->discounted_price))
                        <span class="main-price">@isset($setting['currency']) {{  $setting['currency']->value }} @endisset {{$catProduct->price}}</span>
                        <span class="discounted-price">@isset($setting['currency']) {{  $setting['currency']->value }} @endisset{{$catProduct->discounted_price}}</span>
                    @else
                        <span class="discounted-price">@isset($setting['currency']) {{  $setting['currency']->value }} @endisset{{$catProduct->price}}</span>
                    @endif
                </div>
            </div>
        </div>

        <!--=======  End of Grid view product  =======-->
        <!--=======  Shop list view product  =======-->
            <div class="gf-product shop-list-view-product">
                <div class="image">
                    <a href="{{route('product.find',$catProduct->slug)}}">
                        @if(isset($catProduct->discounted_price))<span class="onsale">Sale!</span>@endif
                        <img src="{{$catProduct->thumbnail}}" class="img-fluid" alt="">
                    </a>
                    <div class="product-hover-icons">
                    </div>
                </div>
                <div class="product-content">
                    <div class="product-categories">
                        <a href="{{route('category.find',$catProduct->category->slug)}}">Fast Foods</a>,
                    </div>
                    <h3 class="product-title"><a href="{{route('product.find',$catProduct->slug)}}">{{$catProduct->title}}</a></h3>
                    <div class="price-box mb-20">
                        @if(isset($catProduct->discounted_price))
                            <span class="main-price">@isset($setting['currency']) {{  $setting['currency']->value }} @endisset{{$catProduct->price}}</span>
                            <span class="discounted-price">@isset($setting['currency']) {{  $setting['currency']->value }} @endisset{{$catProduct->discounted_price}}</span>
                        @else
                            <span class="discounted-price">@isset($setting['currency']) {{  $setting['currency']->value }} @endisset{{$catProduct->price}}</span>
                        @endif
                    </div>
                    <p class="product-description">{{$catProduct->content}}</p>
                    <div class="list-product-icons">
                        <a onclick="add_to_basket({{$catProduct->id}},`{{csrf_token()}}`)" data-tooltip="Add to cart" style="color: white"> <span
                                class="icon_cart_alt"></span></a>
                        <a onclick="add_to_wishlist({{$catProduct->id}},`{{csrf_token()}}`)" data-tooltip="Add to wishlist" style="color: white"> <span
                                class="icon_heart_alt"></span>
                        </a>

                    </div>
                </div>

            </div>


        <!--=======  End of Shop list view product  =======-->
    </div>
    @endforeach

    <div class="pagination-content text-center" style="width: 100%">
        <br>
        <div class="col-12 d-flex justify-content-center bg-white pt-3" style="height: 100%">
            {{$catProducts->links()}}
        </div>
    </div>

</div>
