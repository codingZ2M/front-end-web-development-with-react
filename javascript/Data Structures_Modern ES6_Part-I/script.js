'use strict';

// Destructuring Arrays (ES6): A way of unpacking values from an array or an object into separate variables.
/*
let restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
}

let [main, , secondary] = restaurant.categories;
console.log(main, secondary);

[main, secondary] = [secondary, main] // Switching variable values using array destructring
console.log(main, secondary);
*/


/*
  const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  openingHours: '09:00 AM EST',

  order: function (starterIndex, mainIndex) {
    return [ this.starterMenu[starterIndex], this.mainMenu[mainIndex] ];
  },
};
// // Calling a function: Recieving values from a function using destructring
const [starter, mainCourse ] = restaurant.order(2, 1)
console.log(` Starter is : ${starter},  Main Course is : ${mainCourse} `)
*/



// Destructring Nested Arrays
/*
const categories_starters  =  ['Italian', 'Pizzeria', 'Vegetarian', ['Garlic Bread', 'Caprese Salad']]
let [category, , , starters] = categories_starters;
console.log(category, starters);

const [catgy, , , [first, ,] ]= categories_starters;
console.log(catgy, first);
*/


// ******************Destructuring Objects***************************
/*
const restaurant = {
  restaurantName: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours : {
    thu: {            // Nested Object
    open: 12,
      close: 22,
    },
   fri:  {
      open: 11,
      close: 23,
    },
    sat:{
   open: 0, // Open 24 hours
      close: 24,
    },
  },

  order: function(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  
// Destructuring an object which is passed to the function
// Default values if the an object props are destructured. 
orderDelivery: function ( { starterIndex = 1, mainIndex = 0, time = '20:00', address } ) {
  console.log(
    `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
  );
 },

}

const {restaurantName, openingHours, categories} = restaurant;
console.log(restaurantName, openingHours, categories);

// Calling a function
restaurant.orderDelivery(  {       // Passing one object (one argument)
                            starterIndex: 2,
                            mainIndex: 1,
                            address: 'SBT, 35',
                             time: '11:35 AM',
                            }
                       )
*/




//  Spread Operator (...) Used to expand (unpacking) an array into an individual elements.
/*
const arr  = [ 5, 6, 7,8];
const newArr = [ 1, 2, ...arr];

console.log(newArr);

// Iterables: strings, arrays, maps, sets, NOT objects

const str = 'Rick';
const letters = [...str, ' ', 'Z.'] // Unpacking string using spread operator
console.log(letters);


let restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  orderPasta(ing1, ing2, ing3) {
    console.log(
      `Here is your declicious pasta with ${ing1}, ${ing2} and ${ing3}`
    );
  },
}
let menu = [...restaurant.mainMenu, 'Gnocci'];
console.log(menu);

// copy array
const menuCopy = [...restaurant.mainMenu];
console.log(menuCopy);

//joining arrays
//menu =  [ ...restaurant.mainMenu, restaurant.starterMenu];
menu =  [ ...restaurant.mainMenu, ...restaurant.starterMenu];
console.log(menu);

//Real world example
const ingredients = [
              prompt('Let\'s make Pasta! Ingredient1?'),
              prompt('Let\'s make Pasta! Ingredient2?'),
              prompt('Let\'s make Pasta! Ingredient3?'),
            ];

 restaurant.orderPasta(...ingredients);

// Objects
const newRestaurant = { foundedIn: 1990, ...restaurant}
console.log(newRestaurant);
*/



// Rest Pattern: Used to pack an elements into an array.=

const arr = [1, 2, ...[3, 4]];

// REST, because on LEFT side of =
const [a, b, ...othersNumbers] = [1, 2, 3, 4, 5, 6, 7];
console.log(a, b, othersNumbers);

let restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  openingHours : {
    thu: {            // Nested Object
    open: 12,
      close: 22,
    },
   fri:  {
      open: 11,
      close: 23,
    },
    sat:{
   open: 0, // Open 24 hours
      close: 24,
    },
  },
  orderPizza: function(mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
}

// Using Destructuring & Packing into an array using REST operator
const [pizza, , risotto, ...otherFood] = [
                                            ...restaurant.mainMenu,
                                            ...restaurant.starterMenu,
                                          ];
console.log(pizza, risotto, otherFood);

// Objects
// Using Destructuring & Packing into an array using REST operator
const { sat, ...weekdays } = restaurant.openingHours;
console.log(weekdays);


// 2) Functions
// Taking multiple values and packing into single array.
const add = function (...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) sum += numbers[i];
  console.log(sum);
};
add(2, 3);
add(5, 3, 7, 2);
add(8, 2, 5, 3, 2, 1, 4);

const x = [23, 5, 7];
add(...x);
restaurant.orderPizza('mushrooms', 'onion', 'olives', 'spinach');
restaurant.orderPizza('mushrooms');




