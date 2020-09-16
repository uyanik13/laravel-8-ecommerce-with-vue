


<!--=====  End of Header  ======-->

<!--=============================================
=            breadcrumb area         =
=============================================-->
@php
    $post = Helper::findProduct($itemId);
    $relatedProducts = Helper::relatedProducts($post->title);
    $relatedProducts = Helper::relatedProducts($post->title);
    $options = Helper::jsonToArray($post->options);


@endphp

<div class="breadcrumb-area mb-50">
    <div class="container">
        <div class="row">
            <div class="col">
                <div class="breadcrumb-container">
                    <ul>
                        <li><a href="/"><i class="fa fa-home"></i> Home</a></li>
                    <li><a href="{{route('category.find',$post->category->slug)}}">{{$post->category->title}}</a></li>
                    <li class="active">{{substr($post->title,0,50)}}</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</div>

<!--=====  End of breadcrumb area  ======-->

<!--=============================================
=            single product content         =
=============================================-->
@if(session()->has('commentResult'))
@endif

<div class="single-product-content ">
    <div class="container">
        <!--=======  single product content container  =======-->
        <div class="single-product-content-container mb-35">
            <div class="row">
                <div class="col-lg-6 col-md-12 col-xs-12">


                    <!-- product image gallery -->
                    <div
                        class="product-image-slider d-flex flex-custom-xs-wrap flex-sm-nowrap align-items-center mb-sm-35">
                        <!--Modal Tab Menu Start-->
                        <div class="product-small-image-list">
                            <div class="nav small-image-slider-single-product" role="tablist">

                                @if(!$options['gallery'][0]['name'])
                                 <div class="single-small-image img-full">
                                <a data-toggle="tab" id="single-slide-tab-9999"
                                    href="#single-slide9999"><img
                                     src="{{$post->thumbnail}}"
                                     class="img-fluid" alt="{{$post->title}}"></a>
                                </div>
                                @endif

                                @isset ($options['gallery'])
                                @foreach ($options['gallery'] as $key => $value)

                                <div class="single-small-image img-full">
                                <a data-toggle="tab" id="single-slide-tab-{{$key}}"
                                    href="#single-slide{{$key}}"><img
                                     src="{{$value['url']}}"
                                     class="img-fluid" alt="{{$value['name']}}"></a>
                                </div>
                                @endforeach
                                @endisset



                            </div>
                        </div>
                        <!--Modal Tab Menu End-->

                        <!--Modal Tab Content Start-->
                        <div class="tab-content product-large-image-list">

                                @if(!$options['gallery'][0]['name'])
                                <div class="tab-pane fade show active"
                                id="single-slide9999" role="tabpanel"
                                aria-labelledby="single-slide-tab-9999">
                               <!--Single Product Image Start-->
                               <div class="single-product-img easyzoom img-full">
                                   <img src="{{$post->thumbnail}}" class="img-fluid"
                                        alt="{{$post->title}}">
                                   <a href="{{$post->thumbnail}}"
                                      class="big-image-popup"><i class="fa fa-search-plus"></i></a>
                               </div>
                                </div>
                                @endif


                            @isset ($options['gallery'])
                            @foreach ($options['gallery'] as $key => $value)
                            <div class="tab-pane fade show {{$key === 1 ? 'active' : ''}}"
                                id="single-slide{{$key}}" role="tabpanel"
                                aria-labelledby="single-slide-tab-{{$key}}">
                               <!--Single Product Image Start-->
                               <div class="single-product-img easyzoom img-full">
                                   <img src="{{$value['url']}}" class="img-fluid"
                                        alt="{{$value['name']}}">
                                   <a href="{{$value['url']}}"
                                      class="big-image-popup"><i class="fa fa-search-plus"></i></a>
                               </div>
                                </div>
                                @endforeach
                             @endisset


                        </div>
                        <!--Modal Content End-->

                    </div>
                    <!-- end of product image gallery -->
                </div>
                <div class="col-lg-6 col-md-12 col-xs-12">
                    <!-- product quick view description -->
                    <div class="product-feature-details">
                        <h2 class="product-title mb-15">{{$post->title}}</h2>

                        <p class="product-rating">
                            @if(!$post->comments->isEmpty())
                                @php
                                    $total_voter = count($post->comments);
                                   $temp=0;
                                   foreach ($post->comments as $item){
                                       $temp+= $item->point;
                                   }
                                   $total_review_point = $temp;
                                   $full_stars = round($total_review_point/$total_voter);
                                   $empty_stars = 5 - $full_stars;
                                @endphp
                                {{number_format((float)$total_review_point/$total_voter, 2, '.', '')}}
                                @if($full_stars)
                                    @for( $i=0;$i<$full_stars;$i++)
                                        <i class="fa fa-star active"></i>
                                    @endfor
                                    @for( $i=0;$i<$empty_stars;$i++)
                                        <i class="fa fa-star"></i>
                                    @endfor
                                @endif
                                <a href="#">({{$total_voter}} customer review)</a>
                            @else
                                @php$total_voter = 1@endphp
                                @for( $i=0;$i<5;$i++)

                                    <i class="fa fa-star"></i>
                                @endfor
                                ( No Vote yet)
                            @endif


                        </p>



                        <h2 class="product-price mb-15">
                            @if($post->discounted_price)
                                <span class="main-price">@isset($setting['currency']) {{  $setting['currency']->value }} @endisset {{$post->price}}</span>
                                <span class="discounted-price">@isset($setting['currency']) {{  $setting['currency']->value }} @endisset {{$post->discounted_price}}</span>
                            @else
                                <span class="discounted-price">@isset($setting['currency']) {{  $setting['currency']->value }} @endisset {{$post->price}}</span>
                            @endif
                        </h2>

                    <p class="product-description mb-20">{!! html_entity_decode(substr($post->content,0,500)) !!}</p>

                         <h4 class="product-price mb-15">
                        <span class="discounted-price">Quantity : {{$post->quantity}}</span>
                         </h4>
                        <div class="cart-buttons mb-20">
                            <div class="pro-qty mr-20 mb-xs-20">
                                <input name="qty" id="qty" type="text" value="1">
                            </div>
                            <div class="add-to-cart-btn">
                                <a onclick="add_to_basket({{$post->id}}, document.getElementById('qty').value)"><i class="fa fa-shopping-cart"></i> Add to Cart</a>
                            </div>
                        </div>
                        <div class="social-share-buttons">
                            <h3>share this product</h3>
                            <ul>
                                <li><a href="https://www.facebook.com/sharer/sharer.php?u={{$pageFullUrl}}"  target="_blank"><i class="fa fa-facebook-f"></i></a></li>
                                 <li><a href="https://twitter.com/intent/tweet?text={{$pageFullUrl}}"  target="_blank"><i class="fa fa-twitter"></i></a></li>

                            </ul>
                        </div>
                    </div>
                    <!-- end of product quick view description -->
                </div>
            </div>
        </div>

        <!--=======  End of single product content container  =======-->

    </div>

</div>



<div class="single-product-tab-section mb-35">
    <div class="container">
        <div class="row">
            <div class="col-lg-12">
                <div class="tab-slider-wrapper">
                    <nav>
                        <div class="nav nav-tabs" id="nav-tab" role="tablist">
                            <a class="nav-item nav-link active" id="description-tab" data-toggle="tab"
                               href="#description" role="tab" aria-selected="true">Description</a>
                            <a class="nav-item nav-link" id="features-tab" data-toggle="tab" href="#features"
                               role="tab" aria-selected="false">Features</a>
                            <a class="nav-item nav-link" id="review-tab" data-toggle="tab" href="#review" role="tab"
                               aria-selected="false">Reviews ({{count($post->comments)}})</a>
                        </div>
                    </nav>
                    <div class="tab-content" id="nav-tabContent">
                        <div class="tab-pane fade show active" id="description" role="tabpanel"
                             aria-labelledby="description-tab">
                            <p class="product-desc">{!! html_entity_decode($post->content) !!}</p>
                        </div>
                        <div class="tab-pane fade" id="features" role="tabpanel" aria-labelledby="features-tab">
                            <table class="table-data-sheet">
                                <tbody>
                              @isset ($options['features'])
                                @foreach ($options['features'] as $key => $value)
                                <tr class="odd">
                                    <td>{{$value['key']}}</td>
                                    <td>{{$value['value']}}</td>
                                </tr>
                                @endforeach
                                @endisset

                                </tbody>
                            </table>
                        </div>
                        @if($post->comments)
                            @php
                                $point_temp=0;
                                foreach($post->comments as $item){
                                    $point_temp += $item->point;
                                }
                                if ($point_temp <1 or count($post->comments)<1){
                                    $point_temp =1;
                                    $avg_point = 1;
                                }else{
                                $avg_point = number_format((float)$point_temp/count($post->comments), 2, '.', '');}
                            @endphp

                        <div class="tab-pane fade" id="review" role="tabpanel" aria-labelledby="review-tab">
                            <div class="product-ratting-wrap">
                                <div class="pro-avg-ratting">
                                    @if(count($post->comments)<1)
                                        @php
                                        $total_voter = 1;
                                        $avg_point = 0;
                                            @endphp
                                    @endif
                                    <h4> {{$avg_point}} <span>(Overall)</span></h4>
                                    <span>Based on {{$total_voter}} Comments</span>
                                </div>
                                <div class="rattings-wrapper">
                                    @forelse($post->comments as $item)
                                        <div class="sin-rattings">
                                        <div class="ratting-author">
                                            <h3>{{$item->user->name}}</h3>
                                            <div class="ratting-star">
                                                @for($i=0;$i<$item->point;$i++)
                                                    <i class="fa fa-star"></i>
                                                @endfor
                                                @for($i=0;$i<5-$item->point;$i++)
                                                    <i class="fa fa-star-o"></i>
                                                 @endfor
                                                <span>({{$item->point}})</span>
                                            </div>
                                        </div>
                                        <p>{{$item->content}}</p>
                                    </div>
                                    @empty
                                        There are no comments yet. Make it first
                                    @endforelse
                                </div>
                                <div class="ratting-form-wrapper fix">
                                    <h3>Add your Comments</h3>
                                    @auth
                                        <form action="{{route('add_comment_to_product',auth()->user()->id)}}" method="post">
                                            @csrf
                                            <div class="ratting-form row">
                                                <div class="col-12 mb-15">
                                                    <h5>Rating:</h5>
                                                    <div class="ratting-star fix">
                                                        <i id="1" onmouseover="starmark(this)"  class="fa fa-star checked" style="cursor: pointer" ></i>
                                                        <i id="2" onmouseover="starmark(this)"  class="fa fa-star checked" style="cursor: pointer"></i>
                                                        <i id="3" onmouseover="starmark(this)"  class="fa fa-star checked" style="cursor: pointer"></i>
                                                        <i id="4" onmouseover="starmark(this)"  class="fa fa-star checked" style="cursor: pointer"></i>
                                                        <i id="5" onmouseover="starmark(this)"  class="fa fa-star checked" style="cursor: pointer"></i>
                                                    </div>
                                                </div>
                                                <script >
                                                    var rating="";
                                                    function starmark(item) {
                                                        var count= item.id;
                                                        rating = count;
                                                        for (var i = 0; i<5;i++){
                                                            if(i<count){
                                                                document.getElementById((i+1)).style.color = "orange";
                                                            }else{
                                                                document.getElementById((i+1)).style.color = "black";
                                                            }
                                                        }
                                                        document.getElementById('point_input').value = rating;
                                                    }
                                                </script>
                                                {{--<div class="col-md-6 col-12 mb-15">
                                                    <label for="name">Name:</label>
                                                    <input name="name" placeholder="Name" type="text">
                                                </div>
                                                <div class="col-md-6 col-12 mb-15">
                                                    <label for="email">Email:</label>
                                                    <input name="email" placeholder="Email" type="text">

                                                </div>--}}
                                                <div class="col-12 mb-15">
                                                    <label for="your-review">Your Review:</label>
                                                    <textarea name="content" id="your-review"
                                                              placeholder="Write a review"></textarea>
                                                    <input name="post_id" type="hidden" value="{{$post->id}}">
                                                    <input name="point" type="hidden" value="1" id="point_input">
                                                </div>

                                                <div class="col-12">
                                                    <input value="add review" type="submit">
                                                </div>
                                            </div>
                                        </form>
                                    @endauth
                                    @guest
                                        <div class="col-6">
                                            <a href="/login-register"  type="submit" class="btn btn-success" >Login</a>
                                        </div>
                                        <div class="col-6">
                                            <h5 class="text-danger">In order to add comment login first</h5>
                                        </div>
                                    @endguest


                                </div>
                            </div>
                        </div>
                        @endif
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>


<div class="slider related-product-slider mb-35">
    <div class="container">
        <div class="row">
            <div class="col-lg-12">
                <!--=======  multisale  slider section title  =======-->

                <div class="section-title">
                    <h3>Related Product</h3>
                </div>

                <!--=======  End of multisale slider section title  =======-->
            </div>
        </div>
        <div class="row">
            <div class="col-lg-12">
                <!--=======  related product slider wrapper  =======-->

                <div class="related-product-slider-wrapper">
                    <!--=======  single related slider product  =======-->
                    @foreach($relatedProducts as $relatedProduct)

                        <div class="gf-product related-slider-product">
                        <div class="image">
                            <a href="{{route('product.find',$relatedProduct->slug)}}">
                                @isset($relatedProduct->discounted_price)<span class="onsale">Sale!</span>@endisset
                                <img src="{{$relatedProduct->thumbnail}}" class="img-fluid" alt="">
                            </a>
                            <div class="product-hover-icons">
                                <a onclick="add_to_basket({{$relatedProduct->id}})" data-tooltip="Add to cart"> <span class="icon_cart_alt"></span></a>
                                <a onclick="add_to_wishlist({{$relatedProduct->id}})" data-tooltip="Add to wishlist"> <span class="icon_heart_alt"></span>
                                </a>

                            </div>
                        </div>
                        <div class="product-content">
                            <div class="product-categories">
                                <a href="{{route('category.find',$relatedProduct->category->slug)}}">{{$relatedProduct->category->title}}</a>,

                            </div>
                        <h3 class="product-title"><a href="{{route('product.find',$relatedProduct->slug)}}">{{$relatedProduct->title}}</a></h3>
                            <div class="price-box">
                                @if(isset($relatedProduct->discounted_price))
                                <span class="main-price">@isset($setting['currency']) {{  $setting['currency']->value }} @endisset{{$relatedProduct->price}}</span>
                                <span class="discounted-price">@isset($setting['currency']) {{  $setting['currency']->value }} @endisset{{$relatedProduct->discounted_price}}</span>
                            @else
                                <span class="discounted-price">@isset($setting['currency']) {{  $setting['currency']->value }} @endisset{{$relatedProduct->price}}</span>
                            @endif
                            </div>
                        </div>
                    </div>
                    @endforeach
                    <!--=======  End of single related slider product  =======-->
                </div>
                <!--=======  End of related product slider wrapper  =======-->
            </div>
        </div>
    </div>
</div>

<div class="bg-white text-center p-1" id="success_wishlist" style="position: fixed;bottom:10px;left: 25px;height: 60px;width: 200px;z-index: 1;border-radius: 50px;display: none">
    <img style="height: 30px;width: 30px;align-self: center" src="https://www.melissacuturich.com.au/wp-content/uploads/2017/11/success-png-success-icon-image-23194-400.png" alt="">
    <div class="text-success">
        Added wishlist successfuly
    </div>
</div>
<div class="slider related-product-slider mb-50">
    <div class="container">
        <div class="row">
            <div class="col-lg-12">

                <div class="section-title">
                    <h3>Upsell Product</h3>
                </div>

            </div>
        </div>
        <div class="row">
            <div class="col-lg-12">
                <!--=======  related product slider wrapper  =======-->

                <div class="related-product-slider-wrapper">
                    <!--=======  single related slider product  =======-->
                    @foreach($relatedProducts as $upsellProduct)

                        <div class="gf-product related-slider-product">
                        <div class="image">
                            <a href="{{route('product.find',$upsellProduct->slug)}}">
                                @isset($upsellProduct->discounted_price)<span class="onsale">Sale!</span>@endisset
                                <img src="{{$upsellProduct->thumbnail}}" class="img-fluid" alt="">
                            </a>
                            <div class="product-hover-icons">
                                <a onclick="add_to_basket({{$upsellProduct->id}})" data-tooltip="Add to cart"> <span class="icon_cart_alt"></span></a>
                                <a onclick="add_to_wishlist({{$upsellProduct->id}})" data-tooltip="Add to wishlist"> <span class="icon_heart_alt"></span>
                                </a>

                            </div>
                        </div>
                        <div class="product-content">
                            <div class="product-categories">
                                <a href="{{route('category.find',$upsellProduct->category->slug)}}">{{$upsellProduct->category->title}}</a>,

                            </div>
                        <h3 class="product-title"><a href="{{route('product.find',$upsellProduct->slug)}}">{{$upsellProduct->title}}</a></h3>
                            <div class="price-box">
                                @if(isset($upsellProduct->discounted_price))
                                <span class="main-price">@isset($setting['currency']) {{  $setting['currency']->value }} @endisset{{$upsellProduct->price}}</span>
                                <span class="discounted-price">@isset($setting['currency']) {{  $setting['currency']->value }} @endisset{{$upsellProduct->discounted_price}}</span>
                            @else
                                <span class="discounted-price">@isset($setting['currency']) {{  $setting['currency']->value }} @endisset{{$upsellProduct->price}}</span>
                            @endif
                            </div>
                        </div>
                    </div>
                    @endforeach
                    <!--=======  End of single related slider product  =======-->
                </div>

                <!--=======  End of related product slider wrapper  =======-->
            </div>
        </div>
    </div>
</div>



<!-- scroll to top  -->
<a href="#" class="scroll-top"></a>
