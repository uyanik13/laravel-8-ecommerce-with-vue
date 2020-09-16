
    <div class="breadcrumb-area mb-50">
        <div class="container">
            <div class="row">
                <div class="col">
                    <div class="breadcrumb-container">
                        <ul>
                            <li><a href="index.html"><i class="fa fa-home"></i> Home</a></li>
                            <li class="active">Blog & News</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!--=====  End of breadcrumb area  ======-->


    <!--=============================================
    =            Blog Page Container         =
    =============================================-->

    <div class="blog-page-container mb-50">
        <div class="container">
            <div class="row">

                <div class="col-lg-3 order-2">
                    <!--=======  sidebar area  =======-->

                    <div class="sidebar-area">

                        <!--=======  single sidebar  =======-->

                        <div class="sidebar mb-35">
                            <h3 class="sidebar-title">Search</h3>
                            <!--=======  search box  =======-->

                            <div class="sidebar-search-box">
                                <input id="search_input_post" onkeyup="live_post_search()" type="search" placeholder="Search posts...">
                                <ul id="search_result_post" style="display: none;width: 100%;padding: 0;margin: 0;border-radius: 5px;overflow-y: scroll" class="dropdown-menu ">

                                </ul>
                            </div>

                            <!--=======  End of search box  =======-->
                        </div>

                        <!--=======  End of single sidebar  =======-->

                        <!--=======  single sidebar  =======-->

                        <div class="sidebar mb-35">
                            <h3 class="sidebar-title">Recent Posts</h3>
                            <!--=======  block container  =======-->

                            <div class="block-container">

                                <!--=======  single block  =======-->
                                @foreach($recent_post_blog_page as $item)
                                    <div class="single-block d-flex">
                                        <div class="image">
                                            <a href="{{route('blog.show',$item->slug)}}">
                                                <img src="{{$item->thumbnail}}" class="img-fluid"
                                                     alt="">
                                            </a>
                                        </div>
                                        <div class="content">
                                            <p><a href="{{route('blog.show',$item->slug)}}">{{$item->title}}</a>
                                                <span>{{\Carbon\Carbon::createFromTimeStamp(strtotime($item->created_at))->diffForHumans()}}</span></p>
                                        </div>
                                    </div>
                                @endforeach
                            </div>

                            <!--=======  End of block container  =======-->
                        </div>

                        <!--=======  End of single sidebar  =======-->
                    </div>

                    <!--=======  End of sidebar area  =======-->
                </div>

                <div class="col-lg-9 order-1">
                    <!--=======  blog post container  =======-->

                    <div class="blog-post-container">

                        <div class="row">
                            @foreach($posts_for_blog_page as $item)
                                <div class="col-md-6">
                                <!--=======  single blog post  =======-->

                                <div class="single-blog-post mb-35">
                                    <div class="row">
                                        <div class="col-lg-12">
                                            <div class="single-blog-post-media mb-20">
                                                <div class="image">
                                                    <a href="{{route('blog.show',$item->slug)}}"><img
                                                            src="{{$item->thumbnail}}"
                                                            class="img-fluid" alt=""></a>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-lg-12">
                                            <div class="single-blog-post-content">
                                                <h3 class="post-title"> <a href="{{route('blog.show',$item->slug)}}"> {{$item->title}}</a></h3>
                                                <div class="post-meta">
                                                    <p><span><i class="fa fa-calendar"></i> Posted On: <a href="#">{{\Carbon\Carbon::createFromTimeStamp(strtotime($item->created_at))->diffForHumans()}}</a></span></p>
                                                </div>

                                                <p class="post-excerpt">
                                                    {{$item->excerpt}}
                                                </p>
                                                <a href="{{route('blog.show',$item->slug)}}" class="blog-readmore-btn w-100">Read
                                                    More</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <!--=======  End of single blog post  =======-->
                            </div>
                            @endforeach
                        </div>
                    </div>

                    <!--=======  End of blog post container  =======-->

                    <!--=======  Pagination container  =======-->

                    <div class="pagination-container mb-sm-35 mb-xs-35">
                        <div class="container">
                            <div class="row">
                                <div class="col-lg-12">
                                    <!--=======  pagination-content  =======-->
                                    <div class="pagination-content text-center">
                                        <div class="col-12 d-flex justify-content-center text-center"  style="">
                                            {{$posts_for_blog_page->links()}}
                                        </div>
                                    </div>

                                    <!--=======  End of pagination-content  =======-->
                                </div>
                            </div>
                        </div>
                    </div>

                    <!--=======  End of Pagination container  =======-->
                </div>
            </div>
        </div>
    </div>
    <a href="#" class="scroll-top"></a>
