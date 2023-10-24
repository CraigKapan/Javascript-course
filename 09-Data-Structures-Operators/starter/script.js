'use strict';

const openingHours = {
  thu: {
    open: 12,
    close: 22,
  },
  fri: {
    open: 11,
    close: 23,
  },
  sat: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  openingHours,

  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery({ starterIndex = 1, mainIndex = 0, time = '20:00', address }) {
    console.log(
      `Order recieved! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },

  orderPasta: function (ing1, ing2, ing3) {
    console.log(`Pasta with ${ing1}, ${ing2} and ${ing3}`);
  },

  orderPizza: function (mainIng, ...otherIng) {
    console.log(mainIng, otherIng);
  },
};

restaurant.orderDelivery({
  time: '22:30',
  address: '3 west ave',
  mainIndex: 2,
  starterIndex: 2,
});
restaurant.orderDelivery({
  address: '3 west ave',
  starterIndex: 1,
});

///////////////////////////////
// Destructuring Arrays

/*
const arr = [2, 3, 4];
const a = arr[0];
const b = arr[1];
const c = arr[2];

const [x, y, z] = arr;
console.log(x, y, z);
console.log(arr);

const [main, , secondary] = restaurant.categories;
console.log(main, secondary);

// let temp = main;
// main = secondary;
// secondary = temp;
// console.log(main, secondary);

[main, secondary] = [secondary, main];
console.log(main, secondary);

const [starter, mainCorse] = restaurant.order(2, 0);
console.log(starter, mainCorse);

const nested = [2, 4, [5, 6]];
// const [i, , j] = nested;
// console.log(i, j);

const [i, , [j, k]] = nested;
console.log(i, j, k);

const [p=1, q=1, r=1] = [8, 9];
console.log(p, q, r);

///////////////////////////////
// Destructuring Objects

const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
console.log(restaurantName, hours, restaurant);

const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);

let a = 111;
let b = 999;

const obj = { a: 23, b: 7, c: 14 };

({ a, b } = obj);
console.log(a, b);

const {
  fri: { open: o, close: c },
} = openingHours;
console.log(o, c);

///////////////////////////////
// The Spread Operator (...)

const arr = [7, 8, 9];
const addNewArr = [1, 2, arr[0], arr[1], arr[2]];
console.log(addNewArr);

const newArr = [1, 2, ...arr];
console.log(newArr);

console.log(...newArr);

const newMenu = [...restaurant.mainMenu, 'Gnocci'];

const mainMenuCopy = [...restaurant.mainMenu];

const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(menu);

const str = 'Jonas';
const letters = [...str, ' ', 'S.'];
console.log(letters);

const ingredients = [
  prompt("Let/'s make pasta! Ingredient 1?"),
  prompt('Ingredient 2?'),
  prompt('Ingredient 3?'),
];

console.log(ingredients);

restaurant.orderPasta(...ingredients);

const newRestaurant = {foundedIn: 1998 , ...restaurant, founder: "Craig"}

const restaurantCopy = {...restaurant};
restaurantCopy.name = "Nsue litten"
console.log(restaurantCopy.name);
console.log(restaurant.name);

///////////////////////////////
// Rest Pattern and Parameters

// 1) desructuring

// Spread because on RIGHT SIDE of =
const arr = [1, 2, ...[3, 4]];

// Rest because on LEFT SIDE of =
const [a, b, ...others] = [1, 2, 3, 4, 5];
console.log(a, b, others);

const [pizza, , Risotto, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];

console.log(pizza, Risotto, otherFood);

// Objects

const { sat, ...weekdays } = restaurant.openingHours;
console.log(weekdays);

// 2) functions
const add = function (...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) sum += numbers[i];
  console.log(sum);
};

add(2, 3);
add(3, 4, 6, 7);
add(1, 2, 3, 4, 6, 7, 8);

const x = [23, 5, 7];
add(...x);

restaurant.orderPizza('mushrooms', 'onions', 'olives', 'spinach');

///////////////////////////////
// Short Circuiting (&& and ||)

// OR

// Use and return any data type, short-circuting
console.log(3 || "Jonas");
console.log("" || "Jonas");
console.log(true || 0);
console.log(undefined || null);

restaurant.numGuests = 23;
const guests1 = restaurant.numGuests ? restaurant.numGuests : 10

const guest2 = restaurant.numGuests || 10

// And

console.log(0 && "Jonas");
console.log(7 && "Jonas");

if (restaurant.orderPizza) {
  restaurant.orderPizza("mushrooms", "spinach")
}

restaurant.orderPizza && restaurant.orderPizza("mushrooms", "spinach")

///////////////////////////////
// The Nullish Coalescing Operator (??)

restaurant.numGuests = 0;
const guests = restaurant.numGuests || 10
console.log(guests);

const guestsCorrect = restaurant.numGuests ?? 10;
console.log(guestsCorrect);

///////////////////////////////
// Logical Assignment Operators

const rest1 = {
  name: 'Capri',
  numGuests: 0,
};

const rest2 = {
  name: 'La Piazza',
  owner: 'Creg Maval',
};

// rest2.numGuests = rest2.numGuests || 10;
// rest1.numGuests = rest1.numGuests || 10;

// rest1.numGuests ||= 10;
// rest2.numGuests ||= 10;

rest1.numGuests ??= 10;
rest2.numGuests ??= 10;

// rest1.owner = rest1.owner && "<ANONYMOUS>"
// rest2.owner = rest2.owner && "<ANONYMOUS>"

rest1.owner &&= '<ANONYMOUS>';
rest2.owner &&= '<ANONYMOUS>';

console.log(rest1);
console.log(rest2);

///////////////////////////////
// Coding Challenge #1

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

const players1 = [
  'Neuer',
  'Pavard',
  'Martinez',
  'Alaba',
  'Davies',
  'Kimmich',
  'Goretzka',
  'Coman',
  'Muller',
  'Gnarby',
  'Lewandowski',
];

const players2 = [
  'Burki',
  'Schulz',
  'Hummels',
  'Akanji',
  'Hakimi',
  'Weigl',
  'Witsel',
  'Hazard',
  'Brandt',
  'Sancho',
  'Gotze',
];


const [gk1, ...fieldPlayers1] = players1;
const [gk2, ...fieldPlayers2] = players2;

const allplayers = [...players1, ...players2]
console.log(allplayers);

const players1Final = [...players1, "Thiago", "Coutinho", "Perisic"];

const {team1, draw, team2} = game.odds;

const printGoals = function (...players) {
  console.log(players);
  console.log(`${players.length} goals were scored`);
};

printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');
printGoals('Davies', 'Muller');
printGoals(...game.scored);

// 7.
team1 < team2 && console.log('Team 1 is more likely to win');
team1 > team2 && console.log('Team 2 is more likely to win');

printGoals()

///////////////////////////////
//  Looping Arrays: The for-of Loop

const menu = [...restaurant.starterMenu, ...restaurant.mainMenu]

for (const item of menu) 
 console.log(item);

for (const [i, el] of menu.entries()) 
 console.log(`${i + 1}: ${el}`);

///////////////////////////////
//  Enhanced Object Literals

///////////////////////////////
//  Optional Chaining (?.)
if (restaurant.openingHours && restaurant.openingHours.mon)
console.log(restaurant.openingHours.mon.open);

console.log(restaurant?.openingHours?.mon?.open);

const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

for (day of days) {
  console.log(day);
  restaurant.openingHours[day]?.open ?? 'closed';
  console.log(`on ${day}, we open at ${open}`);
}

console.log(restaurant.order?.(0, 1) ?? 'Method is no existant');
console.log(restaurant.orderRisotto?.(0, 1) ?? 'Method is no existant');

const users = [
  {
    name: 'Jonas',
    email: 'hello@jonas.io',
  },
];

console.log(users[0]?.name ?? "array empty");
*/
///////////////////////////////
//   Looping Objects: Object Keys, Values, and Entries

// Property names
const properties = Object.keys(openingHours);
console.log(properties);

let openStr = `we are open on ${properties.length} days: `;

for (const day of properties) openStr += `${day}, `;

// property values

const values = Object.values(openingHours);
console.log(values);

// Entire object
const entries = Object.entries(openingHours);

for(const [day, {open, close}] of entries){
  console.log(`On ${day} we open at ${open} and close on ${close}`);
}