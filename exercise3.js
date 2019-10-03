//Logic Challenge - Mencari Median

function cariMedian(arr) {
  var input = arr.sort(function(a, b){return a-b})
  var divider = input.length/2;
  if (divider.toString().indexOf('.') === -1) {
    var result = (input[divider]+input[divider-1])/2;
  } else {
    var result = input[Math.floor(divider)];
  }
  return result;
}
    
// TEST CASES
console.log(cariMedian([1, 2, 3, 4, 5])); // 3
console.log(cariMedian([1, 3, 4, 10, 12, 13])); // 7
console.log(cariMedian([3, 4, 7, 6, 10])); // 7
console.log(cariMedian([1, 3, 3])); // 3
console.log(cariMedian([7, 7, 8, 8])); // 7.5