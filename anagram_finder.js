/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function(s, p) {
    s_array = s.split("")
    p_array = p.split("")
    console.log("Find anagrams of " + p + " in " + s)
    
    var number = []
    
    for (i = 0; i < s_array.length; i++) {
        if (p_array.includes(s_array[i])) {
            console.log("Matching letter found at " + s_array[i])
            var s_abridged = []
            for (k = 0; k < p_array.length; k++) {
                if (s_array[i + k]) {
                    s_abridged.push(s_array[i + k])
                }
            }
            s_abridged.sort()
            s_abridged = s_abridged.join('')
            console.log("Is " + s_abridged + " an anagram of " + p + "?")
            if (s_abridged == p.split('').sort().join('')) {
                number.push(i)
                console.log("Yes!")
            } else {
                console.log("No!")
            }
        }
    }
    return number
};