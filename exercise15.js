//Logic Challenge: Highest Score

function highestScore (students) {

  var result = {};

  if (students.length === 0) {
    return result;
  } else {
    var classArr = [];

    for (var i = 0; i < students.length; i++) {
      if (classArr.indexOf(students[i].class) === -1) {
        classArr.push(students[i].class);
      }
    }

    for (var i = 0; i < classArr.length; i++) {
    var tempResult = {};
    var highScore = 0;
      for (var j = 0; j < students.length; j++) {
        if (classArr[i] === students[j].class && students[j].score > highScore) {
          tempResult.name = students[j].name;
          tempResult.score = students[j].score;
          highScore = students[j].score;
        }
      } 
      result[classArr[i]] = tempResult;
    }
    return result;
  }
}

// TEST CASE
console.log(highestScore([
  {
    name: 'Dimitri',
    score: 90,
    class: 'foxes'
  },
  {
    name: 'Alexei',
    score: 85,
    class: 'wolves'
  },
  {
    name: 'Sergei',
    score: 74,
    class: 'foxes'
  },
  {
    name: 'Anastasia',
    score: 78,
    class: 'wolves'
  }
]));

// {
//   foxes: { name: 'Dimitri', score: 90 },
//   wolves: { name: 'Alexei', score: 85 }
// }


console.log(highestScore([
  {
    name: 'Alexander',
    score: 100,
    class: 'foxes'
  },
  {
    name: 'Alisa',
    score: 76,
    class: 'wolves'
  },
  {
    name: 'Vladimir',
    score: 92,
    class: 'foxes'
  },
  {
    name: 'Albert',
    score: 71,
    class: 'wolves'
  },
  {
    name: 'Viktor',
    score: 80,
    class: 'tigers'
  }
]));

// {
//   foxes: { name: 'Alexander', score: 100 },
//   wolves: { name: 'Alisa', score: 76 },
//   tigers: { name: 'Viktor', score: 80 }
// }


console.log(highestScore([])); //{}