'use strict';

// Looping Arrays: The for-of Loop
/*
let restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
}
const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];

for (const item of menu)    // Using 'for-of'  loop
  console.log(item);

for ( const [index, element] of menu.entries() )    // Using 'for-of'  loop
console.log(`${index + 1}: ${element}`);
*/



// Enhanced Object Literals
/*
const openingHours = {
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
};

const restaurant = {
  restaurantName: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
 
  openingHours,    // using 'openingHours' object
  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  
// Destructuring an object which is passed to the function
// Default values if the an object props are destructured. 
orderDelivery: function ({ starterIndex = 1, mainIndex = 0, time = '20:00', address }) {
  console.log(
    `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
  );
 },
}
const [starter, mainCourse ] = restaurant.order(2, 1)
console.log(starter, mainCourse)
*/



// Working With Strings - Part 1
/*
const airline = 'TAP Air Portugal';
const plane = 'A320';
//console.log(plane[0]);
//console.log(plane[1]);
//console.log(plane[2]);
//console.log('B737'[0]);

console.log(airline.length);
console.log('B737'.length);
console.log(airline.indexOf('r'));
console.log(airline.lastIndexOf('r'));
console.log(airline.indexOf('portugal'));
console.log('-------------------------------')
console.log(airline.slice(4));
console.log(airline.slice(4, 7));

// Extracting the string without knowing the indexes using indexOf()
console.log(airline.slice(0, airline.indexOf(' ')));
console.log(airline.slice(airline.lastIndexOf(' ') + 1));

console.log(airline.slice(-2));
console.log(airline.slice(1, -1));

const checkMiddleSeat =  (seat) => {
  // B and E are middle seats
  const s = seat.slice(-1);
  if (s === 'B' || s === 'E') console.log('You got the middle seat 😬');
  else console.log('Try Your luck next time 😎');
};
checkMiddleSeat('11B');
checkMiddleSeat('23C');
checkMiddleSeat('3E');

console.log(new String('Coery'));
console.log(typeof new String('Coery'));
console.log(typeof new String('Coery').slice(1));
*/



// Working With Strings - Part 2
/*
const airline = 'TAP Air Portugal';
console.log(airline.toLowerCase());
console.log(airline.toUpperCase());

// Fix capitalization in name
const passenger = 'jOHn'; // John
const passengerLower = passenger.toLowerCase();
const passengerCorrect =
  passengerLower[0].toUpperCase() + passengerLower.slice(1);
console.log(passengerCorrect);

// Comparing emails
const email = 'test@gmail.com';
const loginEmail = '  Test@gmail.com \n';
const normalizedEmail = loginEmail.toLowerCase().trim();
console.log(normalizedEmail);
console.log(email === normalizedEmail);

// replacing
const priceGB = '288,97£';
const priceUS = priceGB.replace('£', '$').replace(',', '.');
console.log(priceUS);

const announcement =
  'All passengers come to boarding door 23. Boarding door 23!';
console.log(announcement.replace('door', 'gate'));
 console.log(announcement.replaceAll('door', 'gate'));
//console.log(announcement.replace(/door/g, 'gate'));

// Booleans
const plane = 'Airbus A320neo';
console.log(plane.includes('A320'));
console.log(plane.includes('Boeing'));
console.log(plane.startsWith('Airb'));

if (plane.startsWith('Airbus') && plane.endsWith('neo')) {
  console.log('Part of the NEW ARirbus family');
}

// Practice exercise
const checkBaggage = (items) => {
  const baggage = items.toLowerCase();
  if (baggage.includes('knife') || baggage.includes('gun')) {
    console.log('You are NOT allowed on board');
  } else {
    console.log('Welcome aboard!');
  }
};
checkBaggage('I have a laptop, some Food and a pocket Knife');
checkBaggage('Socks and camera');
checkBaggage('Got some snacks and a gun for protection');
*/



// Working With Strings - Part 3
// Split and join
/*
console.log('a+very+nice+string'.split('+'));
console.log('Rick Coery'.split(' '));

// Creating an array & destructuring it.
const [firstName, lastName] = 'Rick Coery'.split(' ');

const newName = ['Mr.', firstName, lastName.toUpperCase()].join(' ');
console.log(newName);

const capitalizeName =  (name) => {
  const names = name.split(' ');
  const namesUpper = [];
  for (const n of names) {
    namesUpper.push(n.replace(n[0], n[0].toUpperCase()));
  }
  console.log(namesUpper.join(' '));
};
capitalizeName('jessica ann smith davis');
capitalizeName('Rick Coery');
*/
//Padding
/*
const message = 'Go to gate 23!';
console.log(message.padStart(20, '+').padEnd(30, '+'));
console.log('Coery'.padStart(20, '+').padEnd(30, '+'));

const maskCreditCard = (number) => {
  const str = number + '';  // converting as string
  const last = str.slice(-4);
  return last.padStart(str.length, '*');
};
console.log(maskCreditCard(64637836));
console.log(maskCreditCard(43378463864647384));
console.log(maskCreditCard(334859493847755774747));
*/
// Repeat
/*
const message2 = 'Bad waether... All Departues Delayed... ';
console.log(message2.repeat(5));

const planesInLine =  (n)=> {
  console.log(`There are ${n} planes in line ${'✈️'.repeat(n)}`);
};
planesInLine(5);
planesInLine(3);
planesInLine(12);
*/