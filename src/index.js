window.onload = function() {

  (function displayYoutubePoster(content) {
    var youtubePoster = document.getElementById("youtube-poster");
    var image = `images/${content.blocks[1].image}`
    youtubePoster.innerHTML = `<img src=${image} >`
  })(pageContent);

  (function displayYoutubeVideo(content) {
    var youtubeVideo = document.getElementById("youtube-video");
    var videoUrl = content.blocks[1].videoId;
    youtubeVideo.innerHTML = "<iframe class='player' frameborder='0' allowfullscreen='1' title='YouTube video player' width='640' height='390' src='https://www.youtube.com/embed/" + videoUrl + "'></iframe>"
  })(pageContent);

  displayHeaderContent(pageContent, 'first-header', 'first-subheader', 0);
  displayHeaderContent(pageContent, 'second-header', 'second-subheader', 2);


}
