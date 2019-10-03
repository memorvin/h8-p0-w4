//Logic Challenge - Angka Prima

function angkaPrima(angka) {
  if (angka < 2) {
    return false;
  } else {
    var result = [];  
    for (var i = 2; i < angka; i++) {
      result.push(angka%i);
    }
    if (result.indexOf(0) !== -1) {
      return false;
    } else {
      return true;
    }
  }
}
  
  // TEST CASES
  console.log(angkaPrima(3)); // true
  console.log(angkaPrima(7)); // true
  console.log(angkaPrima(6)); // false
  console.log(angkaPrima(23)); // true
  console.log(angkaPrima(33)); // false