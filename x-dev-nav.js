function scrollFunctionBig() {
    "use strict";
    var a = document.getElementById("header");
    var b = document.getElementById("nav");
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
    var a = document.getElementById("header");
    var b = document.getElementById("nav");
    if (document.body.scrollTop < 5 || document.documentElement.scrollTop < 5) {
        a.classList.remove("header");
        b.classList.remove("nav");
    }
}

function mediaScroll(x) {
    "use strict";
    if (x.matches) {
        window.onscroll = function () {scrollFunctionBig(); };
        window.onresize = function () {scrollFunctionBig(); };
    } else {
        window.onscroll = function () {scrollFunctionSmall(); };
        window.onresize = function () {scrollFunctionSmall(); };
    }
}

var x = window.matchMedia("(min-width: 600px)");
mediaScroll(x);
x.addListener(mediaScroll);


function mobileMenu() {
    "use strict";
    var y = document.getElementById("nav-nav");
    if (y.className === "nav-mobile") {
        y.className += " responsive";
    } else {
        y.className = "nav-mobile";
    }
}


