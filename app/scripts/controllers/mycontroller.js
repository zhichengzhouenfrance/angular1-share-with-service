'use strict';
angular.module('myprojetApp')
  .controller('MyCtrl', ['$scope', 'SharedDataService', function ($scope, SharedDataService) {
  	
  	$scope.name = SharedDataService;
    $scope.setName = function() {
    	MyService.setName($scope.name);
    };
  }]);
