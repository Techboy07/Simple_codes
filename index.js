// Roman numeral generator
//
const getRomanFrom = require("./romanNumerals.js")

function printRoman(num) {
  console.log(`${num} is:  ${getRomanFrom(num)} in roman figures`)
}


printRoman(5235)
