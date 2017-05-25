angular.module('app').service('mainSrv', function($http){
  console.log('serving');

  this.getCalendar = function() {
    return $http.get('/ptcd/cal/')
    .then(function(response) {
      let items = response.data.items
      let events = []
      for (var i = items.length-1; i > items.length-5; i--) {
        events.push(items[i])
      }
      return events;
    })
  }
})

// TODO: filter response.data.items by date. if older than 1 year, omit. or show upcoming, disregard old items?
// ng repeat 5 events upcoming.
// show events on google calendar view on Schedule page with bigCal npm package
