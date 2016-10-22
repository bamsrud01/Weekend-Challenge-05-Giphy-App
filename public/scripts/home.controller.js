angular.module('giphy')
  .controller('HomeController', HomeController);

function HomeController(homeService) {
  var self = this;

  self.getRandomGif = function() {
    homeService.getRandomGif().then(function(gif) {
      //  Assign the result to the displayed gif image source
      self.randomUrl = gif.image_url;
    });
  }

  self.searchGif = function(searchTerm) {
    //  Convert the term to a url-ready string
    searchTerm = searchTerm.split(' ').join('+');

    homeService.search(searchTerm).then(function(gifs) {
      //  Get the results of the search
      self.searchedGifs = gifs;
    })
  }
}
