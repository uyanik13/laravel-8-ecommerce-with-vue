
@php
$HomeUnderMenuSlider = Helper::findCustomData('HomeUnderMenuSlider');
$ikiliResim = Helper::findCustomData('ikiliResim');
$ucluResim = Helper::findCustomData('ucluResim');
$brandLogos = Helper::findCustomData('brandLogos');
@endphp

<div class="hero-slider-with-category-container mt-35 mb-35">
<div class="container">
    <div class="row align-items-center">
        <div class="col-lg-3 col-md-12">
            <!--=======  slider left category  =======-->

            <div class="hero-side-category">
                <!-- Category Toggle Wrap -->
                <div class="category-toggle-wrap">
                    <!-- Category Toggle -->
                    <button class="category-toggle"><span class="arrow_carrot-right_alt2 mr-2"></span> All
                        Categories
                    </button>
                </div>

                <!-- Category Menu -->
                <nav class="category-menu">
                    <ul>
                        @php
                            $main_categories = Helper::main_categories();
                        @endphp
                        @foreach($main_categories as $main)
                            <li class="menu-item-has-children"><a
                                    href="{{route('category.find',$main->slug)}}">{{$main->title}}</a>
                                <ul class="category-mega-menu">
                                    @php
                                        $sub = \App\utils\Helpers\Helper::subCategory($main->id)
                                    @endphp
                                    @foreach($sub as $item)
                                        @php
                                            $hasChild = \App\utils\Helpers\Helper::hasChild($item->id)
                                        @endphp
                                        <li class="menu-item-has-children ">
                                            <a href="{{route('category.find',$item->slug)}}" class="megamenu-head">{{$item->title}}</a>
                                            <ul >
                                                @php
                                                    $sub2 = \App\utils\Helpers\Helper::subCategory($item->id)
                                                @endphp
                                                @foreach( $sub2 as $test)
                                                    <li>
                                                        <a href="{{route('category.find',$test->slug)}}">{{$test->title}}</a>
                                                    </li>
                                                @endforeach
                                            </ul>
                                        </li>
                                    @endforeach

                                </ul>
                            </li>
                        @endforeach

                    </ul>
                </nav>
            </div>

            <!--=======  End of slider left category  =======-->
        </div>

        <div class="col-lg-9 col-md-12">
            <!--=======  slider container  =======-->

            <div class="slider-container">
                <!--=======  Slider area  =======-->

                <div class="hero-slider-three">
                    <!--=======  hero slider item  =======-->


                    @isset ($HomeUnderMenuSlider->JsonData)
                        @php
                            $data =  json_decode($HomeUnderMenuSlider->JsonData, true);
                        @endphp

                        @foreach ($data['HomeUnderMenuSlider'] as  $value)

                            <div class="hero-slider-item" style="background: url({{$value['image']}})">
                                <div class="slider-content">
                                    <h1>{{$value['h1']}}</h1>
                                    <h2 class="change-text">{{$value['h2']}}</h2>

                                    <a href="{{$value['url']}}" class="slider-two-btn mt-20">Shop Now</a>
                                </div>
                            </div>


                        @endforeach
                    @endisset




                </div>

                <!--=======  End of Slider area  =======-->
            </div>

            <!--=======  End of slider container  =======-->
        </div>
    </div>
</div>
</div>

<!--=====  End of Hero slider with category   ======-->


<!--=============================================
=            Policy area         =
=============================================-->

<div class="policy-section mb-35">
<div class="container">
    <div class="row">
        <div class="col-lg-12">
            <div class="policy-titles d-flex align-items-center flex-wrap">
                <!--=======  single policy  =======-->
                <div class="bg-white text-center p-1" id="success_wishlist"
                     style="position: fixed;bottom:10px;left: 25px;height: 60px;width: 200px;z-index: 1;border-radius: 50px;display: none">
                    <img style="height: 30px;width: 30px;align-self: center"
                         src="https://www.melissacuturich.com.au/wp-content/uploads/2017/11/success-png-success-icon-image-23194-400.png"
                         alt="">
                    <div class="text-success">
                        Added wishlist successfuly
                    </div>
                </div>
                <div class="single-policy">
                    <span><img src="assets/images/policy-icon1.png" class="img-fluid" alt=""></span>
                    <p> FREE DELIVERY ON ORDERS OVER $200</p>
                </div>

                <!--=======  End of single policy  =======-->


                <!--=======  single policy  =======-->

                <div class="single-policy">
                    <span><img src="assets/images/policy-icon2.png" class="img-fluid" alt=""></span>
                    <p>30 -DAY RETURNS MONEY BACK</p>
                </div>

                <!--=======  End of single policy  =======-->

                <!--=============================================
                =            single policy         =
                =============================================-->

                <div class="single-policy">
                    <span><img src="assets/images/policy-icon3.png" class="img-fluid" alt=""></span>
                    <p> 24/7 SUPPORT</p>
                </div>

                <!--=====  End of single policy  ======-->

            </div>
        </div>
    </div>
</div>
</div>
<!--=====  End of Policy area  ======-->

<!--=============================================
=            Tab slider         =
=============================================-->

<div class="slider tab-slider mb-35">
<div class="container">
    <div class="row">
        <div class="col-lg-12">
            <div class="tab-slider-wrapper">
                <nav>
                    <div class="nav nav-tabs" id="nav-tab" role="tablist">
                        <a class="nav-item nav-link active" id="featured-tab" data-toggle="tab" href="#featured"
                           role="tab" aria-selected="true">New Arrivals</a>
                        <a class="nav-item nav-link" id="new-arrival-tab" data-toggle="tab" href="#new-arrivals"
                           role="tab" aria-selected="false">Top Rated</a>
                        <a class="nav-item nav-link" id="nav-onsale-tab" data-toggle="tab" href="#on-sale"
                           role="tab" aria-selected="false">On Sale</a>
                    </div>
                </nav>
                <div class="tab-content" id="nav-tabContent">
                    {{--aslında new arrival--}}
                    <div class="tab-pane fade show active" id="featured" role="tabpanel"
                         aria-labelledby="featured-tab">
                        <!--=======  tab slider container  =======-->

                        <div class="tab-slider-container">
                            @foreach($new_arrivals as $key => $newArrival)
                            @include('pages.partials.gf-product-tab-slider-sub-product', ['item' => $newArrival])
                            @endforeach

                        </div>

                        <!--=======  End of tab slider container  =======-->
                    </div>
                    {{--top rated--}}
                    <div class="tab-pane fade" id="new-arrivals" role="tabpanel"
                         aria-labelledby="new-arrival-tab">
                        <!--=======  tab slider container  =======-->

                        <div class="tab-slider-container">
                            <!--=======  single tab slider item  =======-->
                            @foreach($top_rated as $key => $topRated)
                                    <div class="single-tab-slider-item">
                         @include('pages.partials.gf-product-tab-slider-sub-product', ['item' => $topRated])
                                    </div>
                             @endforeach
                         </div>

                        <!--=======  End of tab slider container  =======-->
                    </div>
                    {{--indirimdeliler--}}
                    <div class="tab-pane fade" id="on-sale" role="tabpanel" aria-labelledby="nav-onsale-tab">
                        <!--=======  tab slider container  =======-->


                        <div class="tab-slider-container">
                            @foreach($updated_products as $key => $updatedProduct)
                            @include('pages.partials.gf-product-tab-slider-sub-product', ['item' => $updatedProduct])
                        @endforeach

                        </div>
                        <!--=======  End of tab slider container  =======-->
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</div>

<!--=====  End of Tab slider  ======-->

<!--=============================================
=            Double banner          =
=============================================-->

<div class="double-banner-section mb-35">
<div class="container">
    <div class="row">
        @isset ($ikiliResim)
            @php
                $data =  json_decode($ikiliResim->JsonData, true);
            @endphp
            <div class="col-lg-6 col-md-6 col-sm-12 mb-xs-35">
                <div class="single-banner">
                    <a href="{{$data['ikiliResim']['resim1Url']}}">
                        <img src="{{$data['ikiliResim']['ikiliResim1']}}" class="img-fluid" alt="">
                    </a>
                </div>
            </div>
            <div class="col-lg-6 col-md-6 col-sm-12 mb-xs-35">
                <div class="single-banner">
                    <a href="{{$data['ikiliResim']['resim2Url']}}">
                        <img src="{{$data['ikiliResim']['ikiliResim2']}}" class="img-fluid" alt="">
                    </a>
                </div>
            </div>

        @endisset



    </div>
</div>
</div>

<!--=====  End of Double banner   ======-->

<!--=============================================
=            Best seller slider         =
=============================================-->

<div class="slider best-seller-slider mb-35">
<div class="container">
    <div class="row">
        <div class="col-lg-12">
            <!--=======  category slider section title  =======-->

            <div class="section-title">
                <h3>BEST SELLER</h3>
            </div>

            <!--=======  End of category slider section title  =======-->
        </div>
    </div>
    <div class="row">
        <div class="col-lg-12">
            <!--=======  best seller slider container  =======-->


            <div class="best-seller-slider-container pt-15 pb-15">
                @foreach ($all_products as $allProduct)

                @include('pages.partials.best-seller', ['item' => $allProduct])
                @endforeach

            </div>

            <!--=======  End of best seller slider container  =======-->
        </div>
    </div>
</div>
</div>

<!--=====  End of Best seller slider  ======-->


<!--=============================================
=            Slider with banner        =
=============================================-->

<div class="slider slider-with-banner mb-35">
<div class="container">
    <div class="row">
        <div class="col-lg-12">
            <!--=======  blog slider section title  =======-->

            <div class="section-title">
                <h3>Nuts</h3>
            </div>

            <!--=======  End of blog slider section title  =======-->
        </div>
    </div>

    <div class="row">

        <div class="col-lg-12">
            <!--=======  banner slider wrapper  =======-->

            <div class="banner-slider-wrapper">
                <div class="row no-gutters">
                    <div class="col-lg-4 col-md-4 col-sm-12">
                        <!--=======  slider side banner  =======-->

                        @isset($ucluResim)
                            @php
                                $data =  json_decode($ucluResim->JsonData, true);
                            @endphp

                            <div class="slider-side-banner">
                                <a href="{{$data['ucluResim']['resim1Url']}}">
                                    <img src="{{$data['ucluResim']['resim1']}}" class="img-fluid" alt="">
                                </a>
                            </div>
                    @endisset

                    <!--=======  End of slider side banner  =======-->
                    </div>
                    <div class="col-lg-8 col-md-8 col-sm-12">
                        <!--=======  banner slider container  =======-->

                        <div class="banner-slider-container">


                            @foreach($new_arrivals as $key => $item)

                                <div class="gf-product banner-slider-product">
                                    <div class="image">
                                        <a href="{{route('product.find',$item->slug)}}">
                                            <span class="onsale">Sale!</span>
                                            <img src="{{$item->thumbnail}}" class="img-fluid"
                                                 alt="">
                                        </a>
                                        <div class="product-hover-icons">
                                            <a href="{{route('product.find',$item->slug)}}" data-tooltip="See Product"> <span
                                                    class="icon_search"></span> </a>
                                        </div>
                                    </div>
                                    <div class="product-content">
                                        <h3 class="product-title">
                                            <a href="{{route('product.find',$item->slug)}}">{{substr($item->title,0,15)}}</a></h3>
                                        <div class="price-box">

                                            @isset($item->price)
                                                <span class="main-price">@isset($setting['currency']) {{  $setting['currency']->value }} @endisset {{$item->price}}</span>
                                            @endisset

                                            @isset($item->discounted_price)
                                                <span class="discounted-price">@isset($setting['currency']) {{  $setting['currency']->value }} @endisset {{$item->discounted_price}}</span>
                                            @endisset

                                        </div>
                                    </div>
                                </div>

                            @endforeach

                        </div>

                        <!--=======  End of banner slider container  =======-->

                        <div class="row no-gutters">
                            <div class="col-lg-6 col-md-6 col-sm-6">
                                <!--=======  slider banner  =======-->

                                @isset($ucluResim)
                                @php
                                    $data =  json_decode($ucluResim->JsonData, true);
                                @endphp
                                <div class="slider-banner">
                                    <a href="{{$data['ucluResim']['resim1Url']}}">
                                        <img style="height: 263px;"
                                             src="{{$data['ucluResim']['resim1']}}"
                                             class="img-fluid" alt="">
                                    </a>
                                </div>
                               @endisset


                                <!--=======  End of slider banner  =======-->
                            </div>
                            <div class="col-lg-6 col-md-6 col-sm-6">
                                <!--=======  slider banner  =======-->

                                @isset($ucluResim)
                                @php
                                    $data =  json_decode($ucluResim->JsonData, true);
                                @endphp
                                <div class="slider-banner">
                                    <a href="{{$data['ucluResim']['resim2Url']}}">
                                        <img style="height: 263px;"
                                             src="{{$data['ucluResim']['resim2']}}"
                                             class="img-fluid" alt="">
                                    </a>
                                </div>
                               @endisset

                                <!--=======  End of slider banner  =======-->
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!--=======  End of banner slider wrapper =======-->
        </div>
    </div>
</div>
</div>

<!--=====  End of Slider with banner ======-->

<!--=============================================
=            Blog post slider container         =
=============================================-->

<div class="slider blog-slider mb-35">
<div class="container">
    <div class="row">
        <div class="col-lg-12">
            <!--=======  blog slider section title  =======-->

            <div class="section-title">
                <h3>yemish news</h3>
            </div>

            <!--=======  End of blog slider section title  =======-->
        </div>
    </div>

    <div class="row">
        <div class="col-lg-12">
            <!--=======  blog slide container  =======-->

            <div class="blog-slider-container pt-30 pb-30 pr-30 pl-30">
                @foreach($recent_post_blog_page as $item)
                    <div class="col">
                        <div class="single-post-wrapper">
                            <div class="post-thumb">
                            <a href="{{route('post.find',$item->slug)}}">
                                    @if(!$item->thumbnail=='')
                                        <img src="{{$item->thumbnail}}" style="height: 250px;width:350px"
                                             class="img-fluid" alt="">
                                    @else
                                        <img style="height: 250px;width:350px"
                                             src="https://via.placeholder.com/150.png"
                                             class="img-fluid" alt="">
                                    @endif

                                </a>
                            </div>
                            <div class="post-info">
                                <div class="post-meta">
                                    <div
                                        class="post-date">{{\Carbon\Carbon::createFromTimeStamp(strtotime($item->created_at))->diffForHumans()}}</div>
                                </div>
                                <h3 class="post-title"><a href="/blog-post/{{$item->slug}}">{{$item->title}}</a>
                                </h3>
                                <a href="blog-post/{{$item->slug}}" class="readmore-btn">{{$item->slug}} <i
                                        class="fa fa-arrow-right"></i></a>
                            </div>
                        </div>
                    </div>
                @endforeach
            </div>
        </div>
    </div>
</div>
</div>

<!--=====  End of Blog post slider  ======-->


<!--=============================================
=            Brand logo slider         =
=============================================-->

<div class="slider brand-logo-slider mb-35">
<div class="container">
    <div class="row">
        <div class="col-lg-12">
            <!--=======  blog slider section title  =======-->

            <div class="section-title">
                <h3>brand logos</h3>
            </div>

            <!--=======  End of blog slider section title  =======-->
        </div>
    </div>


    <div class="row">
        <div class="col-lg-12">
            <!--=======  brand logo wrapper  =======-->

            <div class="brand-logo-wrapper pt-20 pb-20">

                @if ($brandLogos)
                    @php
                        $brandLogo =  json_decode($brandLogos->JsonData, true);
                    @endphp

                    @foreach ($brandLogo['brandLogos'] as  $value)

                        <div class="col">
                            <div class="single-brand-logo">
                                <a href="{{$value['url']}}">
                                    <img src="{{$value['image']}}" class="img-fluid" alt="{{$value['name']}}">
                                </a>
                            </div>
                        </div>

                    @endforeach
                @endif



            </div>

            <!--=======  End of brand logo wrapper  =======-->
        </div>
    </div>
</div>
</div>

<!--=====  End of Brand logo slider  ======-->


<!--=============================================
=            Footer         =
=============================================-->


<!--=====  End of Footer  ======-->

<!-- scroll to top  -->
<a href="#" class="scroll-top"></a>
<!-- end of scroll to top -->
