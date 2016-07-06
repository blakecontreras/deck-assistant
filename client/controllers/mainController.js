var main = angular.module('deck-assistant.main', [])

.controller('MainController', function($scope, $state, Lands) {
  $scope.mana = [
    { color: 'White', landType: 'Plains', amount: 24 },
    { color: 'Blue', landType: 'Island', amount: 0 },
    { color: 'Black', landType: 'Swamp', amount: 0 },
    { color: 'Red', landType: 'Mountain', amount: 0 },
    { color: 'Green', landType: 'Forest', amount: 0 },
    { color: 'Colorless', landType: Lands.getColorlessLands($scope.mana), amount: 0 }
  ];

  // $scope.lands = Lands.calculateLimited($scope.mana);
  $scope.getLands = function() {
    $scope.lands = Lands.calculateLimited($scope.mana);
    $scope.showResults = !$scope.showResults;
  }

  $scope.showResults = false;
})
