"use strict"

angular.module('TestWise', ['ui.bootstrap'])
.controller('MainController', ['$modal', function($modal){
  var self = this;
  self.openLoginDialog = function() {
    var modalInstance = $modal.open({
      templateUrl: 'templates/login-modal.html',
      controller: 'LoginModalInstanceCtrl as ctrl',
      backdrop: 'static'
    });
  };
}])

.controller('LoginModalInstanceCtrl', ['$modalInstance', '$http',function ($modalInstance, $http) {
  var self = this;
  self.login = function() {
    // Login logic goes here
    $http.get('/login', {
      params: {
        username: self.username,
        password: self.password
      }
    })
    .success(function(data, status, headers, config){
      //
      console.log(data);
    });
  };
  self.cancel = function () {
    $modalInstance.dismiss('cancel');
  };
}]);
