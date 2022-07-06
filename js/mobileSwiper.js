(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

(function () {

    'use strict';

    // breakpoint where swiper will be destroyed
    // and switches to a dual-column layout

    var breakpoint = window.matchMedia('(min-width:991px)');

    // keep track of swiper instances to destroy later
    var mySwiper = void 0;
    var leader = void 0;

    //////////////////////////////////////////////////////////////////
    //////////////////////////////////////////////////////////////////
    //////////////////////////////////////////////////////////////////

    var breakpointChecker = function breakpointChecker() {

        // if larger viewport and multi-row layout needed
        if (breakpoint.matches === true) {

            // clean up old instances and inline styles when available
            if (mySwiper !== undefined) mySwiper.destroy(true, true);
            if (leader !== undefined) leader.destroy(true, true);

            // or/and do nothing
            return;

            // else if a small viewport and single column layout needed
        } else if (breakpoint.matches === false) {

            // fire small viewport version of swiper
            return enableSwiper();
        }
    };

    //////////////////////////////////////////////////////////////////
    //////////////////////////////////////////////////////////////////
    //////////////////////////////////////////////////////////////////

    var enableSwiper = function enableSwiper() {

        mySwiper = new Swiper('.js-only-mobile', {
            // loop: true,
            // autoHeight: true,
            slidesPerView: 1.8,
            grabCursor: true,
            spaceBetween: 8

            // pagination
            // pagination: '.swiper-pagination',
            // paginationClickable: true,

        });
        // leader = new Swiper('.js-leader-mobile', {
        //     // loop: true,
        //     // autoHeight: true,
        //     slidesPerView: 1,
        //     grabCursor: true,
        //     spaceBetween:15,

        //     navigation: {
        //         nextEl: ".js-arrow-left",
        //         prevEl: ".js-arrow-right ",
        //       },

        // });

        // $(".js-leader-mobile .js-cuurent-slide").text(leader.realIndex + 1);

        // $(".js-leader-mobile .js-total-slides").text(($(".js-leader-mobile .swiper-slide").length))
        // leader.on('slideChange', function () {
        //     $(".js-leader-mobile .js-cuurent-slide").text(leader.realIndex + 1);
        // });

    };

    //////////////////////////////////////////////////////////////////
    //////////////////////////////////////////////////////////////////
    //////////////////////////////////////////////////////////////////

    // keep an eye on viewport size changes
    breakpoint.addListener(breakpointChecker);

    // kickstart
    breakpointChecker();
})(); /* IIFE end */

$(document).ready(function () {

    var leader = new Swiper('.js-leader-mobile', {
        // loop: true,
        // autoHeight: true,
        slidesPerView: 1,
        grabCursor: true,
        spaceBetween: 15,

        navigation: {
            nextEl: ".js-arrow-left",
            prevEl: ".js-arrow-right "
        },
        breakpoints: {
            640: {
                slidesPerView: 2,
                spaceBetween: 15

            },
            768: {
                slidesPerView: 2.5,
                navigation: {
                    nextEl: ".js-arrow-left-desk",
                    prevEl: ".js-arrow-right-desk "
                }

            },
            1024: {
                slidesPerView: 4

            }
        }

    });

    $(".leader .js-cuurent-slide").text(leader.realIndex + 1);

    $(".leader .js-total-slides").text($(".leader .swiper-slide").length);
    leader.on('slideChange', function () {
        $(".leader .js-cuurent-slide").text(leader.realIndex + 1);
    });
});

},{}]},{},[1])//# sourceMappingURL=mobileSwiper.js.map
