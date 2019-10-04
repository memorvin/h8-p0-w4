//Logic Challenge - Digit Perkalian Minimum

function digitPerkalianMinimum(angka) {
  var num1 = [];
  for (var i = 1; i <= angka; i++) {
    if (angka % i === 0) {
      num1.push(i);
    }
  }
  var result = 0;
  var num2 = [];
  for (var i = 0; i < num1.length; i++) {
    result = angka / num1[i];
    num2.push(result);
  }
  var digitArr = [];
  var digit = 0;
  for (var i = 0; i < num1.length; i++) {
    digit = String(num1[i]).length + String(num2[i]).length
    digitArr.push(digit);
  }
  return Math.min.apply(null, digitArr);
}

  
  // TEST CASES
  console.log(digitPerkalianMinimum(24)); // 2
  console.log(digitPerkalianMinimum(90)); // 3
  console.log(digitPerkalianMinimum(20)); // 2
  console.log(digitPerkalianMinimum(179)); // 4
  console.log(digitPerkalianMinimum(1)); // 2