"use strict";

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
const description =
  country +
  " is " +
  "in " +
  continent +
  " and " +
  "its " +
  population +
  " million " +
  "people " +
  "speak " +
  language;
// console.log(description);

/* ************************** 
Strings and Template Literals
************************** */

const description2 = `${country} is in ${continent} and its ${population} million people speak ${language}`;
// console.log(description2);

/* ************************** 
Taking Decisions: if / else Statements
************************** */

if (population > 33) {
  // console.log(`${country}'s population is above average`);
} else {
  // console.log(`${country}'s population is ${33 - population} million below average`);
}

/* ************************** 
Type Conversion and Coercion
************************** */

// console.log("9" - "5");
// console.log("19" - "13" + "17");
// console.log("19" - "13" + 17);
// console.log("123" < 57);
// console.log(5 + 6 + "4" + 9 - 4 - 2);

/* ************************** 
 Equality Operators: == vs. ===
************************** */

// const numNeighbours = Number(
//   prompt("How many neighbouring countries does your country have?")
//   );

//   if (numNeighbours === 1) console.log("Only 1 border!");
//   else if (numNeighbours > 1) console.log("More than 1 border");
//   // else console.log("No borders");

/* ************************** 
 Logical Operators
************************** */

// if (language === "english" && population < 50 && !isIsland)
//   console.log(`you should live in ${country} :)`);
//     else
//       console.log(`${country} does not meet your criteria :(`);

/* ************************** 
  The switch Statement
************************** */

switch (language) {
  case "chinese":
  case "mandarin":
    // console.log("MOST number of native speakers");
    break;

  case "spanish":
    // console.log("2nd place in number of native speakers");
    break;

  case "english":
    // console.log("3rd place");
    break;

  case "hindi":
    // console.log("Number 4");
    break;

  case "arabic":
    // console.log("5th most spoken language");
    break;

  default:
  // console.log("Great language too :D");
}

/* ************************** 
  The Conditional (Ternary) Operator
************************** */

// console.log(population > 33 ? console.log(`${country}'s population of ${population} is above average`) : console.log(`${country}'s population of ${population} is below average`));

/* ************************** 
  Functions
************************** */

function describeCountry(country, population, capitalCity) {
  const description = `${country} has ${population} million people and its capital city is ${capitalCity}`;
  return description;
}

const decriptionofSA = describeCountry("South Africa", 59, "Cape Town");
// console.log(decriptionofSA);

/* ************************** 
  Function Declarations vs. Expressions
************************** */

const worldPopulation = 7900;

function percentageOfWorld1(population) {
  return population / 7900;
}

// console.log(percentageOfWorld1(59));

const percentageOfWorld2 = function (population) {
  return 7900 / population;
};

// console.log(percentageOfWorld2(59));

/* ************************** 
 Arrow Functions
************************** */

const percentageOfWorld3 = (population) => 7900 / population;

// console.log(percentageOfWorld3(1723));

/* ************************** 
 Functions Calling Other Functions
************************** */

const describePopulation = function (country, population) {
  return `${country} has ${population} million people, which is about ${percentageOfWorld1(
    population
  )}% of the world`;
};

// console.log(describePopulation("South Africa", 1923));

/* ************************** 
  Introduction to Arrays
************************** */

const populations = [population, finlandPopulation, avgPopulation, 20];

// console.log(populations.length === 4);

const percentages = [
  percentageOfWorld1(populations[0]),
  percentageOfWorld1(populations[1]),
  percentageOfWorld1(populations[2]),
  percentageOfWorld1(populations[populations.length - 1]),
];

// console.log(percentages);

/* ************************** 
  Basic Array Operations (Methods)
************************** */

const neighbours = ["Congo", "France", "Egypt"];
neighbours.push("Utopia");
neighbours.pop();

// const isCentralEuropean = neighbours.includes("Germany")
//   ? "is a central European country :D"
//   : "is not a central European country :D";

if (!neighbours.includes("Germany")) {
  // console.log('Probably not a central European country :D');
}

// console.log(`you country ${isCentralEuropean}`);

neighbours[neighbours.indexOf("Congo")] = "Republic of Congo";

// console.log(neighbours);

/* ************************** 
  Introduction to Objects
************************** */

// const myCountry = {
//   country: "South Africa",
//   capital: "Cape Town",
//   language: "English",
//   population: 59,
//   neighbours: ["Congo", "France", "Egypt"],
// };

/* ************************** 
Dot vs. Bracket Notation
************************** */

// console.log(`${myCountry.country}, has ${myCountry.population} million ${myCountry.language}-speaking people, ${myCountry.neighbours.length} neighbouring countries and a capital called ${myCountry.capital}.`);

/* ************************** 
Object Methods
************************** */

const myCountry = {
  country: "South Africa",
  capital: "Cape Town",
  language: "English",
  population: 59,
  neighbours: ["Congo", "France", "Egypt"],

  describe: function () {
    return `${this.country}, has ${this.population} million ${this.language}-speaking people, ${this.neighbours.length} neighbouring countries and a capital called ${this.capital}.`
  }
};

// console.log(myCountry.describe());