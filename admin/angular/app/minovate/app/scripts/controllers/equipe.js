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

    $scope.users = [
      { name: 'Mark', lastname: 'Otto', username: '@mdo', phone: '59411994', email: 'otto@mail.com' },
      { name: 'Jacob', lastname: 'Thornton', username: '@fat', phone: '55499126', email: 'jacob@mail.com' },
      { name: 'Mary', lastname: 'the Bird', username: '@twitter', phone: '3159694', email: 'mary@mail.com' },
      { name: 'Marv', lastname: 'Bond', username: '@marvo', phone: '98456152', email: 'marv@mail.com' },
      { name: 'Larry', lastname: 'Cardl', username: '@lurie', phone: '69851195', email: 'larry@mail.com' },
      { name: 'Jennifer', lastname: 'Minelly', username: '@jen', phone: '396784', email: 'jenny@mail.com' },
      { name: 'Sly', lastname: 'Stall', username: '@sly', phone: '9564842', email: 'sly@mail.com' },
      { name: 'Arnold', lastname: 'Percy', username: '@arnie', phone: '1236978', email: 'arnie@mail.com' },
      { name: 'Jack', lastname: 'Black', username: '@blacko', phone: '63248895', email: 'blacko@mail.com' }
    ];

    $scope.getUsers();
  })