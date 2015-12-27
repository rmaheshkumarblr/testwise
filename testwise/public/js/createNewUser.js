"use strict"

angular.module('TestWise', ['ui.bootstrap'])
.controller('createNewUserController', ['$scope','$http', function($scope,$http){
  var self = this;
  self.submit = function()
  {
  	console.log(self.userName)
  	console.log(self.password)

  	var data = 
  	{
        	name: self.userName,
            password: self.password
    };

  	$http.post("/dbCreateUser", data).success(function(data, status) 
  	{
  		console.log(status)
  		//console.log(data)
        // $scope.hello = data;
    })
  	// if( self.userName == "Mahesh")
  	// {
  	// 	alert('Working')
  	// }

  }

}]);


