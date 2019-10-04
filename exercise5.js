Logic Challenge - Ubah Huruf

function ubahHuruf(kata) {
  var cc = [];
  for (var i = 0; i < kata.length; i++) {
    cc.push(kata.charCodeAt(i))
  }
  var newKata = [];
  for (var i = 0; i < kata.length; i++) {
    if (cc[i] === 122) {
      cc[i] -= 25;
      newKata.push(String.fromCharCode(cc[i]))
    } else {
      newKata.push(String.fromCharCode(cc[i]+1))
    }
  }
  return newKata.join('');
}

// TEST CASES
console.log(ubahHuruf('wow')); // xpx
console.log(ubahHuruf('developer')); // efwfmpqfs
console.log(ubahHuruf('javascript')); // kbwbtdsjqu
console.log(ubahHuruf('keren')); // lfsfo
console.log(ubahHuruf('semangat')); // tfnbohbu