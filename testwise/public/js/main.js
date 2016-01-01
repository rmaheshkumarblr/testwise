"use strict"

angular.module('TestWise', ['ui.bootstrap', 'ui.router', 'ngCookies'])
.controller('MainController', ['$modal', '$cookies', '$http', '$state', function($modal, $cookies, $http, $state){
  var self = this;
  // Authenticate
  $http.get('/authenticate')
  .success(function(data){
    if(data["auth"] == 1) {
      //authenticated
      $state.go('loggedin');
    }
  });
  self.openLoginDialog = function() {
    var modalInstance = $modal.open({
      templateUrl: 'templates/login-modal.html',
      controller: 'LoginModalInstanceCtrl as ctrl',
      backdrop: 'static'
    });
    modalInstance.result.then(function(data){
      // Set token on scope
      self.token = data.token;
      $state.go('loggedin');
    });
  };
}])
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
}])
.controller('LoginModalInstanceCtrl', ['$modalInstance', '$http', '$cookies', function ($modalInstance, $http, $cookies) {
  var self = this;
  self.login = function() {
    // Login logic goes here
    $http.post('/login', {
      params: {
        username: self.username,
        password: self.password
      }
    })
    .success(function(data, status, headers, config){
      console.log(data);
      if(data["auth"] == 0) {
        // Not Logged in
        // Handle failed authentication
      } else {
        // Logged in
        $modalInstance.close(data);
      }
    });
  };
  self.cancel = function () {
    $modalInstance.dismiss('cancel');
  };
}])
.controller('AddTestController', function(){
  var self = this;
  self.setNumberofQuestions = function(value) {
    self.numberOfQuestions = value;
  };
});
