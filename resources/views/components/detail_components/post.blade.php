<div class="greennature-page-title-wrapper header-style-5-title-wrapper">
  <div class="greennature-page-title-overlay"></div>
  <div class="greennature-page-title-container container">
    <h1 class="greennature-page-title">Haberler & Yenilikler</h1>
  </div>
</div>
<!-- is search -->
<div class="content-wrapper">
  <div class="greennature-content">

    <!-- Above Sidebar Section-->

    <!-- Sidebar With Content Section-->
    <div class="with-sidebar-wrapper">
      <div class="with-sidebar-container container">
        <div class="with-sidebar-left eight columns">
          <div class="with-sidebar-content twelve columns">
            <section id="content-section-1">
              <div class="section-container container">
                <div class="blog-item-wrapper">
                  <div class="blog-item-holder">
                    <div class="greennature-isotope" data-type="blog" data-layout="fitRows">
                      <div class="clear"></div>

                      <div class="twelve columns">
                        <div
                          class="greennature-item greennature-blog-grid greennature-skin-box">
                          <div class="greennature-ux greennature-blog-grid-ux">
                            <article id="post-852"
                                     class="post-852 post type-post status-publish format-standard has-post-thumbnail hentry category-fit-row tag-blog tag-life-style">
                              <div class="greennature-standard-style">
                                <div class="greennature-blog-thumbnail">
                                  <a href="javascript:void(0);">
                                    <img src="{{$post->image}}" alt="{{$post->title}}"
                                         width="400" height="300"/></a>
                                </div>

                                <div class="greennature-blog-grid-content">
                                  <header class="post-header">
                                    <h3 class="greennature-blog-title"><a
                                        href="javascript:void(0);">{{$post->title}}</a></h3>

                                    <div class="greennature-blog-info">
                                      <div
                                        class="blog-info blog-date greennature-skin-info">
                                        <i class="fa fa-clock-o"></i>
                                        <a href="javascript:void(0);">
                                          {{ Carbon\Carbon::parse($post->created_at)->format('d-m-Y h:m') }}
                                        </a>
                                      </div>
                                      <div class="clear"></div>
                                    </div>
                                    <div class="clear"></div>
                                  </header>
                                  <!-- entry-header -->

                                  <div class="greennature-blog-content">
                                    {!! html_entity_decode($post->content) !!}
                                    <div class="clear"></div>
                                  </div>
                                </div>
                              </div>
                            </article>
                            <!-- #post -->
                          </div>
                        </div>
                      </div>

                      <div class="clear"></div>
                    </div>
                  </div>
                </div>
                <div class="clear"></div>
              </div>
            </section>
          </div>

          <div class="clear"></div>
        </div>

        <div class="greennature-sidebar greennature-right-sidebar four columns">
          <div class="greennature-item-start-content sidebar-right-item">
            <div id="search-3" class="widget widget_search greennature-item greennature-widget">
              <div class="gdl-search-form">
                <form action="/search" method="POST" role="search">
                  {{ csrf_field() }}
                  <div class="search-text" id="search-text">
                    <input type="text" name="q" id="s" autocomplete="off"
                           data-default="Arama..."/>
                  </div>
                  <input type="submit" id="searchsubmit" value=""/>
                  <div class="clear"></div>
                </form>
              </div>
            </div>
            <div id="gdlr-recent-portfolio-widget-2"
                 class="widget widget_gdlr-recent-portfolio-widget greennature-item greennature-widget">
              <h3 class="greennature-widget-title">Popüler Gönderiler</h3>
              <div class="clear"></div>
              <div class="greennature-recent-port-widget">
                @foreach($postByCategory as $post)
                  <div class="recent-post-widget">
                    <div class="recent-post-widget-thumbnail">
                      <a href="/{{ $page->slug.'/'.$post->slug }}"><img src="{{ $post->image }}"
                                                                         alt="{{ $post->title }}"
                                                                         width="150" height="150"/></a>
                    </div>
                    <div class="recent-post-widget-content">
                      <div class="recent-post-widget-title"><a href="/{{ $page->slug.'/'.$post->slug }}"><img
                            src="{{ $post->image }}">{{ $post->title }}</a></div>
                      <div class="recent-post-widget-info">
                        <div class="blog-info blog-date greennature-skin-info"><i
                            class="fa fa-clock-o"></i><a href="/{{ $page->slug.'/'.$post->slug }}"><img
                              src="{{ $post->image }}">  {{ Carbon\Carbon::parse($post->created_at)->format('d-m-Y h:m') }}</a></div>
                        <div class="clear"></div>
                      </div>
                    </div>
                    <div class="clear"></div>
                  </div>
                @endforeach
                <div class="clear"></div>
              </div>
            </div>
          </div>
        </div>

        <div class="twelve columns">
          <div class="greennature-related-portfolio portfolio-item-holder" style="margin-top: 35px;;">
            <h4 class="head" style="text-align: center;">İlgili Haberler</h4>
            <div class="greennature-isotope" data-type="portfolio" data-layout="fitRows">
              <div class="clear"></div>
              @foreach($postByCategory as $post)
              <div class="three columns">
                <div
                  class="greennature-item greennature-portfolio-item greennature-classic-portfolio">
                  <div class="greennature-ux greennature-classic-portfolio-ux">
                    <div class="portfolio-thumbnail greennature-image">
                      <img src="{{ $post->image }}" alt="" width="700" height="400"/><span
                        class="portfolio-overlay">&nbsp;</span><a
                        class="portfolio-overlay-icon" href="/{{ $page->slug.'/'.$post->slug }}"
                        data-rel="fancybox" data-fancybox-type="iframe"><span
                          class="portfolio-icon"><i
                            class="fa fa-search"></i></span></a>
                    </div>
                    <div class="portfolio-classic-content">
                      <h3 class="portfolio-title"><a href="/{{ $page->slug.'/'.$post->slug }}">{{ $post->title }}</a></h3>
                      <div class="greennature-portfolio-info">
                        <div class="clear"></div>
                      </div>
                      <a class="portfolio-classic-learn-more"
                         href="/{{ $page->slug.'/'.$post->slug }}">Detaylar</a>
                    </div>
                  </div>
                </div>
              </div>
              @endforeach
            </div>
            <div class="clear"></div>
          </div>
        </div>
        <div class="clear"></div>
      </div>

    </div>

    <!-- Below Sidebar Section-->
    <section id="content-section-9">
      <div class="greennature-parallax-wrapper greennature-background-image gdlr-show-all greennature-skin-dark-skin"
           id="greennature-parallax-wrapper-3" data-bgspeed="0.15"
           style="background-image: url('upload/service-bg-2.jpg'); padding-top: 135px; padding-bottom: 80px; ">
        <div class="container">
          <div class="greennature-stunning-item-ux greennature-ux">
            <div class="greennature-item greennature-stunning-item greennature-stunning-center">
              <h2 class="stunning-item-title">Geniş ürün yelpazemiz ve sunduğumuz hizmetlerle
                ihtiyacınız olan tüm yetiştiricilik çözümleri için doğru adres;</h2>
              <div class="stunning-item-caption greennature-skin-content">
                <p>Ürün Katoloğumuza Aşağıdaki Butona Tıklayarak Ulaşabilirsiniz</p>
              </div>
              <a
                class="stunning-item-button greennature-button large greennature-lb-payment"
                href="#" style="background-color: #ecb338; color: #ffffff;">E-Katalog</a>
            </div>
          </div>
          <div class="clear"></div>
          <div class="clear"></div>
        </div>
      </div>
      <div class="clear"></div>
    </section>
  </div>
  <!-- greennature-content -->
  <div class="clear"></div>
</div>
