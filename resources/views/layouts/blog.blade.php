
<!DOCTYPE html>
<html lang="{{ app()->getLocale() }}">
<head>
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width,initial-scale=1.0">
  <meta name="csrf-token" content="{{ csrf_token() }}">
  <!-- fonts collection 8 -->
  <link href='https://fonts.googleapis.com/css?family=Inconsolata:400,700' rel='stylesheet' type='text/css'>
  <link href='https://fonts.googleapis.com/css?family=Montserrat:400,500,600,700' rel='stylesheet' type='text/css'>
  <link href='https://fonts.googleapis.com/css?family=Droid+Serif:400italic,700italic' rel='stylesheet'
        type='text/css'>

  <link href="{{ asset('assets/css/bootstrap.min.css') }}" rel="stylesheet" type="text/css" />
  <link href="{{ asset('assets/css/bootstrap.extension.css') }}" rel="stylesheet" type="text/css" />
  <link href="{{ asset('assets/css/font-awesome.min.css') }}" rel="stylesheet" type="text/css" />
  <link href="{{ asset('assets/css/style.css') }}" rel="stylesheet" type="text/css" />
  <link href="{{ asset('assets/css/custom.css') }}" rel="stylesheet" type="text/css" />
  <link href="{{ asset('assets/css/swiper.css') }}" rel="stylesheet" type="text/css" />


  <link rel="shortcut icon" href="{{ asset('assets/img/favicon.png') }}" />
  <meta name="geo.placename" content="{{ $setting['Address']->value }}" /><meta name="geo.position" content="41.063246;28.997317" /><meta name="geo.region" content="TR" />
  <meta name="description" content="{{ $post[0]->seo_description }}"/>
  <meta property="og:locale" content="tr_TR" />
  <meta property="og:type" content="website" />
  <meta property="place:location:latitude" content="41.063246"/>
  <meta property="place:location:longitude" content="28.997317"/>
  <meta property="business:contact_data:email" content="{{ $setting['Email']->value }}"/>
  <meta property="business:contact_data:phone_number" content="{{ $setting['Phone']->value }}"/>

  <title>{{ $post[0]->seo_title }}</title>

</head>
<body class="bg-light">
<div id="app">
  <div id="loader-wrapper"></div>
  <section class="homepage">
    <div id="content-block">
    @include('inc/header')  <!-- HEADER SECTION --->
        @include('components/blog-detail')

      @include('inc/footer')
    </div>
  </section>
</div>

<script src="{{ asset('assets/js/jquery-2.1.4.min.js') }}"></script>
<script src="{{ asset('assets/js/swiper.jquery.min.js') }}"></script>
<script src="{{ asset('assets/js/jquery.mousewheel.min.js') }}"></script>
<script src="{{ asset('assets/js/global.js') }}"></script>
@stack('inline-scripts')
</body>
</html>
