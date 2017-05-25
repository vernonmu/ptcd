angular.module('app').controller('mainCtrl', function($scope, mainSrv) {
  console.log('controlling');
  $('.button-collapse').sideNav({
     menuWidth: 300, // Default is 300
     edge: 'left', // Choose the horizontal origin
     closeOnClick: true, // Closes side-nav on <a> clicks, useful for Angular/Meteor
     draggable: true // Choose whether you can drag to open on touch screens
   }
 );


 $scope.getCalendar = function() {
   mainSrv.getCalendar()
   .then(function(response) {
     console.log(response);
     $scope.events = response
     return response;
   })
 }

 $scope.getCalendar()


})
