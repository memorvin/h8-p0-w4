//Logic Challenge - Change Me!


function changeMe(arr) {
  var num = 0;
  var fullName = '';

  for (var i = 0; i < arr.length; i++) {
    num += 1;
    fullName = arr[i][0] + ' ' + arr[i][1];
    var person = {};
    person.firstName = arr[i][0];
    person.lastName = arr[i][1];
    person.gender = arr[i][2];
    person.age = age(arr[i][3]);

    function age (birth) {
      var year = new Date().getFullYear();
      if (birth < year) {
        var result = year - birth; 
      } else {
        var result = 'Invalid Birth Year';
      }
      return result;
    }
    console.log(num + '.' + fullName);
    console.log(person);
  }
}

// TEST CASES
changeMe([['Christ', 'Evans', 'Male', 1982], ['Robert', 'Downey', 'Male']]); // 1. Christ Evans:
// { firstName: 'Christ',
//   lastName: 'Evans',
//   gender: 'Male',
//   age: 37 }
// 2. Robert Downey:
// { firstName: 'Robert',
//   lastName: 'Downey',
//   gender: 'Male',
//   age: 'Invalid Birth Year' }
changeMe([]); // ""