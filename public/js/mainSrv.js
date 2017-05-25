angular.module('app').service('mainSrv', function($http){
  console.log('serving');

  this.getCalendar = function() {
    return $http.get('/ptcd/cal/')
    .then(function(response) {
      let items = response.data.items
      let events = []
      for (var i = items.length-1; i > items.length-5; i--) {
        console.log(items[i]);

        // let d = items[i].start.dateTime

        // console.log(d.getMonth);


        // items[i].date = d.getDate()

        events.push(items[i])
      }
      return events;
    })
  }
})
