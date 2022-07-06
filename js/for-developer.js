(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

$(document).ready(function () {
  var users = new Swiper(".js-users-slider", {
    slidesPerView: "auto",

    spaceBetween: 24,
    speed: 1000,
    loop: true,
    // autoplay: {
    //     delay: 5000,
    //     speed: 1000,
    //     disableOnInteraction: false
    // },
    navigation: {
      nextEl: ".swiper-next",
      prevEl: ".swiper-prev"
    }
  });

  var usersContent = new Swiper(".js-users-content-slider", {
    slidesPerView: "auto",

    spaceBetween: 24,
    speed: 1000,
    loop: true,
    // autoplay: {
    //     delay: 5000,
    //     speed: 1000,
    //     disableOnInteraction: false
    // },

    navigation: {
      nextEl: ".js-arrow-left",
      prevEl: ".js-arrow-right"
    }
  });

  usersContent.controller.control = users;
  users.controller.control = usersContent;

  $(".un-customer .js-cuurent-slide").text(usersContent.realIndex + 1);

  $(".un-customer .js-total-slides").text($(".js-users-slider .swiper-slide").length / 3);
  usersContent.on("slideChange", function () {
    $(".un-customer .js-cuurent-slide").text(usersContent.realIndex + 1);
  });
});

},{}]},{},[1])//# sourceMappingURL=for-developer.js.map
