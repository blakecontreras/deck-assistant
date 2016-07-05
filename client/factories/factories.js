angular.module('deck-assistant.factories', [])

.factory('Lands', function() {
  var calculateLimited = function(manaArray) {
    [white, blue, black, red, green, colorless] = manaArray;
    return white.amount;
  }

  return {
    calculateLimited: calculateLimited
  }
})
