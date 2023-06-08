// this is my Approach to the roman numeral generator it takes a number and generates the corresponding roman numeral

// by toluwalase

// this object stores the roman representation of numbers

const romanNums = {
  one:"I",
  five: "V",
  ten: "X",
  fifty: "L",
  hundred:"C",
  fiveHundred: "D",
  thousand:"M"
}

// this exposes romanNums values to the global scope


const {
  one,
  five,
  ten,
  fifty,
  hundred,
fiveHundred,
thousand} = romanNums


// function numtToRom is defined at the bottom but it's called here through hoisting it creates the conversion system based on place value system
const convertUnits = numToRom(one,five,ten)

const convertTens = numToRom(ten,fifty,hundred)

const convertHundreds = numToRom(hundred,fiveHundred,thousand)


const convertThousands = num =>{
  let romNum = ""
  for(let i = num; i>=1; i-- ){
   romNum+="M"
  }
return romNum
}



// this is the function th<F11><F11><F11>at actually genrates the roman numeral from a given number
 function generateRomanNum(num){
 const numString = `${num}`;

  const numArray = numString
    .split("")
    .map((x)=> parseInt(x,10));

  const unit = convertUnits(
   numArray[numArray.length-1])

const tens = convertTens(numArray[numArray.length-2])

  const hundreds = convertHundreds(
numArray[numArray.length-3])
  
const thousands = convertThousands(
  numArray[numArray.length-4])


  return (thousands +hundreds +tens +unit)
}

//console.log(generateRomanNum(2345))

// this function takes a one, a five and a 
// ten of any place value system and returns a function that takes the nunber to be converted as an argument
// note that  one,five and ten are the corresponding string in the roman numeral place value system
// example one in units is I,but one in tens is x
// five in units is v but L in Tens and D in hundreds and so on  same for ten,X,C,M 
// e.t.c
function numToRom(one,five,ten) {

  return (num) => {
  
    let romNum = '';

 if(num <= 3){
for(let i=num; i>= 1; i--){
  romNum+=one
}
 }
else if(num == 4){
  romNum = one+five
 }
else if(num == 5){
  romNum = five
 }
else if(num > 5 && num !=9 ){
romNum += five
  for(let i= num-5; i>= 1; i--){
  romNum+=one
 }
}else if (num == 9){
  romNum = one+ten
}
    return romNum
  }
}

module.exports = generateRomanNum

