function scrollFunctionBig() {
    "use strict";
    var a = document.getElementById("header"),
    b = document.getElementById("nav");
    if (document.body.scrollTop > 5 || document.documentElement.scrollTop > 5) {
        a.classList.add("header");
        b.classList.add("nav");
    } else {
        a.classList.remove("header");
        b.classList.remove("nav");
    }
}

function scrollFunctionSmall() {
    "use strict";
    var a = document.getElementById("header"),
    b = document.getElementById("nav");
    if (document.body.scrollTop < 5 || document.documentElement.scrollTop < 5) {
        a.classList.remove("header");
        b.classList.remove("nav");
    }
}

function headerMobile() {
    "use strict";
    var c = document.getElementById("header");
    if (document.body.scrollTop > 5 || document.documentElement.scrollTop > 5) {
        c.classList.add("header-mobile");
    } else {
        c.classList.remove("header-mobile");
    }
}

function mobileMenuOnResize() {
    "use strict";
    var y = document.getElementById("nav-nav");
    if if (y.matches(".responsive")) {
        y.className -= " responsive";
    } else {}
}

function mediaScroll(x) {
    "use strict";
    if (x.matches) {
        window.onscroll = function () {scrollFunctionBig(); };
        window.onresize = function () {scrollFunctionBig(); };
    } else {
        window.onscroll = function () {scrollFunctionSmall(); headerMobile(); };
        window.onresize = function () {scrollFunctionSmall(); mobileMenuOnResize(); };
    }
}

var x = window.matchMedia("(min-width: 600px)");
mediaScroll(x);
x.addListener(mediaScroll);


