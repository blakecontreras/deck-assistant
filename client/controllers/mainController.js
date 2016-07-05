angular.module('deck-assistant.main', [])

.controller('MainController', function($scope) {
  $scope.mana = [
    { color: 'White', amount: 0 },
    { color: 'Blue', amount: 0 },
    { color: 'Black', amount: 0 },
    { color: 'Red', amount: 0 },
    { color: 'Green', amount: 0 },
    { color: 'Colorless', amount: 0 }
  ]
})
