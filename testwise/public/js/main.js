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
    modalInstance.result.then(function(data){
      // Set token on scope
      self.token = data.token;
    });
  };
}])

.controller('LoginModalInstanceCtrl', ['$modalInstance', '$http',function ($modalInstance, $http) {
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
        alert("Username and Password don't match")
      } else {
        // Logged in
        alert("Logged in...");
        $modalInstance.close(data);
      }
    });
  };
  self.cancel = function () {
    $modalInstance.dismiss('cancel');
  };
}]);
