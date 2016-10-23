angular.module('giphyApp')
  .service('savedService', savedService);

function savedService($http) {

  var service = this;

  service.getSaved = function() {
    return $http.get('/favorites')
    .then(function(response) {
      console.log(response.data);
      return response.data;
    });
  };

  service.updateGif = function(updateData) {
    return $http({
      method: 'PUT',
      url: '/favorites',
      data: updateData
    }).success(function() {
      console.log('PUT completed!');
    });
  };

  service.deleteGif = function(deleteId) {
    return $http({
      method: 'DELETE',
      url: '/favorites/' + deleteId,
    }).success(function() {
      console.log('DELETE completed!');
    });
  };

}
