function displayHeaderContent(content, header, subheader, blockNumber) {
  var header = document.getElementById(header);
  var heading = content.blocks[blockNumber].heading;
  var subheader = document.getElementById(subheader);
  var subheading = content.blocks[blockNumber].subheading;

  header.innerHTML = `<h1> ${heading} </h1>`;
  subheader.innerHTML = `<p>${subheading}<p>`;
};

function displayGridContent(content, blockNumber) {
  var grid = document.getElementById("ideas");
  var items = content.blocks[blockNumber].items
  items.forEach(function(item) {
    var url = item.url.gben
    var text = item.text
    var image = `images/${item.image}`
    grid.innerHTML += "<a href='" + url + "'><div class='item'><img class='grid-image' src='" + image + "'><p>" + text + "</p></div></a>"
  });
};
