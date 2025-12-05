<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Laravel\Fortify\Features;

Route::get('/', function () {
    return Inertia::render('home/index', [
        'canRegister' => Features::enabled(Features::registration()),
        'headerTopContent' => '<p class="text-primary-foreground text-center">Y Tế Minh Anh chúc quý khách một Giáng Sinh vui vẻ.</p>'
    ]);
})->name('home');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', fn() => Inertia::render('dashboard'))->name('dashboard');
});

require __DIR__.'/settings.php';
