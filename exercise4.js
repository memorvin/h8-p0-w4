//Logic Challenge - Mencari Modus

function cariModus(array) {
  arr = array.slice();
  arr.sort(function(a, b){return a-b});
  var num = [];
  var occ = [];
  var prev = 0;

  for ( var i = 0; i < arr.length; i++ ) {
    if ( arr[i] !== prev ) {
      num.push(arr[i]);
      occ.push(1);
    } else {
      occ[occ.length-1]++;
    }
      prev = arr[i];
  }

  var maxOcc = (Math.max.apply(null, occ))

  if (maxOcc === 1 || maxOcc === arr.length) {
    return -1;
  } else {
    var indexArr = [];
    var index = occ.indexOf(maxOcc);
    while (index != -1) {
      indexArr.push(index);
      index = occ.indexOf(maxOcc, index + 1);
    }
    var x = [];
    for (var i = 0; i < indexArr.length; i++) {
      x.push(array.indexOf(num[indexArr[i]])); 
    }
    return array[Math.min.apply(null, x)]
  }
}
  
  // TEST CASES
  console.log(cariModus([10, 4, 5, 2, 4])); // 4
  console.log(cariModus([5, 10, 10, 6, 5])); // 5
  console.log(cariModus([10, 3, 1, 2, 5])); // -1
  console.log(cariModus([1, 2, 3, 3, 4, 5])); // 3
  console.log(cariModus([7, 7, 7, 7, 7])); // -1

  