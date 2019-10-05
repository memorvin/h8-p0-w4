//Logic Challenge - Check AB

function checkAB(str) {
  var indexA = [];
  var indexB = [];
  if (str.indexOf('a') === -1 || str.indexOf('b') === -1) {
    return false
  } else {
    for (var i = 0; i < str.length; i++) {
      if (str[i] === 'a' || str[i] === 'A') {
        indexA.push(i)
      } else if (str[i] === 'b' || str[i] === 'B') {
        indexB.push(i)
      }
    }
    var result = 0;
    for (var i = 0; i < indexA.length; i++) {
      for (var j = 0; j < indexB.length; j++) {
        if (indexB[j] - indexA[i] === 4 || indexB[j] - indexA[i] === -4) {
          result += 1
        }
      }
    }
    if (result > 0) {
      return true;
    } else {
      return false;
    }
  }
}

// TEST CASES
console.log(checkAB('lane borrowed')); // true
console.log(checkAB('i am sick')); // false
console.log(checkAB('you are boring')); // true
console.log(checkAB('barbarian')); // true
console.log(checkAB('bacon and meat')); // false