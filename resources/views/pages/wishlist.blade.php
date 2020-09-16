



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
							<li><a href="index.html"><i class="fa fa-home"></i> Home</a></li>
							<li class="active">Wishlist</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	</div>

	<!--=====  End of breadcrumb area  ======-->

	<!--=============================================
    =            Wishlist page content         =
    =============================================-->

	<div class="page-section section mb-50">
		<div class="container">
			<div class="row">
				<div class="col-12">
                    @guest()
                    <div class="alert-danger bg-danger p-5 text-center " >
                        <h3 class=" text-white">Log in first to see your wishlist</h3>
                    </div>
                    @endguest
                    @auth()
                       @include('components.detail_components.wishlist_products')
                    @endauth
				</div>
			</div>
		</div>
	</div>

	<!--=====  End of Cart page content  ======-->

	<!--=============================================
	=            Footer         =
	=============================================-->



	<!--=====  End of Footer  ======-->


	<!-- scroll to top  -->
	<a href="#" class="scroll-top"></a>
