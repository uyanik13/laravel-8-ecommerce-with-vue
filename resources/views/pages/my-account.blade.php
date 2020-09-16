@isset($user->bill_address)
@php
$address = json_decode($user->bill_address,true);
@endphp
@endisset

@isset($user)
@php
$orders = Helper::findOrders($user->id);
@endphp
@endisset


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
							<li class="active">My Account</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	</div>

	<!--=====  End of breadcrumb area  ======-->

	<!--=============================================
	=            My account page section         =
	=============================================-->


    @if ($user)
    <div class="my-account-section section position-relative mb-50 fix">
		<div class="container">
			<div class="row">
				<div class="col-12">

					<div class="row">

						<!-- My Account Tab Menu Start -->
						<div class="col-lg-3 col-12">
							<div class="myaccount-tab-menu nav" role="tablist">
								<a href="#dashboad" class="active" data-toggle="tab"><i class="fa fa-dashboard"></i>
									Dashboard</a>
                               <a href="#orders" data-toggle="tab"><i class="fa fa-cart-arrow-down"></i> Orders</a>

                               <a href="#returns" data-toggle="tab"><i class="fa fa-undo"></i> Returns</a>

								<a href="#address-edit" data-toggle="tab"><i class="fa fa-map-marker"></i> address</a>

                                <a href="#account-info" data-toggle="tab"><i class="fa fa-user"></i> Account Details</a>

                              {{-- <form class="quform" id="logoutForm" action="{{route('logout')}}" method="post">
                                @csrf
                                <a href="#" onclick="document.getElementById('logoutForm').submit(); return false;" ><i class="fa fa-sign-out"></i> Logout</a>
                                </form> --}}
                                <a onclick="logout();" ><i class="fa fa-sign-out"></i> Logout</a>

							</div>
	</div>
						<!-- My Account Tab Menu End -->

						<!-- My Account Tab Content Start -->
						<div class="col-lg-9 col-12">
							<div class="tab-content" id="myaccountContent">
								<!-- Single Tab Content Start -->
								<div class="tab-pane fade show active" id="dashboad" role="tabpanel">
									<div class="myaccount-content">
										<h3>Dashboard</h3>

										<div class="welcome">
                                        <p>Hello, <strong>{{$user->name}}</strong>

										</div>

										<p class="mb-0">From your account dashboard. you can easily check &amp; view
											your
											recent orders, manage your shipping and billing addresses and edit your
											password and account details.</p>
									</div>
								</div>
								<!-- Single Tab Content End -->

                                <!-- Single Tab Content Start -->
                                <div class="tab-pane fade" id="orders" role="tabpanel">
									<div class="myaccount-content">
										<h3>Orders</h3>

										<div class="myaccount-table table-responsive text-center">
											<table class="table table-bordered">
												<thead class="thead-light">
													<tr>
														<th>No</th>
														<th>Order Number</th>
														<th>Date</th>
														<th>Order Status</th>
														<th>Status</th>
														<th>Total</th>
														<th>Action</th>
													</tr>
												</thead>

												<tbody>

                                                    @foreach ($orders as $order)
                                                    <tr>
                                                        <td>{{$order->id}}</td>
                                                        <td>{{$order->order_id}}</td>
                                                        <td>{{$order->created_at}}</td>
                                                        <td>{{ __("lang.".$order->order_status) }}</td>
                                                        <td>{{$order->status}}</td>
                                                        <td>{{  $setting['currency']->value }} {{$order->price}}</td>
                                                            <td>
                                                                    @php
                                                                        $days = Helper::diffForHumans($order->created_at);

                                                                    @endphp
                                                                    @if ($days <= 15)
                                                                    <a href="#" class="btn"><i class="fa fa-undo"></i>Return</a>
                                                                    @endif

                                                                <a href="#" class="btn"><i class="fa fa-eye"></i>View</a>
                                                            </td>
                                                        </tr>
                                                    @endforeach


												</tbody>
											</table>
										</div>
									</div>
                                </div>

                                <div class="tab-pane fade" id="returns" role="tabpanel">
									<div class="myaccount-content">
										<h3>Returns</h3>

										<div class="myaccount-table table-responsive text-center">
											<table class="table table-bordered">
												<thead class="thead-light">
													<tr>
														<th>No</th>
														<th>Order Number</th>
														<th>Date</th>
														<th>Status</th>
														<th>Total</th>

													</tr>
												</thead>

												<tbody>

                                                    @foreach ($orders as $order)
                                                   @if ($order->status === 'returned')
                                                   <tr>
                                                    <td>{{$order->id}}</td>
                                                    <td>{{$order->order_id}}</td>
                                                    <td>{{$order->created_at}}</td>
                                                    <td>{{$order->status}}</td>
                                                    <td>{{$order->post->currency}} {{$order->price}}</td>
                                                    </tr>
                                                   @endif
                                                    @endforeach


												</tbody>
											</table>
										</div>
									</div>
								</div>
								<!-- Single Tab Content End -->

								<!-- Single Tab Content Start -->
								<div class="tab-pane fade" id="address-edit" role="tabpanel">
									<div class="myaccount-content">
										<h3>Billing Address</h3>

										<div class="account-details-form">
											<form action="{{route('address_create')}}" method="post">
                                                @csrf
												<div class="row">

													<div class="col-12 mb-30">
														<input id="adress-line-1" @isset($address['addressLine1']))value="{{$address['addressLine1']}}"@endisset name="addressLine1" placeholder="Adress Line 1"
															type="text">
													</div>

													<div class="col-12 mb-30">
														<input id="adress-line-2" @isset($address['addressLine1'])value="{{$address['addressLine1']}}"@endisset name="addressLine2" placeholder="Adress Line 2"
															type="text">
													</div>

													<div class="col-lg-6 col-12 mb-30">
														<input id="adress-country" @isset($address['country'])value="{{$address['country']}}"@endisset name="country" placeholder="Country" type="text">
													</div>

													<div class="col-lg-6 col-12 mb-30">
														<input id="adress-city" name="city" @isset($address['city'])value="{{$address['city']}}"@endisset  placeholder="city" type="text">
													</div>

													<div class="col-lg-6 col-12 mb-30">
														<input id="adress-state" name="state" @isset($address['state'])value="{{$address['state']}}"@endisset  placeholder="state" type="text">
													</div>

													<div class="col-lg-6 col-12 mb-30">
														<input id="adress-post-code" name="postCode" @isset($address['postCode'])value="{{$address['postCode']}}"@endisset  placeholder="Post Code"
															type="text">
													</div>
                                                    <div class="col-lg-6 col-12 mb-30">
														<input id="adress-phone" name="phone" @isset($address['phone'])value="{{$address['phone']}}"@endisset  placeholder="Phone Number"
															type="tel">
													</div>

													<div class="col-12">
														<button type="submit" class="save-change-btn btn-block w-100"><i
																class="fa fa-edit"></i> Save
															Informations</button>
													</div>

												</div>
											</form>
										</div>
									</div>
								</div>
								<!-- Single Tab Content End -->

								<!-- Single Tab Content Start -->

								<div class="tab-pane fade" id="account-info" role="tabpanel">
									<div class="myaccount-content">
										<h3>Account Details</h3>

										<div class="account-details-form">
											<form action="{{route('user_update')}}" method="post">
                                                @csrf
												<div class="row">
													<div class="col-lg-6 col-12 mb-30">
														<input id="first-name" name="name" value="{{$user->name}}" type="text">
													</div>

													<div class="col-12 mb-30">
														<input id="email" name="email" value="{{$user->email}}" type="email" >
													</div>

													<div class="col-12 mb-30">
														<h4>Password change</h4>
													</div>

													<div class="col-12 mb-30">
														<input id="current-pwd" required name="current_password" placeholder="Current Password"
															type="password">
													</div>
													<div class="col-lg-6 col-12 mb-30">
														<input id="new-pwd" name="new_password" placeholder="New Password" type="password">
													</div>

													<div class="col-lg-6 col-12 mb-30">
														<input id="confirm-pwd" name="confirm_password" placeholder="Confirm Password"
															type="password">
													</div>

													<div class="col-12">
														<button type="submit"  class="save-change-btn w-100">Save Changes</button>
													</div>

												</div>
											</form>
										</div>
									</div>
								</div>
								<!-- Single Tab Content End -->
							</div>
						</div>
						<!-- My Account Tab Content End -->
					</div>

				</div>
			</div>
		</div>
	</div>
	<a href="#" class="scroll-top"></a>
    @else
    <div class="my-account-section section position-relative mb-50 fix">
		<div class="container">
			<div class="row">
				<div class="col-12">


                    For Account Please <strong><a href="/login-register">Login</a></strong>


				</div>
			</div>
		</div>
	</div>

    @endif
