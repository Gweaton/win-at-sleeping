function displayLink(content, id, blockNumber) {
  var link = document.getElementById(id);
  var linkText = content.blocks[blockNumber].cta.text;
  var url = content.blocks[blockNumber].cta.url.gben;
  link.innerHTML = "<a href='" + url + "'>" + linkText + "</a>"
}
