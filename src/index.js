window.onload = function() {
  (function displayYoutubePoster(content) {
    var youtubePoster = document.getElementById("youtube-poster");
    var image = `images/${content.blocks[0].image}`
    youtubePoster.innerHTML = `<img src=${image}>`
  })(pageContent);
}
