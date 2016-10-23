angular.module('giphyApp')
  .controller('HomeController', HomeController);

function HomeController(homeService) {
  var self = this;

  self.getRandomGif = function() {
    homeService.getRandomGif().then(function(gif) {
      //  Assign the result to the displayed gif image source
      self.randomUrl = gif.fixed_height_downsampled_url;
    });
  }

  self.searchGif = function(searchTerm) {
    //  Convert the term to a url-ready string
    searchTerm = searchTerm.split(' ').join('+');

    homeService.search(searchTerm).then(function(gifs) {
      //  Get the results of the search
      self.searchedGifs = gifs;
    });
  }

  var packagedGiphy = {};

  self.saveRandom = function() {
    packagedGiphy.url = self.randomUrl;
    packagedGiphy.comment = self.commentRandom;
    homeService.postGif(packagedGiphy);
    self.commentRandom = '';
  }

  self.saveSearched = function(index) {
    packagedGiphy.url = self.searchedGifs[index].images.fixed_height.url;
    packagedGiphy.comment = self.commentSearched[index];
    homeService.postGif(packagedGiphy);
    self.commentSearched[index] = '';
  }

  self.getRandomGif();
}
