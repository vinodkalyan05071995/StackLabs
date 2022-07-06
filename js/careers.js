(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

$(document).ready(function () {
    // Swiper: Slider
    new Swiper('.js-careers-gallery', {
        loop: true,
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        slidesPerView: 1,
        paginationClickable: true,
        spaceBetween: 20,
        speed: 1000,
        autoplay: {
            delay: 1500
        },
        breakpoints: {
            1920: {
                slidesPerView: 3,
                spaceBetween: 24
            },
            1028: {
                slidesPerView: 4.3,
                spaceBetween: 24
            },
            480: {
                slidesPerView: 1,
                spaceBetween: 10
            }
        }
    });

    // reverse slider

    new Swiper('.js-careers-gallery-reverse', {
        loop: true,
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        slidesPerView: 1,
        paginationClickable: true,
        spaceBetween: 20,
        speed: 1000,
        autoplay: {
            delay: 1500
        },
        breakpoints: {
            1920: {
                slidesPerView: 3,
                spaceBetween: 24
            },
            1028: {
                slidesPerView: 4.3,
                spaceBetween: 24
            },
            480: {
                slidesPerView: 1,
                spaceBetween: 10
            }
        }
    });

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
                slidesPerView: 3,
                spaceBetween: 24
            },
            1028: {
                slidesPerView: 3,
                spaceBetween: 24
            },
            768: {
                slidesPerView: 1.7,
                spaceBetween: 10
            },
            480: {
                slidesPerView: 1,
                spaceBetween: 10
            }
        }
    });

    $(".mr-careers-campaigns .js-cuurent-slide").text(campaignSlider.realIndex + 1);

    $(".mr-careers-campaigns .js-total-slides").text(Math.floor($(".js-campaign .swiper-slide").length));
    campaignSlider.on('slideChange', function () {
        $(".mr-careers-campaigns .js-cuurent-slide").text(campaignSlider.realIndex + 1);
    });
});

},{}]},{},[1])//# sourceMappingURL=careers.js.map
