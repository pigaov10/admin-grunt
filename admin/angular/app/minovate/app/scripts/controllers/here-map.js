'use strict';

/**
 * @ngdoc function
 * @name minovateApp.controller:DashboardCtrl
 * @description
 * # DashboardCtrl
 * Controller of the minovateApp
 */
app
  .controller('HereMapCtrl', function($scope,$http){
		$scope.map = {
		  zoom : 14,
		  center : { 
		    lng: -0.135559,
		    lat: 51.513872
		  }
		};
  })