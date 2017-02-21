function displayHeaderContent(content, header, subheader, blockNumber) {
  var header = document.getElementById(header);
  var heading = content.blocks[blockNumber].heading;
  var subheader = document.getElementById(subheader);
  var subheading = content.blocks[blockNumber].subheading;

  header.innerHTML = `<h1> ${heading} </h1>`;
  subheader.innerHTML = `<p>${subheading}<p>`;
};
