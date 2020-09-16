<footer>
    <!--=======  newsletter section  =======-->

    <div class="newsletter-section pt-50 pb-50" id="SendNewsletter">
        <div class="container">
            <div class="row">
                <div class="col-lg-4 col-md-12 col-sm-12 mb-sm-20 mb-xs-20">
                    <!--=======  newsletter title =======-->

                    <div class="newsletter-title">
                        <h1>
                            <img src="{{asset('assets/images/icon-newsletter.png')}}" alt="">
                            Send Newsletter
                        </h1>
                    </div>

                    <!--=======  End of newsletter title  =======-->
                </div>

                <div class="col-lg-8 col-md-12 col-sm-12">
                    <!--=======  subscription-form wrapper  =======-->

                    <div class="subscription-form-wrapper d-flex flex-wrap flex-sm-nowrap">
                        <p class="mb-xs-20">Sign up for our newsletter to get up-to-date from us</p>
                        <div class="subscription-form">
                            <form  class="mc-form subscribe-form"action="{{route('contact.form')}}" method="post">
                                @csrf
                                <input type="email" id="mc-email" name="email" autocomplete="off"
                                       placeholder="Your email address">
                                <button id="mc-submit" type="submit"> subscribe!</button>
                            </form>

                        </div>
                    </div>

                    <!--=======  End of subscription-form wrapper  =======-->
                </div>
            </div>
        </div>
    </div>

    <!--=======  End of newsletter section  =======-->

    <!--=======  social contact section  =======-->

    <div class="social-contact-section pt-50 pb-50">
        <div class="container">
            <div class="row">
                <div class="col-lg-4 col-md-12 order-2 order-md-2 order-sm-2 order-lg-1">
                    <!--=======  social media links  =======-->

                    <div class="social-media-section">
                        <h2>Follow us</h2>
                        <div class="social-links">
                            <a class="facebook" href="@isset($setting['facebook']) {{  $setting['facebook']->value }} @endisset" data-tooltip="Facebook"><i
                                    class="fa fa-facebook"></i></a>
                            <a class="twitter" href="@isset($setting['twitter']) {{  $setting['twitter']->value }} @endisset" data-tooltip="Twitter"><i
                                    class="fa fa-twitter"></i></a>
                            <a class="instagram" href="@isset($setting['instagram']) {{  $setting['instagram']->value }} @endisset" data-tooltip="Instagram"><i
                                    class="fa fa-instagram"></i></a>
                            <a class="linkedin" href="@isset($setting['linkedin']) {{  $setting['linkedin']->value }} @endisset" data-tooltip="Linkedin"><i
                                    class="fa fa-linkedin"></i></a>


                        </div>
                    </div>

                    <!--=======  End of social media links  =======-->

                </div>
                <div class="col-lg-8 col-md-12 order-1 order-md-1 order-sm-1 order-lg-2  mb-sm-50 mb-xs-50">
                    <!--=======  contact summery  =======-->

                    <div class="contact-summery">
                        <h2>Contact us</h2>

                        <!--=======  contact segments  =======-->

                        <div class="contact-segments d-flex justify-content-between flex-wrap flex-lg-nowrap">
                            <!--=======  single contact  =======-->

                            <div class="single-contact d-flex mb-xs-20">
                                <div class="icon">
                                    <span class="icon_pin_alt"></span>
                                </div>
                                <div class="contact-info">
                                    <p>Address: <span>@isset($setting['address']) {{  $setting['address']->value }} @endisset</span></p>
                                </div>
                            </div>

                            <!--=======  End of single contact  =======-->
                            <!--=======  single contact  =======-->

                            <div class="single-contact d-flex mb-xs-20">
                                <div class="icon">
                                    <span class="icon_mobile"></span>
                                </div>
                                <div class="contact-info">
                                    <p>Phone: <span><a href="tel:@isset($setting['phone']) {{  $setting['phone']->value }} @endisset">@isset($setting['phone']) {{  $setting['phone']->value }} @endisset</a></span></p>
                                </div>
                            </div>

                            <!--=======  End of single contact  =======-->
                            <!--=======  single contact  =======-->

                            <div class="single-contact d-flex">
                                <div class="icon">
                                    <span class="icon_mail_alt"></span>
                                </div>
                                <div class="contact-info">
                                    <p>Email: <span><a href="mailto:@isset($setting['email']) {{  $setting['email']->value }} @endisset">@isset($setting['email']) {{  $setting['email']->value }} @endisset</a></span></p>
                                </div>
                            </div>

                            <!--=======  End of single contact  =======-->
                        </div>

                        <!--=======  End of contact segments  =======-->



                    </div>

                    <!--=======  End of contact summery  =======-->

                </div>
            </div>
        </div>
    </div>

    <!--=======  End of social contact section  =======-->

    <!--=======  footer navigation  =======-->

    <div class="footer-navigation-section pt-40 pb-40">
        <div class="container">
            <div class="row">
                <div class="col-lg-3 col-md-3 col-sm-6 col-xs-12 mb-xs-30">
                    <!--=======  single navigation section  =======-->

                    <div class="single-navigation-section">
                        <h3 class="nav-section-title">INFORMATION</h3>
                        <ul>
                            <li> <a href="/about-us">About Us</a></li>
                            <li> <a href="/delivery-information">Delivery Information</a></li>
                            <li> <a href="/privacy-policy">Privacy Policy</a></li>
                            <li> <a href="terms-conditions">Terms & Condition</a></li>
                        </ul>
                    </div>

                    <!--=======  End of single navigation section  =======-->
                </div>
                <div class="col-lg-3 col-md-3 col-sm-6 col-xs-12 mb-xs-30">
                    <!--=======  single navigation section  =======-->

                    <div class="single-navigation-section">
                        <h3 class="nav-section-title">MY ACCOUNT</h3>
                        <ul>
                            <li> <a href="/my-account">My Account</a></li>
                            <li> <a href="/wishlist">Wishlist</a></li>
                            <li> <a href="/cart">Shopping Cart</a></li>
                            <li> <a href="#SendNewsletter">Newsletter</a></li>
                        </ul>
                    </div>

                    <!--=======  End of single navigation section  =======-->
                </div>

                <div class="col-lg-3 col-md-3 col-sm-6 col-xs-12 mb-xs-30">
                    <!--=======  single navigation section  =======-->

                    <div class="single-navigation-section">
                        <h3 class="nav-section-title">CUSTOMER SERVICE</h3>
                        <ul>
                            <li> <a href="/contact">Contact</a></li>
                            <li> <a href="/returns">RETURNS</a></li>
                            <li> <a href="@isset($setting['site_map']) {{  $setting['site_map']->value }} @endisset">SITE MAP</a></li>
                        </ul>
                    </div>

                    <!--=======  End of single navigation section  =======-->
                </div>

            </div>
        </div>
    </div>

    <!--=======  End of footer navigation  =======-->


    <!--=======  copyright section  =======-->

    <div class="copyright-section pt-35 pb-35">
        <div class="container">
            <div class="row align-items-md-center align-items-sm-center">
                <div class="col-lg-4 col-md-6 col-sm-12 col-xs-12 text-center text-md-left">
                    <!--=======  copyright text	  =======-->

                    <div class="copyright-segment">

                        <p class="copyright-text">&copy; 2020 <a href="https://www.mindfactory.com.tr/">Mindfactory</a>.
                            All Rights Reserved</p>
                    </div>

                    <!--=======  End of copyright text	  =======-->

                </div>
                <div class="col-lg-8 col-md-6 col-sm-12 col-xs-12">
                    <!--=======  payment info  =======-->

                    <div class="payment-info text-center text-md-right">
                        <p>Allow payment base on <img src="{{asset('assets/images/payment-icon.png')}}" class="img-fluid" alt="">
                        </p>
                    </div>

                    <!--=======  End of payment info  =======-->

                </div>
            </div>
        </div>
    </div>

    <!--=======  End of copyright section  =======-->
</footer>

@include('inc.scripts')
