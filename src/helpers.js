function displayHeaderContent(content, header, blockNumber) {
  var header = document.getElementById(header);
  var heading = content.blocks[blockNumber].heading;
  header.innerHTML = `<h1> ${heading} </h1>`;
};

function displaySubheaderContent(content, subheader, blockNumber) {
  var subheader = document.getElementById(subheader);
  var subheading = content.blocks[blockNumber].subheading;
  subheader.innerHTML = `<p>${subheading}<p>`;
}

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

function displayIdeaGridContent(content, element, blockNumber) {
  var grid = document.getElementById(element);
  var items = content.blocks[blockNumber].items;
  items.forEach(function(item) {
    var url = item.url.gben
    var text = item.text
    var image = `images/${item.image}`
    grid.innerHTML += "<a href='" + url + "'><div class='col-4'><img src='" + image + "'><p>" + text + "</p></div></a>";
  });
};

function displayLink(content, blockNumber) {
  var link = document.getElementById("sleep-ideas");
  var linkText = content.blocks[blockNumber].cta.text;
  var url = content.blocks[blockNumber].cta.url.gben;
  link.innerHTML = "<a href='" + url + "'>" + linkText + "</a>"
}

function displayProductGridContent(content, element, blockNumber) {
  var grid = document.getElementById(element);
  var items = content.blocks[blockNumber].items;
  items.forEach(function(item) {
    var url = item.url.gben
    var text = item.text
    var image = `images/${item.image}`
    grid.innerHTML += "<a href='" + url + "'><div class='product'><img src='" + image + "'><p>" + text + "</p></div></a>";
  });
};

function displayCarouselContent(content, blockNumber) {
  var carousel = document.getElementById("carousel");
  var items = content.blocks[blockNumber].items;
  items.forEach(function(item) {
    var heading = item.heading;
    var text = item.text;
    var images = item.images;
    carousel.innerHTML += "<div class='carousel-item fade'><div class='item-details'><h2>" + heading + "</h2> <h3>IKEA Sleep Coach says: </h3><p>" + text +"</p></div><div class='seq-image'><img id='" +images[0] + "' src='images/" + images[0] +"'/></div></div>"
  });
};
