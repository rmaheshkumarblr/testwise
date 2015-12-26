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
.controller('LoginModalInstanceCtrl', ['$modalInstance',function ($modalInstance) {
  var self = this;
  self.login = function() {
    // Login logic goes here
  };
  self.cancel = function () {
    $modalInstance.dismiss('cancel');
  };
}]);
