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
