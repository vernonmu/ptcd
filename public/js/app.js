angular.module('app', ['ui.router', 'ui.materialize'])
.config(function($urlRouterProvider, $stateProvider) {
  $stateProvider
  .state('home', {
    templateUrl: './views/home.html',
    url: '/',
    controller: 'mainCtrl'
  })
  .state('about', {
    templateUrl: './views/about.html',
    url: '/about'
  })
  .state('join', {
    templateUrl: './views/join.html',
    url: '/join'
  })
  .state('spirit', {
    templateUrl: './views/spirit.html',
    url: '/spirit'
  })
  .state('login', {
    templateUrl: './views/login.html',
    url: '/login'
  })
  .state('contact', {
    templateUrl: './views/contact.html',
    url: '/contact'
  })
  .state('schedule', {
    templateUrl: './views/schedule.html',
    url: '/schedule'
  })
  $urlRouterProvider.otherwise('/')
})
