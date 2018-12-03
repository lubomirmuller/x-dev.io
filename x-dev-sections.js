function scrollTo(element, to, duration) {
    "use strict";
    var start = element.scrollTop,
        change = to - start,
        currentTime = 0,
        increment = 20;
        
    var animateScroll = function () {
        currentTime += increment;
        var val = Math.easeInOutQuad(currentTime, start, change, duration);
        element.scrollTop = val;
        if (currentTime < duration) {
            setTimeout(animateScroll, increment);
        }
    };
    animateScroll();
}

//t = current time
//b = start value
//c = change in value
//d = duration
Math.easeInOutQuad = function (t, b, c, d) {
    "use strict";
    t /= d / 2;
    if (t < 1) return c / 2 * t * t + b;
    t--;
    return -c / 2 * (t * (t - 2) - 1) + b;
};

function mobileMenu() {
    "use strict";
    var y = document.getElementById("nav-nav");
    if (y.className === "nav-mobile") {
        y.className += " responsive";
    } else {
        y.className = "nav-mobile";
    }
}

var x = window.matchMedia("(min-width: 600px)"),
b = document.documentElement,
n = 600;

function goToHome() {
    "use strict";
    var elem = document.getElementById("home"),
    a = elem.offsetTop;
    if (x.matches) {
        scrollTo(b, a - 80, n);
        scrollTo(document.body, a - 80, n);
    } else {
        scrollTo(b, a, n);
        scrollTo(document.body, a, n);
        mobileMenu();
    }
}

function getStarted() {
    "use strict";
    var elem = document.getElementById("about"),
    a = elem.offsetTop;
    if (x.matches) {
        scrollTo(b, a - 80, n);
        scrollTo(document.body, a - 80, n);
    } else {
        scrollTo(b, a, n);
        scrollTo(document.body, a, n);
    }
}

function goToAbout() {
    "use strict";
    var elem = document.getElementById("about"),
    a = elem.offsetTop;
    if (x.matches) {
        scrollTo(b, a - 80, n);
        scrollTo(document.body, a - 80, n);
    } else {
        scrollTo(b, a, n);
        scrollTo(document.body, a, n);
        mobileMenu();
    }
}

function goToProjects() {
    "use strict";
    var elem = document.getElementById("projects"),
    a = elem.offsetTop;
    if (x.matches) {
        scrollTo(b, a - 80, n);
        scrollTo(document.body, a - 80, n);
    } else {
        scrollTo(b, a, n);
        scrollTo(document.body, a, n);
        mobileMenu();
    }
}

function goToTeam() {
    "use strict";
    var elem = document.getElementById("team"),
    a = elem.offsetTop;
    if (x.matches) {
        scrollTo(b, a - 80, n);
        scrollTo(document.body, a - 80, n);
    } else {
        scrollTo(b, a, n);
        scrollTo(document.body, a, n);
        mobileMenu();
    }
}

function goToPartners() {
    "use strict";
    var elem = document.getElementById("partners"),
    a = elem.offsetTop;
    if (x.matches) {
        scrollTo(b, a - 80, n);
        scrollTo(document.body, a - 80, n);
    } else {
        scrollTo(b, a, n);
        scrollTo(document.body, a, n);
        mobileMenu();
    }
}

function goToContact() {
    "use strict";
    var elem = document.getElementById("contact"),
    a = elem.offsetTop;
    if (x.matches) {
        scrollTo(b, a - 80, n);
        scrollTo(document.body, a - 80, n);
    } else {
        scrollTo(b, a, n);
        scrollTo(document.body, a, n);
        mobileMenu();
    }
}
