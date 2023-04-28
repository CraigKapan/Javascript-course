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

////////////////////////////////////
// Introduction to Arrays

const friend1 = "Michael";
const friend2 = "Steven";
const friend3 = "Peter";

const friends = ["Michael", "Steven", "Peter"];
console.log(friends);

const y = new Array(1991, 1984, 2008, 2020);

console.log(friends[0]);
console.log(friends[2]);

console.log(friends.length);
console.log(friends[friends.length - 1]);

friends[2] = "Jay";
console.log(friends);
// friends = ["Bob", "Alice"] can't do this

const firstName = "Jonas";
const jonas = [firstName, "Schmedmann", 2037 - 1991, "teacher", friends];
console.log(jonas);
console.log(jonas.length);

// Exercise

function calcAge(birthYear) {
  return 2037 - birthYear;
}

const years = [1990, 1967, 2002, 2010, 2018];

const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]);
console.log(age1, age2, age3);

const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length - 1])]
console.log(ages);
*/
////////////////////////////////////
// Basic Array Operations (Methods)

const friends = ["Michael", "Steven", "Peter"];

// Add elements
const newLength = friends.push("Jay"); // adds elements to end of array
console.log(friends);
console.log(newLength); // returns new length

friends.unshift("John"); // adds elements to start of array
console.log(friends); // returns new lenth

// Remove elemets
friends.pop(); // removes last element
const popped = friends.pop(); // returns popped element
console.log(popped);
console.log(friends);

friends.shift(); // removes first element
console.log(friends); // returns shifted element

console.log(friends.indexOf("Steven")); // place of element(0 based)
console.log(friends.indexOf("Bob")); // if element false = -1

friends.push(23)
console.log(friends.includes("Steven")); // if array has element(true/false)
console.log(friends.includes("Bob"));
console.log(friends.includes(23));

if (friends.includes("Steven")) {
  console.log("You have a friend named Steven");
}
