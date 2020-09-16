


<div class="page-content ">

		<!--=============================================
		=            google map container         =
		=============================================-->

		<div class="google-map-container mb-120">
			<div id="google-map">
                @isset($setting['map_iframe']) {!! html_entity_decode($setting['map_iframe']->value) !!} @endisset
            </div>
		</div>

		<!--=====  End of google map container  ======-->

		<div class="container">
			<div class="row">
				<div class="col-lg-3 col-md-4 mb-xs-35">
					<!--=======  contact page side content  =======-->

					<div class="contact-page-side-content">
						<h3 class="contact-page-title">Contact Us</h3>

						<!--=======  single contact block  =======-->

						<div class="single-contact-block">
							<h4><img src="{{asset('assets/images/icons/contact-icon1.png')}}" alt=""> Address</h4>
							<p> @isset($setting['address']) {{ $setting['address']->value }} @endisset</p>
						</div>

						<!--=======  End of single contact block  =======-->

						<!--=======  single contact block  =======-->

						<div class="single-contact-block">
							<h4><img src="{{asset('/assets/images/icons/contact-icon2.png')}}" alt=""> Phone</h4>
							<p> <a href="tel:@isset($setting['phone']) {{ $setting['phone']->value }} @endisset">@isset($setting['phone']) {{ $setting['phone']->value }}</a> @endisset</p>
						</div>

						<!--=======  End of single contact block  =======-->

						<!--=======  single contact block  =======-->

						<div class="single-contact-block">
							<h4><img src="{{asset('/assets/images/icons/contact-icon3.png')}}" alt=""> Email</h4>
							<p> <a href="mailto:@isset($setting['email']) {{ $setting['email']->value }} @endisset">@isset($setting['email']) {{ $setting['email']->value }} @endisset</a></p>
						</div>

						<!--=======  End of single contact block  =======-->
					</div>

					<!--=======  End of contact page side content  =======-->

				</div>
				<div class="col-lg-9 col-md-8 pl-100 pl-xs-15">
					<!--=======  contact form content  =======-->

                    @if(session()->has('success'))
                    <div class="alert alert-success">
                      {{ session()->get('success') }}
                    </div>
                  @endif

					<div class="contact-form-content">
						<h3 class="contact-page-title">Tell Us Your Message</h3>

						<div class="contact-form">
							<form class="quform" action="{{route('contact.form')}}" method="post">
                          @csrf
								<div class="form-group">
									<label>Your Name <span class="required">*</span></label>
									<input type="text" name="name" id="customername" required>
								</div>
								<div class="form-group">
									<label>Your Email <span class="required">*</span></label>
									<input type="email" name="email" id="customerEmail" required>
								</div>
								<div class="form-group">
									<label>Subject</label>
									<input type="text" name="subject" id="contactSubject">
								</div>
								<div class="form-group">
									<label>Your Message</label>
									<textarea name="message" id="contactMessage"></textarea>
								</div>
								<div class="form-group">
									<button type="submit" value="submit" id="submit" class="contact-form-btn"
										name="submit">send</button>
								</div>
							</form>
						</div>
						<p class="form-messege pt-10 pb-10 mt-10 mb-10"></p>
					</div>

					<!--=======  End of contact form content =======-->
				</div>
			</div>
		</div>
	</div>

	<!--=====  End of Contact page content  ======-->


	<!--=============================================
	=            Footer         =
	=============================================-->



	<!--=====  End of Footer  ======-->


	<!-- scroll to top  -->
	<a href="#" class="scroll-top"></a>
	<!-- end of scroll to top -->



