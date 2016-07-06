var main = angular.module('deck-assistant.main', [])

.controller('MainController', function($scope, $state, Lands) {
  $scope.mana = [
    { color: 'White', landType: 'Plains', amount: 0 },
    { color: 'Blue', landType: 'Islands', amount: 0 },
    { color: 'Black', landType: 'Swamps', amount: 0 },
    { color: 'Red', landType: 'Mountains', amount: 0 },
    { color: 'Green', landType: 'Forests', amount: 0 },
    { color: 'Colorless', landType: Lands.getColorlessLands($scope.mana), amount: 0 }
  ];

  // $scope.lands = Lands.calculateLimited($scope.mana);
  $scope.getLands = function() {
    $scope.lands = Lands.calculateLimited($scope.mana);
    $scope.showResults = !$scope.showResults;
  }

  $scope.showResults = false;
})
