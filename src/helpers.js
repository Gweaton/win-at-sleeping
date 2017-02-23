function displayHeaderContent(content, header, subheader, blockNumber) {
  var header = document.getElementById(header);
  var heading = content.blocks[blockNumber].heading;
  var subheader = document.getElementById(subheader);
  var subheading = content.blocks[blockNumber].subheading;

  header.innerHTML = `<h1> ${heading} </h1>`;
  subheader.innerHTML = `<p>${subheading}<p>`;
};

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
    grid.innerHTML += "<a href='" + url + "'><div class='col-3'><img src='" + image + "'><p>" + text + "</p></div></a>";
  });
};

function displayCarouselContent(content, blockNumber) {
  var carousel = document.getElementById("carousel");
  var items = content.blocks[blockNumber].items;
  items.forEach(function(item) {
    var heading = item.heading;
    var text = item.text;
    var images = item.images;
    carousel.innerHTML += "<div class='carousel-item fade'><div class='col-3 item-details'><h2>" + heading + "</h2> <h3>IKEA Sleep Coach says: <h3><p>" + text +"</p></div><div class='col-3 seq-image'><img id='" +images[0] + "' src='images/" + images[0] +"'/></div></div>"
  });
};
