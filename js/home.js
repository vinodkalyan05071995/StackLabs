(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

$(document).ready(function () {

    var customer = new Swiper(".js-portfolio-contentSlider", {
        slidesPerView: "auto",

        spaceBetween: 24,
        speed: 1000,
        // effect: 'fade',
        // loop: true,
        // autoplay: {
        //     delay: 5000,
        //     speed: 1000,
        //     disableOnInteraction: false
        // },
        pagination: {
            el: ".swiper-pagination",
            clickable: true
            // dynamicBullets: true,
        }
    });

    var customerContent = new Swiper(".js-portfolio-imgSlider", {
        slidesPerView: 1,
        centeredSlides: true,
        spaceBetween: 24,
        speed: 1000,
        effect: 'fade',

        // autoplay:true,
        // loop:true,
        breakpoints: {
            // when window width is >= 320px
            320: {
                //   slidesPerView: 2,
                //   spaceBetween: 20
                autoHeight: true
            },
            // when window width is >= 480px
            480: {

                //   slidesPerView: 3,
                //   spaceBetween: 30
            },
            // when window width is >= 640px
            992: {
                //   slidesPerView: 4,
                //   spaceBetween: 40
                autoHeight: false
            }
        }

    });

    customerContent.controller.control = customer;
    customer.controller.control = customerContent;

    var experiance = new Swiper(".js-experiance-experiance", {
        slidesPerView: 1,

        spaceBetween: 24,
        speed: 1000
        // loop: true,
        // autoplay: {
        //     delay: 2000,
        //     speed: 1000,
        //     disableOnInteraction: false
        // },
    });

    var rep = new Swiper(".js-rep-Slider", {
        slidesPerView: 1,
        loop: false,
        spaceBetween: 24,
        speed: 1000,
        navigation: {
            nextEl: ".js-arrow-right.slider-arrow",
            prevEl: ".js-arrow-left.slider-arrow  "
        },
        on: {
            init: function init() {
                $(".slider-count .current").text(this.activeIndex + 1);
                $(".total").text($(".js-rep-Slider").find(".swiper-slide").length);
            }
        }
    });

    rep.on('slideChange', function () {
        $(".slider-count .current").text(this.activeIndex + 1);
    });

    //scroll to next section
    $('.Nk-scroll').click(function () {
        $('html, body').animate({
            scrollTop: $(".Nk-engage").offset().top
        }, 1000);
    });
});

// AOS.init();


// import "./components/swiper";
// import './components/youtubeModalInteractions';

// naskLoader - not required
// window.onload = function () {
//   document.querySelector(".naskLoader").style.display = "none";
//   eleHeader = document.getElementById(idOfHeader);
//   document.addEventListener("scroll", onScroll, false);
// };

// import homeAnimation from "../js/gsap/home-interactions";
// const homeAnimations = new homeAnimation();

// body loaded
window.addEventListener("load", function () {
    document.querySelector("body").classList.add("loaded");
});

$(document).ready(function () {

    var t1 = gsap.timeline({
        defaults: {
            duration: 2.0,
            ease: "power3.out"
        }
    }).fromTo(".js-banner-svg", { autoAlpha: 0 }, { autoAlpha: 1 }).fromTo(".gsap-up", { y: 100 }, { y: 0 }, "<")

    //    .from(background, {backgroundPosition:"60% 0%", filter:"brightness(0.1)", duration:1})
    .fromTo(".gsap-left2right", { x: -100 }, { x: 0, stagger: 0.1 }, "<").fromTo(".gsap-fade", { autoAlpha: 0 }, { autoAlpha: 1 }, "<").to(".home-line", { scaleX: 1 }, "<").from(".navbar-brand", { x: -30 }, "<").from(".stax-hamberg", { x: 30 }, "<").from(".menu__footer__social", { x: -30 }, "<").from(".Nk-scroll", { x: 30 }, "<").to(".home-line", { autoAlpha: 0 });

    //our story

    var t2 = gsap.timeline({
        defaults: {
            duration: 2.0,
            ease: "power3.out"
        }
    }).fromTo(".gsap-left2right", { x: -40, autoAlpha: 0 }, { autoAlpha: 1, x: 0, stagger: 0.4 }).fromTo(".gsap-fade", { autoAlpha: 0 }, { autoAlpha: 1 }, "<");
    t2.pause();

    // const childSplit = new SplitText(".gsap-text-reveal", {
    //     type: "lines",
    //     linesClass: "split-child"
    // });


    var t3 = gsap.timeline({
        defaults: {
            duration: 2.0,
            ease: "power3.out"
        }
    }).fromTo(".gsap-left2right-approch_logo", { autoAlpha: 0, x: -50 }, { autoAlpha: 1, x: 0 }).fromTo(".gsap-left2right-approch", { autoAlpha: 0, x: -40 }, { autoAlpha: 1, x: 0, stagger: 0.2 }, "<").from(".gsap-text-reveal", { y: -100, autoAlpha: 0 }, "<");
    // .from(childSplit.lines, {
    //     duration: 2,
    //     yPercent: -100,

    //     stagger: 0.1
    // }, "<");

    t3.pause();

    var t4 = gsap.timeline({
        defaults: {
            duration: 2.0,
            ease: "power3.out"
        }
    }).fromTo(".gsap-top2bottom", { autoAlpha: 0, y: -30 }, { autoAlpha: 1, y: 0, stagger: 0.1 }, 0).fromTo(".gsap-fade", { autoAlpha: 0 }, { autoAlpha: 1 });
    var t5 = gsap.timeline({
        defaults: {
            duration: 2.0,
            ease: "power3.out"
        }
    }).fromTo(".gsap-portfolio-left", { x: -50 }, { x: 0, stagger: 0.1 }).fromTo(".gsap-portfolio-img", { scale: .7 }, { scale: 1 }, "<");
    t5.pause();
    var t6 = gsap.timeline({
        defaults: {
            duration: 2.0,
            ease: "power3.out"
        }
    }).fromTo(".gsap-portfolio-top-bottom", { y: -50 }, { y: 0, stagger: 0.5 }).from(".Design__topRight", { x: 40 }, "<").from(".patches__left", { x: -40 }, "<").from(".top-to-bottom", { y: 50, stagger: 0.5 }, "<");
    t6.pause();

    // const headSplit = new SplitText(".gsap-platform-text-reveal", {
    //     type: "lines",
    //     linesClass: "split-child"
    // });

    var t7 = gsap.timeline({
        defaults: {
            duration: 2.0,
            ease: "power3.out"
        }
    }).from(".gsap-platform-text-reveal", { y: -100, autoAlpha: 0 }, "<")

    // .from(headSplit.lines, {
    //     // duration: 3,
    //     yPercent: -100,
    //     stagger: 0.1
    // })
    .fromTo(".gsap-left-right", { x: -50 }, { x: 0, stagger: 0.1 }, "<").fromTo(".gsap-hide", { autoAlpha: 0 }, { autoAlpha: 1 }, "<").to(".home-line-plateform", { scaleX: 1 }, "<").from(".gsap-fade-up", { y: 50 }, "<").to(".home-line-plateform", { autoAlpha: 0 });

    t7.pause();

    var t8 = gsap.timeline({
        defaults: {
            duration: 2.0,
            ease: "power3.out"
        }
    }).fromTo(".gsap-left", { x: -50 }, { x: 0, stagger: 0.1 }).fromTo(".gsap-right-left", { x: 50 }, { x: 0, stagger: 0.1 }, "<").fromTo(".gsap-hide", { autoAlpha: 0 }, { autoAlpha: 1 }, "<").from(".representative__patch", { width: 0, duration: 2 }, "<").from(".representative__slider__text p", { y: 30 }, "<");

    // const footerSplit = new SplitText(".gsap-footer-text-reveal", {
    //     type: "lines",
    //     linesClass: "split-child"
    // });

    var t9 = gsap.timeline({
        defaults: {
            duration: 2.0,
            ease: "power3.out"
        }
    }).from(".gsap-footer-text-reveal", { y: -100, autoAlpha: 0 }, "<");

    // .from(footerSplit.lines, {
    //     duration: 3,
    //     yPercent: -100,
    //     stagger: 0.1
    // })
    t9.pause();

    $('#fullpage').fullpage({
        sectionSelector: '.full-page',
        anchors: ['section1', 'section2', 'section3', 'section4', 'section5', 'section6', 'section7', 'section8', 'section9'],

        afterLoad: function afterLoad(anchorLink, index, direction) {

            if (index == 1) {

                t1.play();
            }
        },

        onLeave: function onLeave(anchorLink, index, direction) {
            if (direction == "down") {
                $(".nk-mainheader").addClass("header-unpin");
                $(".nk-mainheader").removeClass("header-pin");
            }
            if (direction == "up") {
                $(".nk-mainheader").addClass("header-pin");
                $(".nk-mainheader").removeClass("header-unpin");
            }

            if (index == 2) {

                t2.restart();
            }
            if (index == 3) {

                t3.restart();
            }
            if (index == 4) {

                t4.restart();
            }
            if (index == 5) {

                t5.restart();
            }
            if (index == 6) {

                t6.restart();
            }
            if (index == 7) {

                t7.restart();
            }
            if (index == 8) {

                t8.restart();
            }
            if (index == 9) {

                t9.restart();
            }
        }
    });
});

},{}]},{},[1])//# sourceMappingURL=home.js.map
