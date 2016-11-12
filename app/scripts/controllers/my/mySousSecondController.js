'use strict';
angular.module('myprojetApp')
  .controller('MySousSecondCtrl', ['$scope', 'SharedDataService', function ($scope, SharedDataService) {
  	
  	$scope.product = SharedDataService.product;
    $scope.setName = function() {
    	console.log(this.name);
    };
  }]);

