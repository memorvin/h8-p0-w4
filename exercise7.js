//Logic Challenge - Mengurutkan Abjad

function urutkanAbjad(str) {
  
  var charcode = [];
  for (var i = 0; i < str.length; i++) {
    charcode.push(str.charCodeAt(i));
  }
  charcode.sort(function(a, b){return a-b});
  
  var result = '';
  for (var i = 0; i < charcode.length; i++) {
    result += String.fromCharCode(charcode[i]);
  }
  return result;
}

// TEST CASES
console.log(urutkanAbjad('hello')); // 'ehllo'
console.log(urutkanAbjad('truncate')); // 'acenrttu'
console.log(urutkanAbjad('developer')); // 'deeeloprv'
console.log(urutkanAbjad('software')); // 'aeforstw'
console.log(urutkanAbjad('aegis')); // 'aegis'