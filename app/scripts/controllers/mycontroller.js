'use strict';
angular.module('myprojetApp')
  .controller('MyCtrl', ['$scope', 'SharedDataService', function ($scope, SharedDataService) {
  	
  	$scope.product = SharedDataService.product;
    $scope.setName = function() {
    	MyService.setName($scope.name);
    };
  }]);
