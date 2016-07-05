angular.module('deck-assistant.main', [])

.controller('MainController', function($scope, Lands) {
  $scope.mana = [
    { color: 'White', amount: 24 },
    { color: 'Blue', amount: 0 },
    { color: 'Black', amount: 0 },
    { color: 'Red', amount: 0 },
    { color: 'Green', amount: 0 },
    { color: 'Colorless', amount: 0 }
  ];

  $scope.lands = Lands.calculateLimited($scope.mana);
})
