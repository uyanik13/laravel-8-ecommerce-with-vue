

	<!--=====  End of Header  ======-->

	<!--=============================================
    =            breadcrumb area         =
    =============================================-->

	<div class="breadcrumb-area mb-50">
		<div class="container">
			<div class="row">
				<div class="col">
					<div class="breadcrumb-container">
						<ul>
							<li><a href="/"><i class="fa fa-home"></i> Home</a></li>
							<li class="active">Login - Register</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	</div>

        @if ($user)
        <script>window.location = "/";</script>
        @endif


	<!--=====  End of breadcrumb area  ======-->

	<!--=============================================
	=            Login register page content         =
	=============================================-->
@if (!$user)
<div class="page-content mb-50">
    <div class="container">
        <div class="row">
            <div class="col-sm-12 col-md-12 col-xs-12 col-lg-6 mb-30">
                <!-- Login Form s-->
                    <div class="login-form">
                        <h4 class="login-title">Login</h4>

                        <div class="row">
                            <div class="col-md-12 col-12 mb-20">
                                <label>Email Address*</label>
                                <input id="email_login" class="mb-0" type="email" placeholder="Email Address">
                            </div>
                            <div class="col-12 mb-20">
                                <label>Password</label>
                                <input id="password_login" class="mb-0" type="password" placeholder="Password">
                            </div>
                            <div class="col-md-8">

                                <div class="check-box d-inline-block ml-0 ml-md-2 mt-10">
                                    <input type="checkbox" id="remember_me">
                                    <label for="remember_me">Remember me</label>
                                </div>

                            </div>

                            <div class="col-md-4 mt-10 mb-20 text-left text-md-right">
                                <a href="#"> Forgotten pasward?</a>
                            </div>

                            <div class="col-md-12">
                                <button onclick="user_login();" class="register-button mt-0">Login</button>

                            </div>

                        </div>
                    </div>

            </div>
            <div class="col-sm-12 col-md-12 col-xs-12 col-lg-6">
                    <div class="login-form">
                        <h4 class="login-title">Register</h4>

                        <div class="row">
                            <div class="col-md-6 col-12 mb-20">
                                <label>First Name</label>
                                <input name="first_name" id="first_name" class="mb-0" type="text" placeholder="First Name">
                            </div>
                            <div class="col-md-6 col-12 mb-20">
                                <label>Last Name</label>
                                <input name="last_name" id="last_name" class="mb-0" type="text" placeholder="Last Name">
                            </div>
                            <div class="col-md-12 mb-20">
                                <label>Email Address*</label>
                                <input name="email" id="email" class="mb-0" type="email" placeholder="Email Address">
                            </div>
                            <div class="col-md-6 mb-20">
                                <label>Password</label>
                                <input name="password" id="password" class="mb-0" type="password" placeholder="Password">
                            </div>
                            <div class="col-md-6 mb-20">
                                <label>Confirm Password</label>
                                <input id="confirm_password" name="password_confirm" class="mb-0" type="password" placeholder="Confirm Password">
                            </div>
                            <div class="col-md-12 my-4">
                                <div class="single-method">
                                    <input name="terms" type="checkbox" id="accept_terms">
                                    <label for="accept_terms">I’ve read and accept the terms &
                                        conditions</label>
                                </div>
                            </div>

                            <div class="col-12">
                                <button onclick="user_register()" class="register-button mt-0">Register</button>
                            </div>
                        </div>
                    </div>
            </div>
        </div>
    </div>
</div>
@endif
	<!-- scroll to top  -->
	<a href="#" class="scroll-top"></a>
	<!-- end of scroll to top -->

