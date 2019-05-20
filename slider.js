var slide = 1;
showSlides(slide);

function showSlides(n) {
  var slider = document.querySelector(".slider");
  var slides = slider.querySelectorAll("img");

  var dots = document.getElementsByClassName("dot");

  if (n === undefined) {
    n = ++slide;
  }
  if (n > slides.length) {
    slide = 1;
  }

  if (n < 1) {
    slide = slides.length;
  }

  for (var i = 0; i < slides.length; i++) {
    slides[i].style.opacity = 0;
  }
  for (var i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slide - 1].style.opacity = 1;
  dots[slide - 1].className += " active";
  timer = setTimeout(showSlides, 8000);
}

function prevNext(n) {
  clearTimeout(timer);
  showSlides(slide += n)
}


function currentSlide(n) {
  clearTimeout(timer);
  showSlides(slide = n);
}