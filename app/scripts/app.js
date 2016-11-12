'use strict';

/**
 * @ngdoc overview
 * @name myprojetApp
 * @description
 * # myprojetApp
 *
 * Main module of the application.
 */
angular
  .module('myprojetApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/my', {
        templateUrl: 'views/my.html',
        controller: 'MyCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
