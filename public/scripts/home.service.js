angular.module('giphyApp')
  .service('homeService', HomeService);

function HomeService($http) {

  var API = 'http://api.giphy.com/v1/gifs';
  var key = 'dc6zaTOxFJmzC';
  var service = this;

  service.getRandomGif = function() {
    return $http.get(API + '/random', {
      params: {
        api_key: key,
        rating: 'y'
      }
    }).then(function(response) {
      return response.data.data;
    });
  };

  service.search = function(query) {
    return $http.get(API + '/search', {
      params: {
        api_key: key,
        rating: 'y',
        q: query
      }
    }).then(function(response) {
      return response.data.data;
    });
  };

  service.postGif = function(giphyData) {
    $http({
      method: 'POST',
      url: '/favorites',
      data: giphyData
    }).success(function() {
      console.log('POST completed!');
    });
  };
}
