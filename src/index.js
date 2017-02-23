window.onload = function() {

  //displays first Header Module
  displayHeaderContent(pageContent, 'first-header', 'first-subheader', 0);
  //displays youtube Module
  displayYoutubePoster(pageContent);
  displayYoutubeVideo(pageContent);

  //displays second Header Module
  displayHeaderContent(pageContent, 'second-header', 'second-subheader', 2);

  //displays Idea Grid Module
  displayIdeaGridContent(pageContent, "ideas", 3);
  displayLink(pageContent, 3);

  //displays Product Grid Module
  displayProductGridContent(pageContent, "products", 4);

  //displays Carousel Module
  displayHeaderContent(pageContent, 'third-header', 'third-subheader', 5);
  displayCarouselContent(pageContent, 6);
  showSlides(1);
}
