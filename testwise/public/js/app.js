"use strict"

angular.module('TestWise', ['ui.bootstrap', 'ui.router', 'ngCookies'])
.config(['$urlRouterProvider', '$stateProvider', function($urlRouterProvider, $stateProvider){
  $urlRouterProvider.otherwise('/');
  $stateProvider.state('index', {
    url: '/',
    views: {
      '': {
        templateUrl: '/partials/landingpage',
        controller: 'MainController',
        controllerAs: 'ctrl'
      },
      'login': {
        templateUrl: 'partials/loginbutton',
        controller: 'MainController',
        controllerAs: 'ctrl'
      }
    }
  })
  .state('loggedin', {
    url: '/',
    views: {
      '': {
        templateUrl: '/partials/home',
        controller: 'MainController',
        controllerAs: 'ctrl'
      },
      'login': {
        templateUrl: 'partials/loggedin',
        controller: 'MainController',
        controllerAs: 'ctrl'
      }
    }
  })
  .state('loggedin.addtest', {
    url: '/',
    views: {
      'maincontent': {
        templateUrl: 'partials/addtest',
        controller: 'AddTestController',
        controllerAs: 'ctrl'
      }
    }
  })
  .state('loggedin.edittest', {
    url: '/',
    views: {
      'maincontent': {
        templateUrl: 'partials/edittest',
        controller: 'EditTestController',
        controllerAs: 'ctrl'
      }
    }
  })
  .state('loggedin.history', {
    url: '/',
    views: {
      'maincontent': {
        templateUrl: 'partials/history',
        controller: 'HistoryController',
        controllerAs: 'ctrl'
      }
    }
  });
}]);
