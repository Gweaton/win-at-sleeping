window.onload = function() {

  //displays first Header Module
  displayHeaderContent(pageContent, 'first-header', 0);
  displaySubheaderContent(pageContent, 'first-subheader', 0);

  //displays youtube Module
  // displayYoutubePoster(pageContent);
  displayYoutubeVideo(pageContent);

  //displays second Header Module
  displayHeaderContent(pageContent, 'second-header', 2);
  displaySubheaderContent(pageContent, 'second-subheader', 2);

  //displays Idea Grid Module
  displayIdeaGridContent(pageContent, "ideas", 3);
  displayLink(pageContent, 3);

  //displays Product Grid Module
  displayHeaderContent(pageContent, 'third-header', 4);
  displayProductGridContent(pageContent, "products", 4);

  //displays Carousel Module
  displayHeaderContent(pageContent, 'fourth-header', 5);
  displaySubheaderContent(pageContent, 'fourth-subheader', 5)
  displayCarouselContent(pageContent, 6);
  showSlides(1);
}
