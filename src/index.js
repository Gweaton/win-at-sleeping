window.onload = function() {

  (function displayYoutubePoster(content) {
    var youtubePoster = document.getElementById("youtube-poster");
    var image = `images/${content.blocks[1].image}`
    youtubePoster.innerHTML = `<img class='poster-wrap' src=${image} >`
  })(pageContent);

  (function displayYoutubeVideo(content) {
    var youtubeVideo = document.getElementById("youtube-video");
    var videoUrl = content.blocks[1].videoId;
    youtubeVideo.innerHTML = "<iframe class='player' frameborder='0' allowfullscreen='1' title='YouTube video player' width='640' height='390' src='https://www.youtube.com/embed/" + videoUrl + "'></iframe>"
  })(pageContent);

  displayHeaderContent(pageContent, 'first-header', 'first-subheader', 0);
  displayHeaderContent(pageContent, 'second-header', 'second-subheader', 2);

  displayIdeaGridContent(pageContent, "ideas", 3);

  (function displayLink(content, blockNumber) {
    var link = document.getElementById("sleep-ideas");
    var linkText = content.blocks[blockNumber].cta.text;
    var url = content.blocks[blockNumber].cta.url.gben;
    link.innerHTML = "<a href='" + url + "'>" + linkText + "</a>"
  })(pageContent, 3);

  displayProductGridContent(pageContent, "products", 4);

  displayHeaderContent(pageContent, 'third-header', 'third-subheader', 5);

  displayCarouselContent(pageContent, 6);

  plusSlides(1)
  plusSlides(-1)
}

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}


function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("carousel-item");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slides[slideIndex-1].style.display = "block";
}
