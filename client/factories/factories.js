angular.module('deck-assistant.factories', [])

.factory('Lands', function() {
  var calculateLimited = function(manaArray) {
    const deckSize = 40;
    let nonlandCards = 0;
    let colorCount = 0;
    let colors = [];
    // [white, blue, black, red, green, colorless] = manaArray;

    manaArray.forEach(function(manaType) {
      if (manaType.amount) {
        nonlandCards += manaType.amount;
        colorCount = manaType.color === 'Colorless' ? colorCount : colorCount + 1;
        colors.push(manaType);
      }
    })

    colors.forEach(function(manaType) {
      manaType.landAmount = Math.ceil(manaType.amount * 0.66);
    })
    return colors;
  }

  var getColorlessLands = function(manaArray) {
    // should calculate something smart based on colors in deck.
    return 'Island';
  }

  // var getLandCount = function(deckSize, nonlandCards, colorCount, colors) {
  //   let landCount = [];
  //   for (var color in colors) {
  //     let landType = {};
  //     landCount.push({
  //       landType[color] =
  //     })
  //   }
  //   return landCount;
  // }

  return {
    calculateLimited: calculateLimited,
    getColorlessLands: getColorlessLands
  }
})
