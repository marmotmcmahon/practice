/**
 * @param {number[]} deck
 * @return {boolean}
 */
var hasGroupsSizeX = function(deck) {
    partnersArray = [];
    
    if (deck.length < 2) {
        return false;
    }

    deck.forEach(function(card) {
        var i = 0;
        deck.forEach(function(comparedTo) {
            if (card == comparedTo) {
                i += 1;
            }
        });
        
        partnersArray.push(i);
    });
    
    let dedupe = (names) => names.filter((v,i) => names.indexOf(v) === i)
    partnersArray = dedupe(partnersArray); // This array logs no. of instances of each unique value
        
    function commonDenominator(array, number) {
        for (i = 0; i < array.length; i++) {
            if (array[i] % number !== 0) {
                return false;
            }
        }
        return true;
    }
    
    for (j = 2; j < 100; j++) {
        if (commonDenominator(partnersArray, j)) {
            return true;
        }
    }
    return false;
};
