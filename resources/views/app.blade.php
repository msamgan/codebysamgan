<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title inertia>{{ config('app.name', 'Laravel') }}</title>

    <!-- Fonts -->
    <link rel="preconnect" href="https://fonts.bunny.net">
    <link href="https://fonts.bunny.net/css?family=figtree:400,500,600&display=swap" rel="stylesheet"/>

    <link rel="apple-touch-icon" sizes="180x180" href="{{ url('apple-touch-icon.png') }}">
    <link rel="icon" type="image/png" sizes="32x32" href="{{ url('favicon-32x32.png') }}">
    <link rel="icon" type="image/png" sizes="16x16" href="{{ url('favicon-16x16.png') }}">
    <link rel="manifest" href="{{ url('site.webmanifest') }}">

    <!-- Scripts -->
    @routes
    @viteReactRefresh
    @vite(['resources/js/app.jsx', "resources/js/Pages/{$page['component']}.jsx"])
    @inertiaHead


    <script type="text/javascript"
            src="https://platform-api.sharethis.com/js/sharethis.js#property=64e3a1db4265f4001221c93f&product=sticky-share-buttons&source=platform"
            async="async"></script>

    <script type='text/javascript'>
        window.smartlook || (function (d) {
            var o = smartlook = function () {
                o.api.push(arguments)
            }, h = d.getElementsByTagName('head')[0];
            var c = d.createElement('script');
            o.api = [];
            c.async = true;
            c.type = 'text/javascript';
            c.charset = 'utf-8';
            c.src = 'https://web-sdk.smartlook.com/recorder.js';
            h.appendChild(c);
        })(document);
        smartlook('init', '410e83c977d6125b1cbfe76dde34c9eae557b826', {region: 'eu'});
    </script>

</head>
<body class="font-sans antialiased">
@inertia

<div class="sharethis-sticky-share-buttons"></div>
</body>
</html>
