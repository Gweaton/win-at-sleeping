window.onload = function() {

  (function displayYoutubePoster(content) {
    var youtubePoster = document.getElementById("youtube-poster");
    var image = `images/${content.blocks[0].image}`
    youtubePoster.innerHTML = `<img src=${image} >`
  })(pageContent);

  (function displayYoutubeVideo(content) {
    var youtubeVideo = document.getElementById("youtube-video");
    var videoUrl = content.blocks[0].videoId;
    youtubeVideo.innerHTML = "<iframe class='player' frameborder='0' allowfullscreen='1' title='YouTube video player' width='640' height='390' src='https://www.youtube.com/embed/" + videoUrl + "'></iframe>"
  })(pageContent);

  (function displayHeadline(content) {
    var header = document.getElementById("second-header");
    var heading = content.blocks[1].heading;
    var subheader = document.getElementById("second-subheader");
    var subheading = content.blocks[1].subheading;
    header.innerHTML = `<h1> ${heading} </h1>`;
    subheader.innerHTML = `<p>${subheading}<p>`;
  })(pageContent);

}
