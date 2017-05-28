angular.module('app').controller('mainCtrl', function($scope, $timeout, mainSrv) {
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
   mainSrv.createAthlete(athlete)
   .then(function(response) {
     athlete.athlete_first = ''
     athlete.athlete_last = ''
     athlete.dob = ''
     athlete.gender = ''
     athlete.school = ''
     athlete.parent_first = ''
     athlete.parent_last = ''
     athlete.street =''
     athlete.city = ''
     athlete.zip =''
     athlete.role = ''
     athlete.telephone = ''
     athlete.email = ''
     athlete.emergency_one_first = ''
     athlete.emergency_one_last = ''
     athlete.emergency_one_relationship = ''
     athlete.emergency_one_phone = ''
     athlete.emergency_two_first = ''
     athlete.emergency_two_last = ''
     athlete.emergency_two_relationship = ''
     athlete.emergency_two_phone = ''
     athlete.medications = ''
     athlete.emergency_choice = ''

     $scope.alert = 'Thank you! Your application has been sent.'
     $timeout(function() {
     $scope.alert = '';
     }, 3000);

     console.log(response);
     return response;
   })
 }

 $scope.sendMessage = function(message) {
   mainSrv.sendMessage(message)
   message.first_name = ''
   message.last_name = ''
   message.message = ''
   $scope.alert = 'Thank you! Your message has been sent.'
   $timeout(function() {
   $scope.alert = '';
   }, 3000);
 }






})
