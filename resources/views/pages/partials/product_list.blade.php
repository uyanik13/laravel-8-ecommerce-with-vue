<div class="shop-product-wrap grid row no-gutters mb-35">
    @foreach($products as $item)

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
                <a href="{{route('product.find',$item->slug)}}">
                    @if(isset($item->discounted_price))<span class="onsale">Sale!</span>@endif
                    <img src="{{$item->thumbnail}}"  style="height: 250px;width: 350px"  class="img-fluid" alt="">
                </a>
                <div class="product-hover-icons">
                    <a onclick="add_to_basket({{$item->id}})"  data-tooltip="Add to cart" style="color: white"> <span
                            class="icon_cart_alt"></span></a>
                  @auth
                  <a onclick="add_to_wishlist({{$item->id}})" data-tooltip="Add to wishlist" style="color: white"> <span
                    class="icon_heart_alt"></span>
                   @endauth
                 </a>
                </div>
            </div>
            <div class="product-content">
                <div class="product-categories">

                </div>
                <h3 class="product-title"><a href="product/{{$item->slug}}">{{substr($item->title,0,22)}}</a></h3>
                <div class="price-box">
                    @if(isset($item->discounted_price))
                        <span class="main-price">@isset($setting['currency']) {{  $setting['currency']->value }} @endisset {{$item->price}}</span>
                        <span class="discounted-price">@isset($setting['currency']) {{  $setting['currency']->value }} @endisset {{$item->discounted_price}}</span>
                    @else
                        <span class="discounted-price">@isset($setting['currency']) {{  $setting['currency']->value }} @endisset{{$item->price}}</span>
                    @endif
                </div>
            </div>
        </div>

        <!--=======  End of Grid view product  =======-->
        <!--=======  Shop list view product  =======-->
            <div class="gf-product shop-list-view-product">
                <div class="image">
                <a href="{{route('product.find',$item->slug)}}">
                        @if(isset($item->discounted_price))<span class="onsale">Sale!</span>@endif
                        <img src="{{$item->thumbnail}}" class="img-fluid" alt="">
                    </a>
                    <div class="product-hover-icons">
                    </div>
                </div>
                <div class="product-content">
                    <div class="product-categories">


                    </div>
                    <h3 class="product-title">
                        <a href="{{route('product.find',$item->slug)}}">{{$item->title}}
                        </a></h3>
                    <div class="price-box mb-20">
                        @if(isset($item->discounted_price))
                            <span class="main-price">@isset($setting['currency']) {{  $setting['currency']->value }} @endisset {{$item->price}}</span>
                            <span class="discounted-price">@isset($setting['currency']) {{  $setting['currency']->value }} @endisset {{$item->discounted_price}}</span>
                        @else
                            <span class="discounted-price">@isset($setting['currency']) {{  $setting['currency']->value }} @endisset {{$item->price}}</span>
                        @endif
                    </div>
                    <p class="product-description">{{$item->content}}</p>

                    <div class="list-product-icons">
                        <a onclick="add_to_basket({{$item->id}})"  data-tooltip="Add to cart" style="color: white"> <span
                                class="icon_cart_alt"></span></a>
                      @auth
                      <a onclick="add_to_wishlist({{$item->id}})" data-tooltip="Add to wishlist" style="color: white"> <span
                        class="icon_heart_alt"></span>
                       @endauth
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
            {{$products->links()}}
        </div>
    </div>

</div>
