function displayYoutubePoster(content) {
  var youtubePoster = document.getElementById("youtube-poster");
  var image = `images/${content.blocks[1].image}`
  youtubePoster.innerHTML = `<img class='poster-wrap' src=${image} >`
};

function displayYoutubeVideo(content) {
  var youtubeVideo = document.getElementById("youtube-video");
  var videoUrl = content.blocks[1].videoId;
  youtubeVideo.innerHTML = "<iframe class='player' frameborder='0' title='YouTube video player' width='640' height='390' src='https://www.youtube.com/embed/" + videoUrl + "'></iframe>"
}
