'use strict';
angular.module('myprojetApp')
  .controller('MySousFirstCtrl', ['$scope', 'SharedDataService', function ($scope, SharedDataService) {
  	
  	$scope.product = SharedDataService.product;
    $scope.setName = function() {
    	console.log(this.name);
    };
  }]);

