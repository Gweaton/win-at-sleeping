//Slideshow

function changeSlide(n) {
  showSlides(slideIndex += n);
}
var slideIndex = 1;

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("carousel-item");
  if (n > slides.length) { slideIndex = 1 };
  if (n < 1) {slideIndex = slides.length};
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  };

  slides[slideIndex-1].style.display = "block";
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

// Image animation
$(function() {
	var secondImage = $(".second");
	setInterval(function() {
		secondImage.toggleClass("hide");
	}, 1000);
});
