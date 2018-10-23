const scores = [82, 71, 62, 95, 55, 98, 69, 72, 78, 84, 64, 58, 87, 60]
const grades = { A: 0, B: 0, C: 0, D: 0, F: 0,} 
let currentGradeCount = 0
let previousGradeCount = " "
let lowestGradeAchieved = " "
let currentGrade = []
let previousGrade = []

scores.sort(function( a, b){return a - b});

for (var score in scores){
  switch (true) {
    case (scores[score] > 90):
    grades.A += 1
    break;
    case (scores[score] > 80):
    grades.B += 1
    break;
    case (scores[score] > 70):
    grades.C += 1
    break;
    case (scores[score] > 60):
    grades.D += 1
    break;
    case (scores[score] > 50):
    grades.F += 1
    break;
  }
}

for (var gradeCount in grades){
  if(grades[gradeCount] >= currentGradeCount){
    previousGradeCount = currentGradeCount
    currentGradeCount = grades[gradeCount]
    if(currentGradeCount > previousGradeCount){
      if (currentGradeCount !== 0 && currentGradeCount !== 3){ 
        previousGrade.push(gradeCount)
        lowestGradeAchieved = currentGradeCount
      }
      currentGrade = []
      currentGrade.push(gradeCount)
    } else if (currentGradeCount === previousGradeCount){
      currentGrade.push(gradeCount)
    } 
  }
}

// How many of each grade? Accomplish this with a for..in loop.
console.log(grades)

// What is the lowest score? Sort the array and find out.

console.log(`The lowest score was ${scores[0]}`)
// What is the highest score?
console.log(`The highest score was ${scores[13]}`)

// Which grade had the most students achieve it? Use an if statment, and a currentGradeCount variable, in your for..in loop to see if the current grade's value is higher than the last one.
console.log(`The most students achieved ${currentGrade} grades. There were ${currentGradeCount} of each.`)
// Which grade had the fewest students achieve it?
console.log(`The least students achieved an ${previousGrade}. There were ${lowestGradeAchieved} achieved.`)