function displayHeaderContent(content, header, subheader, blockNumber) {
  var header = document.getElementById(header);
  var heading = content.blocks[blockNumber].heading;
  var subheader = document.getElementById(subheader);
  var subheading = content.blocks[blockNumber].subheading;

  header.innerHTML = `<h1> ${heading} </h1>`;
  subheader.innerHTML = `<p>${subheading}<p>`;
};

function displayGridContent(content, element, blockNumber) {
  var grid = document.getElementById(element);
  var items = content.blocks[blockNumber].items;
  items.forEach(function(item) {
    var url = item.url.gben
    var text = item.text
    var image = `images/${item.image}`
    grid.innerHTML += "<a href='" + url + "'><div class='grid-image'><img src='" + image + "'><p>" + text + "</p></div></a>";
  });
};

function displayCarouselContent(content, blockNumber) {
  var carousel = document.getElementById("carousel");
  var items = content.blocks[blockNumber].items;
  items.forEach(function(item) {
    var heading = item.heading;
    var text = item.text;
    var image1 = `images/${item.images[0]}`;
    var image2 = `images/${item.images[1]}`;
    carousel.innerHTML += "<div class='carousel-item'><img src='" + image1 +"'/><img src='" + image2 +"'/><h2>" + heading + "</h2> <h3>IKEA Sleep Coach says: <h3><p>" + text +"</p></div>"
  });
};
