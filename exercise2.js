//Logic Challenge - Faktor Persekutuan Terbesar

function fpb(angka1, angka2) {
  var arr1 = [];
  for (var i = 1; i <= angka1; i++) {
    if (angka1 % i === 0) {
      arr1.push(i);
    }
  }
  var arr2 = [];
  for (var i = 1; i <= angka2; i++) {
    if (angka2 % i === 0) {
      arr2.push(i);
    }
  }
  var fpb = [];
  for (var i = 0; i < arr1.length; i++) {
    if (arr2.indexOf(arr1[i]) !== -1) {
      fpb.push(arr1[i]);
    }
  }
  return Math.max.apply(null, fpb);
}

// TEST CASES
console.log(fpb(12, 20)); // 4
console.log(fpb(50, 40)); // 10
console.log(fpb(22, 99)); // 11
console.log(fpb(24, 36)); // 12
console.log(fpb(17, 23)); // 1