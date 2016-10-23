angular.module('giphyApp')
  .controller('SavedController', SavedController);

function SavedController(savedService) {
  var self = this;
  var updateGif = {};
  var deleteGif = {};

  self.showSaved = function() {
    savedService.getSaved().then(function(gifs) {
      self.gifs = gifs;
      self.total = self.gifs.length
    });
  };

  self.updateGif = function(index) {
    updateGif.id = self.gifs[index].id;
    updateGif.comment = self.gifs[index].comment;
    updateGif.url = self.gifs[index].url;
    savedService.updateGif(updateGif);
  };

  self.deleteGif = function(index) {
    var deleteId = self.gifs[index].id;
    savedService.deleteGif(deleteId).then(self.showSaved());
  }

  self.showSaved();
}
