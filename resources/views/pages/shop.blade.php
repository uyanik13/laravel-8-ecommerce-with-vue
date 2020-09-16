


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
							<li class="active">Shop</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	</div>

	<!--=====  End of breadcrumb area  ======-->


	<!--=============================================
	=            Shop page container         =
	=============================================-->

	<div class="shop-page-container mb-50">
		<div class="container">
			<div class="row">
				<div class="col-lg-12 mb-sm-35 mb-xs-35">

					<!--=======  shop page banner  =======-->

					<div class="shop-page-banner mb-35">
						<a href="shop-left-sidebar.html">
							<img src="{{asset('assets/images/banners/shop-banner.jpg')}}" class="img-fluid" alt="">
						</a>
					</div>

					<!--=======  End of shop page banner  =======-->

					<!--=======  Shop header  =======-->

					<div class="shop-header mb-35">
						<div class="row">
							<div class="col-lg-4 col-md-4 col-sm-12 d-flex align-items-center">
								<!--=======  view mode  =======-->

								<div class="view-mode-icons mb-xs-10">
									<a class="active" href="#" data-target="grid"><i class="fa fa-th"></i></a>
									<a href="#" data-target="list"><i class="fa fa-list"></i></a>
								</div>

								<!--=======  End of view mode  =======-->

							</div>
							<div
								class="col-lg-8 col-md-8 col-sm-12 d-flex flex-column flex-sm-row justify-content-between align-items-left align-items-sm-center " >
								<!--=======  Sort by dropdown  =======-->

								<div class="sort-by-dropdown d-flex align-items-center mb-xs-10 full-width" >
                                        @csrf
                                        <select style="width: 200px" id="filter_product_name" name="filter_product_name" onchange="if (this.selectedIndex) sortByKey(this.selected);"  class="short-option-field form-control align-items-center">
                                            <option value >Sort Products</option>
                                            <option value="popularity">Popularity</option>
                                            <option value="avarege">Avarege Rating</option>
                                            <option value="newest">Newest</option>
                                            <option value="low_to_high">Low to High</option>
                                            <option value="high_to_low">High to Low</option>
                                        </select>
								</div>

								<!--=======  End of Sort by dropdown  =======-->

								<p class="result-show-message">Showing 1–12 of {{count($all_products)}} results</p>
							</div>
						</div>
					</div>

					<!--=======  End of Shop header  =======-->

					<!--=======  Grid list view  =======-->
                    <div id="filter_drop">
                        @include('pages.partials.product_list')
                    </div>
				</div>
			</div>
		</div>
	</div>

	<a href="#" class="scroll-top"></a>
