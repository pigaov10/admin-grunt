'use strict';

/**
 * @ngdoc function
 * @name minovateApp.controller:DashboardCtrl
 * @description
 * # DashboardCtrl
 * Controller of the minovateApp
 */
app
  .controller('EquipeCtrl', function($scope,$http){
    $scope.page = {
      title: 'Dashboard',
      subtitle: 'Place subtitle here...'
    };

    $scope.userSystemCount = 3.230

    $scope.getUsers = function(){
      $scope.data=[];
      var url = 'http://www.filltext.com/?rows=10&fname={firstName}&lname={lastName}&delay=3&callback=JSON_CALLBACK';

      $http.jsonp(url).success(function(data){
          $scope.data=data;
      });
    };

    $scope.getUsers();
  })