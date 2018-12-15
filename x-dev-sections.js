// http://jsfiddle.net/t1dv1rbo/
function scrollTo(element, to, duration) {

    var 
    start_time = Date.now(),
    end_time = start_time + duration,
    start = element.scrollTop,
    distance = to - start,

    smooth_step = function(start, end, point) {
        
        var x = (point - start) / (end - start);
        return x*x*(3 - 2*x);
    }

    return new Promise(function(resolve, reject) {

        var previous_top = element.scrollTop,

        scroll_frame = function() {
            if(element.scrollTop != previous_top) {
                reject("interrupted");
                return;
            }

            var 
            now = Date.now(),
            point = smooth_step(start_time, end_time, now),
            frameTop = Math.round(start + (distance * point));
            element.scrollTop = frameTop;
            
            if(now >= end_time) {
                resolve();
                return;
            }

            if(element.scrollTop === previous_top
                && element.scrollTop !== frameTop) {
                resolve();
                return;
            }
            previous_top = element.scrollTop;
            setTimeout(scroll_frame, 0);
        }
        setTimeout(scroll_frame, 0);
    });
}

function mobileMenuHome() {
    "use strict";
    var z = document.getElementById("nav-nav");
    if (z.matches(".responsive")) {
        mobileMenu();
    } else {}
}

function mobileMenu() {
    "use strict";
    var y = document.getElementById("nav-nav");
    if (y.className === "nav-mobile") {
        y.className += " responsive";
    } else {
        y.className = "nav-mobile";
    }
}

var b = document.documentElement,
n = 600;

function goToHome() {
    "use strict";
    var elem = document.getElementById("home"),
    a = elem.offsetTop - 80;
        scrollTo(b, a, n);
        scrollTo(document.body, a, n);
        mobileMenuHome();
}

function getStarted() {
    "use strict";
    var elem = document.getElementById("about"),
    a = elem.offsetTop - 80;
        scrollTo(b, a, n);
        scrollTo(document.body, a, n);
}

function goToAbout() {
    "use strict";
    var elem = document.getElementById("about"),
    a = elem.offsetTop - 80;
        scrollTo(b, a, n);
        scrollTo(document.body, a, n);
        mobileMenu();
}

function goToProjects() {
    "use strict";
    var elem = document.getElementById("projects"),
    a = elem.offsetTop;
        a = elem.offsetTop - 80;
        scrollTo(b, a, n);
        scrollTo(document.body, a, n);
        mobileMenu();
}

function goToTeam() {
    "use strict";
    var elem = document.getElementById("team"),
        a = elem.offsetTop - 80;
        scrollTo(b, a, n);
        scrollTo(document.body, a, n);
        mobileMenu();
}

function goToPartners() {
    "use strict";
    var elem = document.getElementById("partners"),
        a = elem.offsetTop - 80;
        scrollTo(b, a, n);
        scrollTo(document.body, a, n);
        mobileMenu();
}

function goToContact() {
    "use strict";
    var elem = document.getElementById("contact"),
        a = elem.offsetTop - 80;
        scrollTo(b, a, n);
        scrollTo(document.body, a, n);
        mobileMenu();
}
