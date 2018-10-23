const dollarAmount = 7.43;
const piggyBank = {}

calculateBank = () =>{
  let changeAmount = dollarAmount * 100
  piggyBank.quarter = Math.floor(changeAmount/25)
  let remainingMoney = changeAmount - (piggyBank.quarter * 25)
  piggyBank.dime = Math.floor(remainingMoney/10)
  let leftoverMoney = remainingMoney - (piggyBank.dime * 10)
  piggyBank.nickle = Math.floor(leftoverMoney/5)
  piggyBank.penny = leftoverMoney - (piggyBank.nickle * 5)
  console.log(piggyBank)
}
calculateBank();