<!DOCTYPE html>
<!--[if IE 7]><html class="ie ie7 ltie8 ltie9" lang="en-US"><![endif]-->
<!--[if IE 8]><html class="ie ie8 ltie9" lang="en-US"><![endif]-->
<!--[if !(IE 7) | !(IE 8)  ]><!-->
<html lang="{{ app()->getLocale() }}">
<!--<![endif]-->

<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="initial-scale=1.0" />
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <input type="hidden" id="meta_csrf"  value="{{csrf_token()}}">
    @if ($page)
        <title>{{ $page->seo_title }}</title>
        <meta name="description" content="{{ $page->seo_description }}"/>
    @else
        <title>test</title>
        <meta name="description" content="test"/>
@endif

<!-- Favicon -->
    <link rel="icon" href="{{asset('assets/images/favicon.ico')}}">
    <!-- CSS
    ============================================ -->

    <!-- Bootstrap CSS -->
    <link href="{{asset('assets/css/bootstrap.min.css')}}" rel="stylesheet">

    <!-- FontAwesome CSS -->
    <link href="{{asset('assets/css/font-awesome.min.css')}}" rel="stylesheet">

    <!-- Elegent CSS -->
    <link href="{{asset('assets/css/elegent.min.css')}}" rel="stylesheet">

    <!-- Plugins CSS -->
    <link href="{{asset('assets/css/plugins.css')}}" rel="stylesheet">

    <!-- Helper CSS -->
    <link href="{{asset('assets/css/helper.css')}}" rel="stylesheet">

    <!-- Main CSS -->
    <link href="{{asset('assets/css/main.css')}}" rel="stylesheet">
    <link rel="stylesheet" href="{{asset('assets/css/custom.css')}}">

    @stack('inline-scripts')

    <!-- Modernizer JS -->

    <script src="{{asset('assets/js/vendor/modernizr-2.8.3.min.js')}}"></script>
    <script src="{{asset('assets/js/custom.js')}}"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/limonte-sweetalert2/10.0.2/sweetalert2.all.min.js"></script>



    <style>
        ::-webkit-scrollbar {
            width: 1px;
        }
    </style>
</head>



<body onload="render_basket()">

<header>
    <!--=======  header top  =======-->

    <div class="header-top pt-10 pb-10 pt-lg-10 pb-lg-10 pt-md-10 pb-md-10">
        <div class="container">
            <div class="row">
                <div class="col-lg-12 col-md-6 col-sm-6 col-xs-12 text-center text-sm-right">
                    <!-- header top menu -->
                    <div class="header-top-menu">
                        <ul class="socialWidgets">
                            <li><a href="@isset($setting['instagram']) {{  $setting['instagram']->value }} @endisset"><i class="fa fa-instagram"></i></a></li>
                            <li><a href="@isset($setting['facebook']) {{  $setting['facebook']->value }} @endisset"><i class="fa fa-facebook"></i></a></li>
                            <li><a href="@isset($setting['twitter']) {{  $setting['twitter']->value }} @endisset"><i class="fa fa-twitter"></i></a></li>
                            <li><a href="@isset($setting['linkedin'])  {{  $setting['linkedin']->value }} @endisset"><i class="fa fa-linkedin"></i></a></li>
                        </ul>
                        <ul class="accountActions">
                            <li>

                                @if ($user)
                                <a href="/my-account"><i class="fa fa-user"></i> My account</a>
                                @else
                                <a href="/login-register"><i class="fa fa-user"></i> Login/Register</a>
                                @endif

                            </li>
                            <li><a href="/contact"><i class=" fa fa-phone"></i> Contact Us</a></li>
                        </ul>
                    </div>
                    <!-- end of header top menu -->
                </div>
            </div>
        </div>
    </div>

    <!--=======  End of header top  =======-->

    <!--=======  header bottom  =======-->

    <div class="header-bottom header-bottom-other header-sticky">
        <div class="container">
            <div class="row">
                <div class="col-md-3 col-sm-12 col-xs-12 text-lg-left text-md-center text-sm-center">
                    <!-- logo -->
                    <div class="logo">
                        <a href="/">
                            <img src="@isset($setting['logo']) {{  $setting['logo']->value }} @endisset" class="img-fluid" alt="">
                        </a>
                    </div>
                    <!-- end of logo -->
                </div>
                <div  class="col-md-9 col-sm-12 col-xs-12">
                    <div
                        class="menubar-top d-flex justify-content-between align-items-center flex-sm-wrap flex-md-wrap flex-lg-nowrap mt-sm-15">
                        <!-- end of header phone number -->
                        <!-- search bar -->
                        <div class="header-advance-search" id="search_box_div">
                            <input onkeyup="main_live_search()" id="search_text_input" type="text" name="search_text"autocomplete="off" placeholder="Search your product">
                            <ul id="search_result" style="display: none;width: 100%;padding: 0;margin: 0;border-radius: 5px;" class="dropdown-menu ">
                            </ul>
                            <button onclick="main_live_search()" >
                                <span class="icon_search">

                                </span>
                            </button>
                        </div>
                        <script >
                            window.addEventListener('click', function(e){
                                if (!document.getElementById('search_box_div').contains(e.target)){
                                    document.getElementById('search_result').style.display = "none"
                                }
                            });
                        </script>
                        @include('pages.partials.cart')
                    </div>


                    <!--=============================================
                        =            navigation menu         =
                        =============================================-->

                    <!-- navigation section -->
                    <div class="main-menu main-menu-other-homepage mobileOffMenu">
                        <nav>
                            <ul>
                                <li class="active">
                                    <a href="/">Home</a>
                                </li>
                                @php($main_categories = \App\utils\Helpers\Helper::main_categories())
                                @forelse($main_categories as $main)
                                    <li class="menu-item-has-children"><a href="{{route('category.find',$main->slug)}}">{{$main->title}}</a>
                                        <ul class="mega-menu three-column">
                                            @php($sub = \App\utils\Helpers\Helper::subCategory($main->id))
                                            @forelse($sub as $item)
                                                @php($hasChild = \App\utils\Helpers\Helper::hasChild($item->id))
                                                <li>
                                                    <a href="{{route('category.find',$item->slug)}}">{{$item->title}}</a>
                                                    <ul>
                                                        @php($sub2 = \App\utils\Helpers\Helper::subCategory($item->id))
                                                        @forelse( $sub2 as $test)
                                                            <li><a href="{{route('category.find',$test->slug)}}">{{$test->title}}</a></li>
                                                        @empty
                                                        @endforelse
                                                    </ul>
                                                </li>
                                            @empty
                                            @endforelse
                                        </ul>
                                    </li>
                                @empty
                                @endforelse

                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </div>

        <!--=============================================
        =            navigation menu     ana menü    =
        =============================================-->

        <div class="home-other-navigation-menu">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <!-- navigation section -->
                        <div class="main-menu mainForMobile">
                            <nav>
                                <ul>
                                    <li>
                                        <a href="/">Home</a>
                                    </li>
                                    @php($main_categories = \App\utils\Helpers\Helper::main_categories())
                                    @forelse($main_categories as $main)
                                        <li class="menu-item-has-children"><a href="{{route('category.find',$main->slug)}}">{{$main->title}}</a>
                                            <ul class="mega-menu three-column">
                                                @php($sub = \App\utils\Helpers\Helper::subCategory($main->id))
                                                @forelse($sub as $item)
                                                    @php($hasChild = \App\utils\Helpers\Helper::hasChild($item->id))
                                                    <li>
                                                        <a href="{{route('category.find',$item->slug)}}">{{$item->title}}</a>
                                                        <ul>
                                                            @php($sub2 = \App\utils\Helpers\Helper::subCategory($item->id))
                                                            @forelse( $sub2 as $test)
                                                                <li><a href="{{route('category.find',$test->slug)}}">{{$test->title}}</a></li>
                                                            @empty
                                                            @endforelse
                                                        </ul>
                                                    </li>
                                                @empty
                                                @endforelse
                                            </ul>
                                        </li>
                                    @empty
                                    @endforelse
                                </ul>
                            </nav>
                        </div>
                        <!-- end of navigation section -->
                    </div>
                </div>
            </div>
        </div>

        <!--=====  End of navigation menu  ======-->


    </div>

    <div id="appMenu">
        <div class="container">
            <div class="row">
                <div class="appMenuContainer">
                    <div class="appMenuItemn mobile-menu d-block d-lg-none">
                    </div>
                    <!-- <div class="appMenuItem">
                        <a class="openNav" href="javascript:void(0);"><img src="/assets/images/appMenu/1.png"
                                alt=""></a>
                    </div> -->
                    <div class="appMenuItem">
                        <a href="/shop"><img src="/assets/images/appMenu/2.png" alt=""></a>
                    </div>
                    <div class="appMenuItem">
                        <a href="/faq"><img src="/assets/images/appMenu/5.png" alt=""></a>
                    </div>
                    <div class="appMenuItem">
                        <a href="/cart"><img src="/assets/images/appMenu/3.png" alt=""></a>
                    </div>
                    <div class="appMenuItem">
                        <a href="/my-account"><img src="/assets/images/appMenu/4.png" alt=""></a>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!--=======  End of header bottom  =======-->


</header>
