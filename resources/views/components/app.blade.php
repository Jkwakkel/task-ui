<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>Taskmanager</title>

    @vite(['resources/css/app.css', 'resources/js/app.js'])
</head>
<body id="app" class="flex flex-col justify-center items-center h-screen w-150 mx-auto">
<x-header></x-header>
<main class="w-full">
    {{ $slot ?? '' }}
</main>
<x-footer></x-footer>
</body>
</html>

