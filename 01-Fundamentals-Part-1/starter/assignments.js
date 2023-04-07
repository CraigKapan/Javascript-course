/* ************************** 
Values and Variables
************************** */


let country = "South Africa";
let continent = "Africa";
let population = 59.39;

/*
console.log(country);
console.log(continent);
console.log(population);
*/


let isIsland = false;
let language;

/*
console.log(typeof isIsland);
console.log(typeof population);
console.log(typeof country);
console.log(typeof language);
*/

language = "english";

/* ************************** 
Basic operators
************************** */

const halfPopulation = population / 2;
const finlandPopulation = 6;
const avgPopulation = 30;
population++;
// console.log(population);

// console.log(population > finlandPopulation);
// console.log(population < avgPopulation);

// const description = `${country} is in ${continent} and its ${population} million people speak ${language}`
const description = country + " is " + "in " + continent + " and " + "its " + population + " million " + "people " + "speak " + language;
// console.log(description);

/* ************************** 
Strings and Template Literals
************************** */

const description2 = `${country} is in ${continent} and its ${population} million people speak ${language}`
// console.log(description2);

/* ************************** 
Taking Decisions: if / else Statements
************************** */

if (population > 33) {
    // console.log(`${country}'s population is above average`);
} else {
    // console.log(`${country}'s population is ${33 - population} million below average`);
}