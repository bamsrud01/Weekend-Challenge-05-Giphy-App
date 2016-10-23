angular.module('giphyApp')
  .controller('HomeController', HomeController);

function HomeController(homeService) {
  var self = this;
  self.randomShow = false;

  self.getRandomGif = function() {
    homeService.getRandomGif().then(function(gif) {
      //  Assign the result to the displayed gif image source
      self.randomUrl = gif.fixed_height_downsampled_url;
      self.randomShow = true;
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
    //  Send self.randomUrl to database
    packagedGiphy.url = self.randomUrl;
    packagedGiphy.comment = self.commentRandom;
    console.log('Packaged:', packagedGiphy);
    // homeService.saveGiphy(self.randomUrl).then
    homeService.postGif(packagedGiphy);
    self.commentRandom = '';
  }

  self.saveSearched = function(index) {
    packagedGiphy.url = self.searchedGifs[index].images.fixed_height.url;
    packagedGiphy.comment = self.commentSearched[index];
    console.log('Packed at index' + index + ':', packagedGiphy);
    //  Send self.searchedGifs[index].images.fixed_height.url to database
    homeService.postGif(packagedGiphy);
    self.commentSearched[index] = '';
  }
}
