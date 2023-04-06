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
*/
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