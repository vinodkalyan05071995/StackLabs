(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

$(document).ready(function () {

    // const customer = new Swiper(".js-customer-slider", {
    //     slidesPerView: "auto",

    //     spaceBetween: 24,
    //     speed: 1000,
    //     loop: true,
    //     // autoplay: {
    //     //     delay: 5000,
    //     //     speed: 1000,
    //     //     disableOnInteraction: false
    //     // },
    //     navigation: {
    //         nextEl: ".swiper-next",
    //         prevEl: ".swiper-prev",
    //     },
    // });


    // const customerContent = new Swiper(".js-customer-content-slider ", {
    //     slidesPerView: "auto",

    //     spaceBetween: 24,
    //     speed: 1000,
    //     loop: true,
    //     // autoplay: {
    //     //     delay: 5000,
    //     //     speed: 1000,
    //     //     disableOnInteraction: false
    //     // },


    //     navigation: {
    //         nextEl: ".un-customer .js-arrow-left",
    //         prevEl: ".un-customer .js-arrow-right",
    //     },

    // });

    // customerContent.controller.control = customer;
    // customer.controller.control = customerContent;


    var experiance = void 0;

    experiance = new Swiper(".js-experiance-experiance", {
        slidesPerView: 1,

        spaceBetween: 24,
        speed: 1000,
        noSwiping: true,
        observer: true,
        observeParents: true,
        simulateTouch: false
        // loop: true,
        // autoplay: {
        //     delay: 2000,
        //     speed: 1000,
        //     disableOnInteraction: false
        // },
    });

    var tabIndex = 0;

    $(".js-acc-tab").click(function () {
        tabIndex = $(this).attr("tab-index");
    });

    $('.accordion-item li').click(function () {
        var itemIndex = $(this).attr("data-slide");

        experiance[tabIndex].slideTo(parseInt(itemIndex) - 1);
    });
});

window.addEventListener("load", function () {
    document.querySelector("body").classList.add("loaded");
});

},{}]},{},[1])//# sourceMappingURL=for-business.js.map
