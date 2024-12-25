<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\View;

class Test extends Controller
{
    function mymessage(){
      return "hello";
    }


    function About(){
        if (View::exists("about")){
            $user=[1,2,3];
            $name="gagan";
            return view("about",["user"=>$user,"name"=>$name]);
        }
        else{
        return "values from the controller function";
        }
    }
}
