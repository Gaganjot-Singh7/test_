<?php


use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Test;
// use App\Http\Controllers\Controller;


Route::get('/', function () {
    return view('welcome');
});

route::view("/home","home");

// route::redirect('/',"/home");
Route::get("about",[Test::class,"About"]);
route::post("formdata",Test::class,"fromData");
