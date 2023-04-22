"use strict";

////////////////////////////////////
//  Activating Strict Mode
/*

let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log("I can drive 🚗");

// const interface = "Audio";
// const private = 534;

////////////////////////////////////
//  Functions

function logger() {
    console.log("My name is Craig");
}

// calling function
logger();
logger();
logger();

function fruitProcessor(apples, oranges) {
    const juice = `Juice with ${apples} apples, and ${oranges} oranges.`;
    return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);

const num = Number("23");

////////////////////////////////////
//  Function Declarations vs. Expressions

// Function declarations
function calcAge1(birthYear) {
    return 2037 - birthYear;
}

const age1 = calcAge1(1991);

// Function expressions
const calcAge2 = function (birthYear) {
    return 2037 - birthYear;
};

const age2 = calcAge2(1991);

console.log(age1, age2);

////////////////////////////////////
// Arrow Functions

// Arrow function
const calcAge3 = (birthYear) => 2037 - birthYear;
const age3 = calcAge3(1991);
console.log(age3);

const yearsUntilRetirement = (birthYear, firstName) => {
    const age = 2037 - birthYear;
    const retirement = 65 - age;
    // return retirement;
  return `${firstName} has ${retirement} years until retirement.`
};

console.log(yearsUntilRetirement(1991, "Jonas"));
console.log(yearsUntilRetirement(1980, "Craig"));

////////////////////////////////////
// Functions Calling Other Functions

function cutFruitPieces(fruit) {
  return fruit * 4;
}

function fruitProcessor(apples, oranges) {
  const applePieces = cutFruitPieces(apples);
  const orangePieces = cutFruitPieces(oranges);
  
  const juice = `Juice with ${applePieces} pieces of apples, and ${orangePieces} pieces of oranges.`;
  return juice;
}

console.log(fruitProcessor(2, 3));

////////////////////////////////////
// Reviewing Functions

const calcAge = function (birthYear) {
  return 2037 - birthYear;
};

const yearsUntilRetirement = function (birthYear, firstName) {
  const age = calcAge(birthYear);
  const retirement = 65 - age;
  
  if (retirement > 0) {
    console.log(`${firstName} has ${retirement} years until retirement.`);
    return retirement;
  } else {
    console.log(`${firstName} has already retired`);
    return -1;
  }
};

console.log(yearsUntilRetirement("1991", "Jonas"));
console.log(yearsUntilRetirement("1950", "Craig"));
*/
////////////////////////////////////
// Coding Challenge #1

const calcAverage = function (value1, value2, value3) {
  return (value1 + value2 + value3) / 3;
};

// const avgKoalas = calcAverage(65, 54, 49);
// const avgDolphins = calcAverage(44, 23, 71);

const scoreKoalas = calcAverage(23, 34, 27);
const scoreDolphins = calcAverage(85, 54, 41);

const checkWinner = function (avgKoalas, avgDolphins) {
  if (avgKoalas >= avgDolphins * 2) {
    console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`);
  } else if (avgDolphins >= avgKoalas * 2) {
    console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`);
  } else {
    console.log("No one wins");
  }
};
checkWinner(scoreKoalas, scoreDolphins);
