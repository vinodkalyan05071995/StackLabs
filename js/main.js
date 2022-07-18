(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

// LOAD MENU AFTER MENU ITEM IS FIXED
var invokeOnLoad = function invokeOnLoad() {
  var nav = document.querySelector(".navbar");
  nav.classList.add("loaded");

  window.addEventListener("scroll", function () {
    var wScroller = window.scrollY;
    console.log(wScroller);
    var navbarHeight = document.querySelector(".navbar").offsetHeight;
    if (wScroller > navbarHeight) {
      nav.classList.add("sticky");
    } else {
      nav.classList.remove("sticky");
    }
  });

  // Smoth scrol Header hide and show
  var lastKnownScrollY = 0;
  var currentScrollY = 0;
  var ticking = false;
  var idOfHeader = "header";
  var eleHeader = null;
  var classes = {
    pinned: "header-pin",
    unpinned: "header-unpin"
  };

  function onScroll() {
    currentScrollY = window.pageYOffset;
    requestTick();
  }

  function requestTick() {
    if (!ticking) {
      requestAnimationFrame(update);
    }
    ticking = true;
  }

  function update() {
    if (currentScrollY < lastKnownScrollY || currentScrollY < 0) {
      console.log("currentScrollY" + currentScrollY);
      console.log("lastKnownScrollY" + lastKnownScrollY);
      pin();
    } else if (currentScrollY > lastKnownScrollY) {
      unpin();
    }
    lastKnownScrollY = currentScrollY;
    ticking = false;
  }

  function pin() {
    if (eleHeader.classList.contains(classes.unpinned)) {
      eleHeader.classList.remove(classes.unpinned);
      eleHeader.classList.add(classes.pinned);
    }
  }

  function unpin() {
    if (eleHeader.classList.contains(classes.pinned) || !eleHeader.classList.contains(classes.unpinned)) {
      eleHeader.classList.remove(classes.pinned);
      eleHeader.classList.add(classes.unpinned);
    }
  }
  window.onload = function () {
    eleHeader = document.getElementById(idOfHeader);
    document.addEventListener("scroll", onScroll, false);
  };
};

invokeOnLoad();

(function () {
  var hamburger = {
    // navToggle: document.querySelector(".un-mobile-hamberg"),
    // nav: document.querySelector(".navbar-collapse"),
    // menuBox: document.getElementsByTagName("BODY")[0],
    // doToggle: function doToggle(e) {
    //   e.preventDefault();
    //   this.navToggle.classList.toggle("active");
    //   this.nav.classList.toggle("open-hamberg");
    //   this.menuBox.classList.toggle("body-fixed");
    //   // this.overlayDiv.classList.toggle("show");
    // },
  };

  // hamburger.navToggle.addEventListener("click", function (e) {
  //   hamburger.doToggle(e);
  // });
})();

// Dropdown
$("ul.nav li.dropdown").hover(function () {
  $(this).find(".dropdown-menu").stop(true, true).delay(200).fadeIn(500);
}, function () {
  $(this).find(".dropdown-menu").stop(true, true).delay(200).fadeOut(500);
});

// collapsble text
$("div.zw-list-block__item-iner-text").hover(function () {
  $(".panel-collapse", $(this).closest(".zw-list-block__item")).collapse("show");
}, function () {
  $(".panel-collapse", $(this).closest(".zw-list-block__item")).collapse("hide");
});

// download document
$(document).ready(function () {
  $(".ui.dropdown").dropdown();
  $(".ui.dropdown").dropdown({ on: "hover" });
});

// $(document).ready(function () {
//   $("#disclosure-link").click(function (e) {
//     e.preventDefault();
//     // window.location.href = "./assets/img/home/test-doc.pdf";
//     window.open("./file/Form_MGT_7 Zetwerk draft FY 2020-21.pdf", "_blank");
//     // var otherWindow = window.open();
//     // otherWindow.opener = null;
//   });
// });

$(document).ready(function () {
  $('select').niceSelect();

  //logo slider

  // HOME PAGE BANNER SLIDER

  // AOS.init({
  //     duration: 1200,
  //     once: true,
  // })
});

$(".ui.dropdown").dropdown();
$(".ui.dropdown").dropdown({ on: "hover" });

$(document).ready(function () {
  $(document).scroll(function () {
    // console.log($(".service-container").eq(1).scrollTop())
    var wS = $(this).scrollTop();
    $(".service-container").each(function () {
      var hT = $(this).offset().top;
      if (wS > hT - 100) {
        var eleId = $(this).attr("id");

        console.log(eleId);
        $(".js-lookfor").removeClass("active");

        console.log($('.js-lookfor[href="#' + eleId + '"]').addClass("active"));
      }
    });
  });
});

$('select').niceSelect();
// $('#form-contanct').parsley();
// AOS.init({
//   duration: 500,
//   once:true,
//   easing: 'ease-out',
// })

// $(document).ready(function () {

//   $("#fileInput").change(function () {

//     let fileName = $("#fileInput").val().replace(/^.*[\\\/]/, '')
//     $(".upload-content").hide()
//     $(".upload-filename ").find("p").text(fileName)
//   })
// })


//hamberger menu

var menuToggleOpen = document.querySelector("#menu-toggle-open");
var menuToggleClose = document.querySelector("#menu-toggle-open.menu-toggle-close");
var menu = document.querySelector(".menu");

var tl = gsap.timeline({
  paused: true
});

tl.to(".menu", {
  y: 0,
  duration: 0.6,
  ease: "ease"
});

tl.from(".menu nav a", {
  y: 40,
  opacity: 0,
  duration: 0.4,
  ease: "expo.out",
  stagger: 0.1
});

$(".stax-hamberg").click(function () {
  tl.reverse();
  if ($(this).hasClass("menu-toggle-close")) {
    $(this).removeClass("menu-toggle-close");
    setTimeout(function () {
      $(".stax-hamberg__text").text("MENU");
    }, 400);
    $.fn.fullpage.setMouseWheelScrolling(true);
    $.fn.fullpage.setAllowScrolling(true);
  } else {
    $(this).addClass("menu-toggle-close");
    tl.play();
    setTimeout(function () {
      $(".stax-hamberg__text").text("CLOSE");
    }, 300);
    $.fn.fullpage.setMouseWheelScrolling(false);
    $.fn.fullpage.setAllowScrolling(false);
  }
});

$(".js-nav-link a").click(function (e) {
  // tl.reverse()
  // e.preventDefault()
  // window.location.href = "http://localhost:8000/";
  // if ($(".stax-hamberg").hasClass("menu-toggle-close")) {
  //     $(".stax-hamberg").removeClass("menu-toggle-close")
  //     setTimeout(function () {
  //       $(".stax-hamberg__text").text("MENU")
  //     }, 400)
  // }
  $(".stax-hamberg").trigger("click");
  // $.fn.fullpage.setMouseWheelScrolling(true);
  // $.fn.fullpage.setAllowScrolling(true);
  // $.fn.fullpage.moveTo($(this).attr("data-slide"));
});

},{}]},{},[1])//# sourceMappingURL=main.js.map
