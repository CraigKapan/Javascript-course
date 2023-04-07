/*

////////////////////////////////////
// Values and Variables

let js = "amazing";
console.log(40 + 8 + 23 - 10);

console.log("Craig");
console.log(23);

let firstName = "Matilda";

console.log(firstName);
console.log(firstName);
console.log(firstName);

// Variable name convention
let craig_matilda = "CM";
let $function = 27;

let person = "craig";
let PI = 3.1415;

let myFirstJob = "Coder";
let currentJob = "Teacher";

let job1 = "programmer";
let job2 = "teacher";

console.log(myFirstJob);

////////////////////////////////////
// Data types
let javascriptIsFun = true;
console.log(javascriptIsFun);

// console.log(typeof true);
console.log(typeof javascriptIsFun);
// console.log(typeof 23);
// console.log(typeof "Craig");

javascriptIsFun = "YES!";
console.log(typeof javascriptIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 1991;
console.log(typeof year);

console.log(typeof null);

////////////////////////////////////
// let, const and var
let age = 30;
age = 31;

const birthYear = 1991;
const job;

var job = "programmer";
job = "teacher";

lastName = "Mutombo";
console.log(lastName);

////////////////////////////////////
// Basic Operators

// Math operators
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2020;
console.log(ageJonas, ageSarah);

console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);
// 2 ** 3 means 2 to the power of 3 = 2 * 2 * 2

const firstName = "Craig";
const lastName = "Mutombo";
console.log(firstName + " " + lastName);

// Assignment operators
let x = 10 + 5;
x += 10; // x = x + 10 = 25
x *= 4; // x = x * 4 = 100
x ++; // x = x + 1
x--;
x--;
console.log(x);

// Comparison operators
console.log(ageJonas > ageSarah); // >, <, >=, <=
console.log(ageSarah >= 18);

const isFullAge = ageSarah >= 18;

console.log(now -1991 > now - 2018);

////////////////////////////////////
// Operator Precedence

const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;

console.log(now - 1991 > now - 2018);

let x, y;
x = y = 25 - 15 - 5; // x = y = 10, x = 10
console.log(x, y);

const avgAge = (ageJonas + ageSarah) / 2
console.log(ageJonas, ageSarah, avgAge);

////////////////////////////////////
// Coding Challenge #1

console.log("Mark 1 Height and Weight");
const markHeight1 = 1.69;
const markWeight1 = 92;
console.log(markHeight1, markWeight1);

console.log(" ");

console.log("John 1 Height and Weight");
const johnHeight1 = 1.95;
const johnWeight1 = 92;
console.log(johnHeight1, johnWeight1);

console.log(" ");

console.log("Mark 2 Height and Weight");
const markHeight2 = 1.88;
const markWeight2 = 95;
console.log(markHeight2, markWeight2);

console.log(" ");

console.log("John 2 Height and Weight");
const johnHeight2 = 1.76;
const johnWeight2 = 85;
console.log(johnHeight2, johnWeight2);

console.log(" ");

console.log("Mark 1 and 2 BMI");
const markBMI1 = markWeight1 / markHeight1 ** 2
const markBMI2 = markWeight2 / (markHeight2 * markHeight2)
console.log(markBMI1, markBMI2);

console.log(" ");

console.log("John 1 and 2 BMI");
const johnBMI1 = johnWeight1 / johnHeight1 ** 2
const johnBMI2 = johnWeight2 / (johnHeight2 * johnHeight2)
console.log(johnBMI1, johnBMI2);

console.log(" ");

console.log("markHigherBMI 1 and 2");
const markHigherBMI1 = markBMI1 > johnBMI1;
const markHigherBMI2 = markBMI2 > johnBMI2;
console.log(markHigherBMI1, markHigherBMI2);

////////////////////////////////////
// Strings and Template Literals

const firstName = "Jonas";
const job = "Teacher";
const birthYear = "1991";
const year = 2037;

const jonas =
  "I'm " + firstName + ", a " + (year - birthYear) + " years old " + job + ".";
console.log(jonas);

const jonasNew = `I'm ${firstName}, a ${year - birthYear} years old ${job}.`;
console.log(jonasNew);

console.log(`A regular string...`);

console.log("String with \n\
multiple \n\
lines");

console.log(`String with
multiple
lines`);

////////////////////////////////////
// Taking Decisions: if / else Statements

const age = 15;

if (age >= 18) {
    console.log("Sarah can start driving license 🚗");
} else {
    const yearsLeft = 18 - age;
    console.log(`Sarah is too young. Wait another ${yearsLeft} years.`);
}

const birthYear = 1991;
let century;
if (birthYear <= 2000) {
    century = 20;
} else {
    century = 21;
}
console.log(century);

////////////////////////////////////
// Coding Challenge #2

const markHeight1 = 1.69;
const markWeight1 = 92;
const johnHeight1 = 1.95;
const johnWeight1 = 92;
const markHeight2 = 1.88;
const markWeight2 = 95;
const johnHeight2 = 1.76;
const johnWeight2 = 85;
const markBMI1 = markWeight1 / markHeight1 ** 2
const markBMI2 = markWeight2 / (markHeight2 * markHeight2)
const johnBMI1 = johnWeight1 / johnHeight1 ** 2
const johnBMI2 = johnWeight2 / (johnHeight2 * johnHeight2)

if (markBMI1 > johnBMI1) {
    console.log(`Marks BMI (${markBMI1}) is higher than John's (${johnBMI1})`);
} else {
    console.log(`Johns BMI (${johnBMI1}) is higher than Marks BMI (${markBMI1})`);
}

////////////////////////////////////
// Type Conversion and Coercion

// type conversion
const inputYear = "1991";
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear + 18));

console.log(Number("Jonas"));
console.log(typeof NaN);

console.log(String(23), 23);

// type coercion
console.log("I am " + 23 + " years old.");
console.log("23" - "10" - 3);
console.log("23" / "2");

let n = "1" + 1; // "11"
n -= 1; // 11 - 1 = 10
console.log(n);

////////////////////////////////////
// Truthy and Falsy Values

// 5 falsy values: 0, "", undifined, null, Nan

console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean("Jonas"));
console.log(Boolean({}));
console.log(Boolean(""));

const money = 0;

if (money) {
    console.log("Don't spend it all 👍");
} else {
    console.log("Get a job rn!! ⚒");
}

let height = 0;
if (height) {
    console.log("Yay!! 😊 defined");
} else {
    console.log("Ney! 😒 UNDEFINED");
}
*/
////////////////////////////////////
//  Equality Operators: == vs. ===

const age = "18";
if (age === 18) console.log("You just became an adult (strict)");

if (age == 18) console.log("You just became an adult (loose)");

const favourite = Number(prompt("What is your favourite number?"));
console.log(favourite);
console.log(typeof favourite);

if (favourite === 23) console.log("Cool bro 23 is cool");
 else if (favourite === 7) console.log("7 is also cool");
 else if (favourite === 10) console.log("10 is a GOATED number"); 
 else console.log(`${favourite} is Lame, it's not 7, 23 or the best number 10`);

if (favourite !== 23) console.log("Number is not 23, WHY?");