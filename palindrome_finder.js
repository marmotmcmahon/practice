/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if (x < 0) {
        return false
    }
    flip = x.toString().split("").reverse().join("")
    console.log(flip)
    if (x == flip) {
        return true
    } else {
        return false
    }
};