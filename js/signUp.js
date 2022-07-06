(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

$(document).ready(function () {

    var signUpImgSlider = new Swiper(".js-signUp-slider", {
        slidesPerView: 1,
        spaceBetween: 0,
        speed: 1000,
        loop: true,
        autoplay: {
            delay: 5000,
            speed: 1000,
            disableOnInteraction: false
        },

        pagination: {
            el: ".swiper-custom-paginations",
            clickable: true
        }
    });

    $(".password-eye").click(function () {
        $(this).toggleClass("remove-line");
        var type = $(this).prev("input").attr("type");
        if (type == "text") {
            $(this).prev("input").attr("type", "password");
        } else {
            $(this).prev("input").attr("type", "text");
        }
    });

    $(".js-navigate").click(function (e) {
        e.preventDefault();
        $(".signUp__form").removeClass("active");
        $("#" + $(this).attr("data-id")).addClass("active");
    });
});

},{}]},{},[1])//# sourceMappingURL=signUp.js.map
