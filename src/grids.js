//Ideas Grid

function displayIdeaGridContent(content, element, blockNumber) {
  var grid = document.getElementById(element);
  var items = content.blocks[blockNumber].items;
  items.forEach(function(item) {
    var url = item.url.gben
    var text = item.text
    var image = `images/${item.image}`
    grid.innerHTML += "<a href='" + url + "'><div class='idea-grid-item'><img src='" + image + "'><p>" + text + "</p></div></a>";
  });
};

//Product grid

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
