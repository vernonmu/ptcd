angular.module('app').controller('mainCtrl', function($scope, mainSrv) {
  console.log('controlling');
  $('.button-collapse').sideNav({
     menuWidth: 300, // Default is 300
     edge: 'left', // Choose the horizontal origin
     closeOnClick: true, // Closes side-nav on <a> clicks, useful for Angular/Meteor
     draggable: true // Choose whether you can drag to open on touch screens
   }
 );

 var currentTime = new Date();
  $scope.currentTime = currentTime;
  $scope.month = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  $scope.monthShort = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  $scope.weekdaysFull = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  $scope.weekdaysLetter = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];
  $scope.disable = [false, 1, 7];
  $scope.today = 'Today';
  $scope.clear = 'Clear';
  $scope.close = 'Close';
  var days = 15;

  $scope.choices = [
    'option 1',
    'option 2']
  $scope.select = {choices: ['Mother', 'Father', 'Guardian']}
  $scope.gender = {choices: ['male', 'female']}
  $scope.emergency = {choices: ['start treatment immediately', 'I wish to be contacted prior to any medical procedures']}


 $scope.getCalendar = function() {
   mainSrv.getCalendar()
   .then(function(response) {
     console.log(response);
     $scope.events = response
     return response;
   })
 }

 $scope.getCalendar()

 $scope.createAthlete = function(athlete) {
   mainSrv.createAthlete(athlete).then(function(response) {
     console.log(response);
     return response;
   })
 }


})
