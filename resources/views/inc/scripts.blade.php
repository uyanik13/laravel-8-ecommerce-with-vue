<script src="{{asset('assets/js/vendor/jquery.min.js')}}"></script>

<!-- Popper JS -->
<script src="{{asset('assets/js/popper.min.js')}}"></script>

<!-- Bootstrap JS -->
<script src="{{asset('assets/js/bootstrap.min.js')}}"></script>

<!-- Plugins JS -->
<script src="{{asset('assets/js/plugins.js')}}"></script>

<!-- Main JS -->
<script src="{{asset('assets/js/main.js')}}"></script>

@include('sweetalert::alert')

@stack('inline-scripts')
</html>
