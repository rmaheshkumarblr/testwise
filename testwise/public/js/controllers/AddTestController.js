angular.module('TestWise')
.controller('AddTestController', function()
{
  var self = this;
  self.values = {}
  self.data = 
  {
  	availableOptions:
  	[
  	  {id: '0', name: 'Text'},
      {id: '1', name: 'Choose One'},
      {id: '2', name: 'Multi-Choice'},
      {id: '3', name: 'Boolean'}
    ]
  }
  self.print = function()
  {
  	console.log(self.values)
  }
  self.range = function(min,max,step)
  	{
  		// console.log("Called");
  		step = step || 1;
  		var input = [];
  		for (var i = min; i <= max; i++) 
  		{
  			// console.log(i)
  			input.push(i)
  		}
  		return input
	};
});
