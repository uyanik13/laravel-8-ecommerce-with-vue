
@include('inc/head')
@include('inc/header')


@switch($type)
    @case($type)
    @if($type === 'page')
        @include('components/page')
        @break
    @else
        @include('components/detail_components/'.$category)
        @break
    @endif



    @default
    @include('components/page')

@endswitch

@include('inc/footer')
@include('inc/scripts')
