// Returns values(s) that appear the least number of times in an array

var test1 = ["a", "a", "b" , "c", "d"]

var test2 = [1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 3, 3, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4]

var test3 = ["aphids", "snails", "snails", "slugs", "snails", "snails", "snails", "slugs", "slugs", "aphids", "bugs", "beetles"]

function mostUnique(input) {
  var hash = {};
  var sorted = [];

  input.forEach(function(member) {
    if (!hash[member]) {
      hash[member] = 1;
    } else {
      hash[member] += 1;
    }
  });

  var hashLength = Object.keys(hash).length;
  
  console.log(hash);

  for (i = 1; i < hashLength; i++) {
    for (key in hash) {
      if (hash[key] === i) {
        for (key in hash) {
          if (hash[key] === i) {
            sorted.push(key)
          }
        }
        return sorted;
      }
    }
  }
  return sorted;
}

console.log(mostUnique(test3));
