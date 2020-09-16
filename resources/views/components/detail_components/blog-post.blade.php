

    <!--=====  End of Header  ======-->


    <!--=============================================
    =            breadcrumb area         =
    =============================================-->
@php

$blog = \App\utils\Helpers\Helper::findBlog($itemId);

@endphp
    <div class="breadcrumb-area mb-50">
        <div class="container">
            <div class="row">
                <div class="col">
                    <div class="breadcrumb-container">
                        <ul>
                            <li><a href="/"><i class="fa fa-home"></i> Home</a></li>
                            <li><a href="/blog">Blog</a></li>
                            <li class="active">Blog Post</li>
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
                                @forelse($recent_post_blog_page as $item)
                                    <div class="single-block d-flex">
                                    <div class="image">
                                        <a href="{{$item->slug}}">
                                            <img src="{{$item->thumbnail}}" class="img-fluid"
                                                 alt="">
                                        </a>
                                    </div>
                                    <div class="content">
                                        <p><a href="{{$item->slug}}">{{$item->title}}</a>
                                            <span>{{\Carbon\Carbon::createFromTimeStamp(strtotime($blog->created_at))->diffForHumans()}}</span></p>
                                    </div>
                                </div>
                                @empty
                                @endforelse
                            </div>

                            <!--=======  End of block container  =======-->
                        </div>

                        <!--=======  End of single sidebar  =======-->
                    </div>

                    <!--=======  End of sidebar area  =======-->
                </div>

                <div class="col-lg-9 order-1 mb-sm-35 mb-xs-35">
                    <!--=======  blog post container  =======-->

                    <div class="blog-single-post-container mb-50">

                        <h3 class="post-title">{{$blog->title}}</h3>

                        <!--=======  End of post title  =======-->


                        <!--=======  Post meta  =======-->


                        <div class="post-meta">
                            <p><span><i class="fa fa-user-circle"></i> Posted By: </span> <a >Yemish</a> <span
                                    class="separator">/</span> <span><i class="fa fa-calendar"></i> Posted : <a
                                        href="#">{{\Carbon\Carbon::createFromTimeStamp(strtotime($blog->created_at))->diffForHumans()}}</a></span></p>
                        </div>

                        <!--=======  End of Post meta  =======-->

                        <!--=======  Post media  =======-->

                        <div class="single-blog-post-media mb-xs-20">
                            <div class="image text-center">
                                <img style="max-height: 600px;max-width: 600px" src="{{$blog->thumbnail}}" class="img-fluid" alt="">
                            </div>
                        </div>

                        <!--=======  End of Post media  =======-->

                        <!--=======  Post content  =======-->

                        <div class="post-content mb-40">
                           {!!  $blog->content !!}
                        </div>

                        <!--=======  End of Post content  =======-->

                        <!--=======  Tags area  =======-->



                        <!--=======  End of Tags area  =======-->


                        <!--=======  Share post area  =======-->

                        <div class="social-share-buttons mb-40">
                            <h3>share this product</h3>
                            <ul>
                                <li><a href="https://www.facebook.com/sharer/sharer.php?u={{$pageFullUrl}}"  target="_blank"><i class="fa fa-facebook-f"></i></a></li>
                                <li><a href="https://twitter.com/intent/tweet?text={{$pageFullUrl}}"  target="_blank"><i class="fa fa-twitter"></i></a></li>
                            </ul>
                        </div>

                        <!--=====  End of Share post area  ======-->

                        <!--=======  related post  =======-->

                        <div class="related-post-container">
                            <div class="row">
                                <div class="col-lg-12">
                                    <h3 class="related-post-title mb-30">RELATED POSTS</h3>
                                </div>
                            </div>
                            <div class="row">
                                @php
                                 $related_posts = \App\utils\Helpers\Helper::related_post($blog->id)
                                @endphp
                                @forelse($related_posts as $related_post)
                                    <div class="col-lg-4 col-md-4 mb-xs-20">
                                        <!--=======  single related post  =======-->

                                        <div class="single-related-post">
                                            <div class="image">
                                                <a href="{{$related_post->slug}}">
                                                    <img style="height: 200px;width: 200px" src="{{$related_post->thumbnail}}" class="img-fluid" alt="">
                                                </a>
                                            </div>
                                            <div class="content">
                                                <h3 class="related-post-title">
                                                    <a href="{{$related_post->slug}}">{{$related_post->title}}</a>
                                                    <span>{{\Carbon\Carbon::createFromTimeStamp(strtotime($related_post->created_at))->diffForHumans()}}</span>
                                                </h3>
                                            </div>
                                        </div>

                                        <!--=======  End of single related post  =======-->
                                    </div>
                                    @empty

                                    @endforelse
                            </div>
                        </div>

                        <!--=======  End of related post  =======-->

                    </div>

                    <!--=======  End of blog post container  =======-->


                </div>
            </div>
        </div>
    </div>

    <!-- scroll to top  -->
    <a href="#" class="scroll-top"></a>
