(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

$(document).ready(function () {

    // campaign slider
    var campaignSlider = new Swiper('.js-campaign', {
        loop: false,
        speed: 1000,
        navigation: {
            nextEl: ".js-arrow-left",
            prevEl: ".js-arrow-right"
        },
        slidesPerView: 1,
        paginationClickable: true,
        spaceBetween: 20,
        // autoplay: {
        //     delay: 1500,
        // },
        breakpoints: {
            1920: {
                slidesPerView: 4,
                spaceBetween: 24
            },
            1028: {
                slidesPerView: 4,
                spaceBetween: 24
            },
            768: {
                slidesPerView: 2,
                spaceBetween: 10
            },
            480: {
                slidesPerView: 1,
                spaceBetween: 10
            }
        }
    });

    $(".leader .js-cuurent-slide").text(campaignSlider.realIndex + 1);

    $(".leader .js-total-slides").text(Math.floor($(".js-campaign .swiper-slide").length));
    campaignSlider.on('slideChange', function () {
        $(".leader .js-cuurent-slide").text(campaignSlider.realIndex + 1);
    });
});

},{}]},{},[1])//# sourceMappingURL=about-us.js.map
