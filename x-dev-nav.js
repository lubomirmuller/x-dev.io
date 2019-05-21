"use strict";

//==== navbar styling ====//

//change color and height of navbar on scroll
// document.addEventListener("load", navbarStyle);
// document.addEventListener("resize", navbarStyle);
document.addEventListener("scroll", navbarStyle);

function navbarStyle() {
    var nav = document.querySelector(".navigation");

    if (document.body.scrollTop > 5 || document.documentElement.scrollTop > 5) {
        nav.classList.add("navigation-scroll-style");
    } else {
        nav.classList.remove("navigation-scroll-style");
    }
}

// change style and size of svg logo
document.addEventListener("scroll", function () {
    var logo = document.querySelector(".site-logo__logo");
    var fill = document.querySelector(".svg-main-color");

    if (document.body.scrollTop > 5 || document.documentElement.scrollTop > 5) {
        logo.classList.add("site-logo__logo--light");
        fill.classList.add("svg-main-color--change");
    } else {
        logo.classList.remove("site-logo__logo--light");
        fill.classList.remove("svg-main-color--change");
    }
});

//==== navbar navigation ====//

// animate scrolling to element
function scrollToElem(element, to, duration) {
    var start = element.scrollTop;
    var change = to - start;
    var time = 0;
    var increment = 20;

    var animate = function animate() {
        time += increment;
        element.scrollTop = easeInOutQuad(time, start, change, duration);

        if (time < duration) {
            var prevScroll = element.scrollTop;
            setTimeout(function () {
                var currentScroll = element.scrollTop;

                if (prevScroll === currentScroll) {
                    animate();
                } else {
                    return;
                }
            }, increment);
        } else {
            return;
        }

        // here you can change easing function 
        // based on https://kodhus.com/easings/
        function easeInOutQuad(t, b, c, d) {
            if ((t /= d / 2) < 1) return c / 2 * t * t + b;
            return -c / 2 * (--t * (t - 2) - 1) + b;
        }
    };

    animate();
}

// scroll to element when menu links are clicked
// based on getting href of <a> tag
function scrollToElement(event) {
    event.preventDefault();
    var href = event.target.getAttribute("href");

    // using ID
    // var hrefSlice = href.slice(1);
    // var getElem = document.getElementById(hrefSlice);
    var getElem = document.querySelector(href);
    var dest = getElem.offsetTop - 80;
    scrollToElem(document.documentElement, dest, 600);
    scrollToElem(document.body, dest, 600);
}


// show/hide to top button
function btnToTop() {
    var btnToTop = document.querySelector(".btn-to-top");

    if (window.pageYOffset > 180) {
        btnToTop.classList.add("btn-to-top--show");
    } else {
        btnToTop.classList.remove("btn-to-top--show");
    }
}

document.addEventListener("load", function () {
    btnToTop();
});
document.addEventListener("scroll", function () {
    btnToTop();
});

// scroll to top when to top button clicked
function scrollToTop(event) {
    event.preventDefault();
    scrollToElem(document.documentElement, document.documentElement.offsetTop, 600);
    scrollToElem(document.body, document.body.offsetTop, 600);
}

// toggle nav mobile background and overlay
function overlay(event) {
    event.preventDefault();
    var mob1 = document.querySelector(".navigation");
    var mob2 = document.querySelector(".navigation__main-menu");

    if (mob1.classList) {
        mob1.classList.toggle("navigation--background");
    }

    if (mob2.classList) {
        mob2.classList.toggle("navigation__main-menu--height");
    }
}


// remove overlay when nav links are clicked
var mobileOverlay = document.querySelector(".navigation__main-menu");
var mobileOverlayLi = mobileOverlay.querySelectorAll("li");

for (var i = 0; i < mobileOverlayLi.length; i++) {
    mobileOverlayLi[i].addEventListener("click", overlay);
}

// remove overlay on resize
window.addEventListener("resize", function () {
    document.querySelector(".navigation").classList.remove("navigation--background");
    document.querySelector(".navigation__main-menu").classList.remove("navigation__main-menu--height");
});
