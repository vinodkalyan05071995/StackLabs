(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

$(document).ready(function () {

    //gsap


    console.clear();

    var banners = document.querySelectorAll(".js-gsap-banner");
    var tl = gsap.timeline({
        defaults: {
            duration: 2.0,
            ease: "power3.out"
        }
    }).fromTo(".js-banner-svg", { opacity: 0 }, { opacity: 1 }).fromTo(".gsap-up", { y: 100 }, { y: 0 }, "<")

    //    .from(background, {backgroundPosition:"60% 0%", filter:"brightness(0.1)", duration:1})
    .fromTo(".gsap-left2right", { x: -100 }, { x: 0, stagger: 0.1 }, "<").fromTo(".gsap-fade", { opacity: 0 }, { opacity: 1 }, "<").to(".home-line", { scaleX: 1 }, "<").from(".navbar-brand", { x: -30 }, "<").from(".stax-hamberg", { x: 30 }, "<").from(".menu__footer__social", { x: -30 }, "<").from(".Nk-scroll", { x: 30 }, "<");
    ScrollTrigger.create({
        trigger: banners,
        start: "100px 90%",
        // toggleActions:"play none none reverse",
        animation: tl
        // markers: true
    });

    //ourstory


    var ourStry = document.querySelectorAll(".js-gsap-ourstry");
    var t2 = gsap.timeline({
        defaults: {
            duration: 2.0,
            ease: "power3.out"
        }
    }).fromTo(".gsap-left2right", { x: -30 }, { x: 0, stagger: 0.1 }).fromTo(".gsap-fade", { opacity: 0 }, { opacity: 1 }, "<");

    ScrollTrigger.create({
        trigger: ourStry,
        start: "top 70%",
        // toggleActions:"play none none reverse",
        animation: t2
        // markers: true
    });

    // approch
    var approch = document.querySelectorAll(".js-gsap-approch");
    var childSplit = new SplitText(".gsap-text-reveal", {
        type: "lines",
        linesClass: "split-child"
    });

    var t3 = gsap.timeline({
        defaults: {
            duration: 2.0,
            ease: "power3.out"
        }
    }).fromTo(".gsap-left2right-approch", { x: -30, opacity: 0 }, { x: 0, opacity: 1, stagger: 0.2 }).from(childSplit.lines, {
        duration: 2,
        yPercent: -100,

        stagger: 0.1
    }, "<");

    ScrollTrigger.create({
        trigger: approch,
        start: "20% 70%",
        // toggleActions:"play none none reverse",
        animation: t3
        // markers: true
    });

    //ourfocus


    var ourfocus = document.querySelectorAll(".js-gsap-ourFocus");
    var t4 = gsap.timeline({
        defaults: {
            duration: 2.0,
            ease: "power3.out"
        }
    }).fromTo(".gsap-top2bottom", { opacity: 0, y: -30 }, { opacity: 1, y: 0, stagger: 0.1 }, 0).fromTo(".gsap-fade", { opacity: 0 }, { opacity: 1 });

    ScrollTrigger.create({
        trigger: ourfocus,
        start: "20% 70%",
        // toggleActions:"play none none reverse",
        animation: t4
        // markers: true
    });

    //Portfolio


    var portfolio = document.querySelectorAll(".gsap-portfolio");
    var t5 = gsap.timeline({
        defaults: {
            duration: 2.0,
            ease: "power3.out"
        }
    }).fromTo(".gsap-portfolio-left", { x: -30 }, { x: 0, stagger: 0.1 }).fromTo(".gsap-portfolio-img", { scale: .9 }, { scale: 1 }, "<");
    ScrollTrigger.create({
        trigger: portfolio,
        start: "20% 70%",
        animation: t5
        // markers: true
    });

    var desgin = document.querySelectorAll(".gsap-design");
    var t6 = gsap.timeline({
        defaults: {
            duration: 2.0,
            ease: "power3.out"
        }
    }).fromTo(".gsap-portfolio-top-bottom", { y: -30 }, { y: 0, stagger: 0.3 }).from(".Design__topRight", { x: 30 }, "<").from(".patches__left", { x: -30 }, "<").from(".top-to-bottom", { y: 30, stagger: 0.1 }, "<");

    ScrollTrigger.create({
        trigger: desgin,
        start: "20% 70%",
        animation: t6
        // autoAlpha:true
        // markers: true
    });

    //plate
    var plateform = document.querySelectorAll(".gsap-plateform");
    var headSplit = new SplitText(".gsap-platform-text-reveal", {
        type: "lines",
        linesClass: "split-child"
    });

    var t7 = gsap.timeline({
        defaults: {
            duration: 2.0,
            ease: "power3.out"
        }
    }).from(headSplit.lines, {
        // duration: 3,
        yPercent: -100,
        stagger: 0.1
    }).fromTo(".gsap-left-right", { x: -50 }, { x: 0, stagger: 0.1 }, "<").fromTo(".gsap-hide", { opacity: 0 }, { opacity: 1 }, "<").to(".home-line-plateform", { scaleX: 1 }, "<").from(".gsap-fade-up", { y: 50 }, "<");

    ScrollTrigger.create({
        trigger: plateform,
        start: "20% 70%",
        animation: t7
        // markers: true
    });

    //plate
    var blog = document.querySelectorAll(".gsap-blogs");

    var t8 = gsap.timeline({
        defaults: {
            duration: 2.0,
            ease: "power3.out"
        }
    }).fromTo(".gsap-left", { x: -50 }, { x: 0, stagger: 0.1 }).fromTo(".gsap-right-left", { x: 50 }, { x: 0, stagger: 0.1 }, "<").fromTo(".gsap-hide", { opacity: 0 }, { opacity: 1 }, "<").from(".representative__patch", { width: 0, duration: 2 }, "<").from(".representative__slider__text p", { y: 30 }, "<");
    ScrollTrigger.create({
        trigger: blog,
        start: "20% 70%",
        animation: t8
        // markers:true

    });

    //footer
    var footer = document.querySelectorAll(".gsap-footer");
    var footerSplit = new SplitText(".gsap-footer-text-reveal", {
        type: "lines",
        linesClass: "split-child"
    });

    var t9 = gsap.timeline({
        defaults: {
            duration: 2.0,
            ease: "power3.out"
        }
    }).from(footerSplit.lines, {
        duration: 3,
        yPercent: -100,
        stagger: 0.1
    });

    ScrollTrigger.create({
        trigger: footer,
        start: "20% 70%",
        animation: t9
        // markers: true
    });
});

},{}]},{},[1])//# sourceMappingURL=gsap-init.js.map
