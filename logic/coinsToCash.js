const piggyBank = {
 quarters: 37,
 nickles:  58,
 dimes: 23,
 pennies: 19,
}
let dollarAmount = 0

calculateBank = () => {
  let quarter = (piggyBank.quarters * 25)/100
  let nickles = (piggyBank.nickles * 5)/100
  let dime = (piggyBank.dimes * 10)/100
  let penny = (piggyBank.pennies * 1)/100
  dollarAmount += quarter 
  dollarAmount += nickles
  dollarAmount += dime
  dollarAmount += penny
  console.log(dollarAmount.toFixed(2));
}
calculateBank(piggyBank);

