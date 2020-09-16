
@if ($page)
@switch($page->slug)
    @case($page->slug)
        @if (\View::exists('pages/'.$page->slug))
        @include('pages/'.$page->slug)
        @else
        @include('pages/default')
        @endif
    @break
    @default
     @include('pages/default')
@endswitch
@else
@include('pages/404')
@endif

