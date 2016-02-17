'use strict';

/**
 * @ngdoc function
 * @name minovateApp.controller:UiNavsCtrl
 * @description
 * # UiNavsCtrl
 * Controller of the minovateApp
 */
app
  .controller('NavsCtrl', function ($scope) {
    $scope.page = {
      title: 'Navigation & Accordions',
      subtitle: 'Place subtitle here...'
    };
  })
  .controller('AccordionDemoCtrl', function ($scope) {
    $scope.oneAtATime = true;

    $scope.groups = [
      {
        title: 'Dynamic Group Header - 1',
        content: 'Dynamic Group Body - 1'
      },
      {
        title: 'Dynamic Group Header - 2',
        content: 'Dynamic Group Body - 2'
      }
    ];

    $scope.items = ['Item 1', 'Item 2', 'Item 3'];

    $scope.addItem = function() {
      var newItemNo = $scope.items.length + 1;
      $scope.items.push('Item ' + newItemNo);
    };

    $scope.status = {
      isFirstOpen: true,
      isFirstDisabled: false
    };
  })

  .controller('TabsDemoCtrl', function ($scope) {
    $scope.tabs = [
      { title:'Dynamic Title 1', content:'Dynamic content 1' },
      { title:'Dynamic Title 2', content:'Dynamic content 2', disabled: true }
    ];

    $scope.alertMe = function() {
      setTimeout(function() {
         //alert('You\'ve selected the alert tab!');
      });
    };
  })

  .controller('PillsDemoCtrl', function ($scope) {
    $scope.pills = [
      { title:'Dynamic Title 1', content:'Dynamic content 1' },
      { title:'Dynamic Title 2', content:'Dynamic content 2', disabled: true }
    ];

    $scope.alertMe = function() {
      setTimeout(function() {
        //alert('You\'ve selected the alert pill!');
      });
    };

  $scope.labels = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
  $scope.series = ['Series A', 'Series B'];

  $scope.data = [
    [65, 59, 80, 81, 56, 55, 40],
    [28, 48, 40, 19, 86, 27, 90]
  ];
    
  });

