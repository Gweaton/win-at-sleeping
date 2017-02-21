window.onload = function() {
  (function displayYoutubePlayer(content) {
    var youtubePlayer = document.getElementById("youtubePlayer");
    var image = `images/${content.blocks[0].image}`
    youtubePlayer.innerHTML = `<img src=${image}>`
  })();
}
