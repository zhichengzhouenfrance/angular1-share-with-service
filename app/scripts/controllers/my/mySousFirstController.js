'use strict';
angular.module('myprojetApp')
  .controller('MySousFirstCtrl', ['$scope', '$http', 'SharedDataService', function ($scope, $http, SharedDataService) {
  	

            getEmissions().then(function(data) {
            		console.log(data);
            	 SharedDataService.product.name = data.statusText;
            	 	console.log(SharedDataService.product);

            });


          function getEmissions() {

                var promise = $http.get('http://services.groupkt.com/country/get/all')
                    .success(function (data, status, headers, config) {
                        return data;
                    })
                    .error(function (data, status, headers, config) {
                        console.log("listRequest ERROR");
                        return {};
                    });
                return promise;

            }
	    $scope.setName = function() {
	    	console.log(this.name);
	    };
  }]);

