angular.module('app').service('mainSrv', function($http){
  console.log('serving');

  this.getCalendar = function() {
    return $http.get('/ptcd/cal/')
    .then(function(response) {
      return console.log(response.data);
    })
  }
})
