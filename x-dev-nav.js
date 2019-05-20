//==== navbar styling ====//

//change color and height of navbar on scroll
// document.addEventListener("load", navbarStyle);
// document.addEventListener("resize", navbarStyle);
document.addEventListener("scroll", navbarStyle);

function navbarStyle() {
    var nav = document.querySelector("nav");
    if (document.body.scrollTop > 5 || document.documentElement.scrollTop > 5) {
        nav.classList.add("nav-scroll");
    } else {
        nav.classList.remove("nav-scroll");
    }
}

// change style and size of svg logo
document.addEventListener("scroll", function () {
    var logo = document.querySelector(".logo");
    var fill = document.querySelector(".st0");
    if (document.body.scrollTop > 5 || document.documentElement.scrollTop > 5) {
        logo.classList.add("logo-light");
        fill.classList.add("fill");
    } else {
        logo.classList.remove("logo-light");
        fill.classList.remove("fill");
    }
})

//==== navbar navigation ====//

// animate scrolling to element
function scrollToElem(element, to, duration) {
    const start = element.scrollTop;
    const change = to - start;
    let time = 0;
    let increment = 20;

    const animate = function () {
        time += increment;
        element.scrollTop = easeInOutQuad(time, start, change, duration);

        if (time < duration) {
            const prevScroll = element.scrollTop;
            setTimeout(() => {
                const currentScroll = element.scrollTop;
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
            if ((t /= d / 2) < 1) return (c / 2) * t * t + b;
            return (-c / 2) * (--t * (t - 2) - 1) + b;
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
    const btnToTop = document.querySelector(".toTop");

    if (window.pageYOffset > 180) {
        btnToTop.classList.add("fade-in");
    } else {
        btnToTop.classList.remove("fade-in");
    }
}

document.addEventListener("load", () => {
    btnToTop();
});

document.addEventListener("scroll", () => {
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
    var mob1 = document.querySelector(".nav");
    var mob2 = document.querySelector(".mobile-menu-overlay");
    if (mob1.classList) {
        mob1.classList.toggle("responsive-2");
    }
    if (mob2.classList) {
        mob2.classList.toggle("responsive-3");
    }
}

// remove overlay when nav links are clicked
var mobileOverlay = document.querySelector(".mobile-menu-overlay");
var mobileOverlayLi = mobileOverlay.querySelectorAll("li");
for (var i = 0; i < mobileOverlayLi.length; i++) {
    mobileOverlayLi[i].addEventListener("click", overlay);
}

// remove overlay on resize
window.addEventListener("resize", function () {
    document.querySelector(".nav").classList.remove("responsive-2");
    document.querySelector(".mobile-menu-overlay").classList.remove("responsive-3");
});