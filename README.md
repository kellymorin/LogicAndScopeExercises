# Practicing Logic and Scope in JavaScript
## Logic Exercises
### Coins to Cash
Define an object and store it in a variable named `piggyBank`. The object should have the following keys defined.

* quarters
* nickels
* dimes
* pennies

For each coin type, give yourself as many as you like.
Once you have given yourself a large stash of coins in your piggybank, look at each key and perform the appropriate math on the integer value to determine how much money you have in dollars. Store that value in a variable named `dollarAmount`and output the value to the browser console.

### Cash to Coins
Now do the reverse. Convert the dollar amount into the coins that make up that dollar amount. The final result is an object with the correct number of quarters, dimes, nickels, and pennies.

### Student Grades
Loop over an array of student grades (values from 50-100) and keep track of how many students get each grade in an object named grades.

* A score of 50-60 is an F
* A score of 61-70 is a D
* A score of 71-80 is a C
* A score of 81-90 is a B
* A score of 91-100 is an A

Use `console.info()` to output the following criteria to the browser console.

1. How many of each grade? Accomplish this with a for..in loop.
1. What is the lowest score? Sort the array and find out.
1. What is the highest score?
1. Which grade had the most students achieve it? Use an if statment, and a currentGradeCount variable, in your for..in loop to see if the current grade's value is higher than the last one.
1. Which grade had the fewest students achieve it?
