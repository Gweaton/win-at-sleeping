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

//display Carousel
function displayCarouselContent(content, blockNumber) {
  var carousel = document.getElementById("carousel");
  var items = content.blocks[blockNumber].items;
  items.forEach(function(item) {
    var heading = item.heading;
    var text = item.text;
    var images = item.images;
    carousel.innerHTML += "<div class='carousel-item fade'><div class='item-details'><h2>" + heading + "</h2> <h3>IKEA Sleep Coach says: </h3><p>\"" + text +"\"</p></div><div class='seq-image'><img class='first' src='images/" + images[0] +"'><img class='second' src='images/" + images[1] +"'></div></div>"
  });
};
