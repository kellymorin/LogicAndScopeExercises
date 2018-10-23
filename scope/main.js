// C is for cookie
const cookies = ["Oatmeal Raisin", "Chocolate Chip", "Sugar", "Peanut Butter", "Snickerdoodle", "Ginger"]
let y = 1

for (let x = 1; x < cookies.length; x++) {
  let currentCookie = cookies[x];
  console.log(`Mmmmmmm... that's a good ${currentCookie} cookie`)
}

// Conjunction Function
const conjunction = function (firstWord, secondWord) {
  const conjoinedWord = `${firstWord} ${secondWord}`
  console.log(conjoinedWord)
}

conjunction("Master", "Card")

// Mod Squad
{
  const ModSquad = {
      "members": ["Pete Cochran", "Linc Hayes", "Julie Barnes", "Capt. Adam Greer", "Chief Barney Metcalf"],
      "series": {
          "start": "1968",
          "end": "1973"
      }
  }

  let HTMLRepresentation = `<h1>The Mod Squad</h1>`
  
  ModSquad.members.forEach(member => {
      HTMLRepresentation += `<div>${member}</div>`
  })
}
// document.querySelector(".show-info").innerHTML = HTMLRepresentation

// Simon Says
const locations = [[1,1], [1,2], [1,3], [2,1], [2,2], [2,3]]
let j = 0

for (let k = 0; k < locations.length; k++) {
    let currentLocation = locations[k]
    let invalidLocation = " "

    if (currentLocation[0] > 2) {
      invalidLocation = true;
    }

    if (invalidLocation) {
        console.log("This location is invalid")
        j++
    }
}

/*
    Since k is used as the loop counter, it will be the
    total number of locations, not the invalid ones. You
    need to fix this somehow.
*/
console.log(`There were ${j} invalid locations`)

// Advanced Challenge: Lambda Llama
const llamaNamer = function () {
  const possibleNames = ["Larry", "Leon", "Leona", "Les", "Laura", "Lemony", "Lars", "Lekisha"]
  const randomizer = Math.floor(Math.random() * 7)
  // return namer
  // return possibleNames[randomizer]

  return function () {
      let suffix = " the Llama"
      let name = possibleNames[randomizer]
      return name + suffix
    }
}

nameMaker = llamaNamer()
console.log(nameMaker())