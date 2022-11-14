'use strict';

// Default Parameters
/*
const bookings = [];
const createBooking = ( flightNum, numPassengers = 1, price = 199 ) =>
 {
  const booking = {
    flightNum,
    numPassengers,
    price,
    totalFare : price * numPassengers
  };
  return booking;
  bookings.push(booking);
};
let booking_status=null;
createBooking('LH123');
createBooking('LH123', 2, 800); // Overriding the default values
booking_status = createBooking('LH123', 2);
console.log(booking_status)
booking_status = createBooking('LH123', 5);
console.log(booking_status)
createBooking('LH123', undefined, 1000); // Don't want to pass 'numPassengers'
*/



// Passing Arguments: Values vs. Reference
/*
const flight = 'LH234';

const coery = {
  name: 'Coery Rick',
  passport: 24739479284,
};

//Passing primitive variable copy (Copying a value) & passenger object reference (Copying an object)
const checkIn =  (flightNum, passenger) => {
  //flightNum = 'LH999';
  passenger.name = 'Mr. ' + passenger.name;
  if (passenger.passport === 24739479284) {
    alert('Checked in');
  } else {
    alert('Wrong passport!');
  }
};
checkIn(flight, coery);
console.log(flight);
console.log(coery);
*/




// Functions Accepting Callback Functions (Higher Order Functions)
// A functions take other functions as values (inputs) that returns a new funtion or both
/*
const oneWord =  (str) => {
  return str.replace(/ /g, '').toLowerCase();    // selecting all the white places using '//g'
};

const upperFirstWord = (str) => {
  const [first, ...others] = str.split(' ');
  return [first.toUpperCase(), ...others].join(' ');
};
  
// Higher-order function; Creating a new level of abstrction. high order function doesn't 
// care about how the transforming is going to be. The transformation code is abstracted into the callback functions.

const transformer =  (str, fun) => {
  console.log(`Original string: ${str}`);
  console.log(`Transformed string: ${fun(str)}`);
  console.log(`Transformed by: ${fun.name}`);
};

transformer('JavaScript is the best!', upperFirstWord);
transformer('JavaScript is the best!', oneWord);

// JS uses callbacks all the time
const high5 =  ()=> {
  console.log('👋');
};
document.body.addEventListener('click', high5);
*/



// Functions Returning Functions
/*
const greet = (greeting) => {
  return  (name) => {
    console.log(`${greeting} ${name}`);
  };
};
const greeterHey = greet('Hey');

greeterHey('Rick');
greeterHey('Jhon');
greet('Hello')('Jhon');

const greetArr = greeting => name => console.log(`${greeting} ${name}`);
greetArr('Hi')('John');
*/

// Function binding: When passing object methods as callbacks, for instance to setTimeout, 
// there’s a known problem: "losing this".

let user = {
  firstName: "John",
  sayHi() {
    alert(`Hello, ${this.firstName}!`);
  }
};
//setTimeout(user.sayHi, 1000);

// The bind Method: Allows us to set the 'this' for any fucntion call.
// Now it receives 'user' object from the outer scope and then calls the method normally.
let sayHi = user.sayHi.bind(user); 
setTimeout(sayHi, 1000);





// Closures: Happens automatically in some situations
/*
const secureBooking =  () => {
  let passengerCount = 0;    // can't be manipulated outside
  return  () => {
    passengerCount++;
    console.log(`${passengerCount} passengers`);
  };
};

// Here, how the 'booker' function increments the 'passengerCount' which defined in 'secureBooking' 
// that already finished its execution..???
// Closure gives a function access to all the variables of its parent function even after the parent 
// function has returned.
// Closure makes sure that a function doesn't loose connection to variables that existed at the 
// functions birth place.
const booker = secureBooking();
booker();
booker();
booker();



const boardPassengers =  (n, wait) => {
  const perGroup = n / 3;

 setTimeout( () => {
                 console.log(`We are now boarding all ${n} passengers`);
                 console.log(`There are 3 groups, each with ${perGroup} passengers`);
                 }, wait * 1000);
        console.log(`Will start boarding in ${wait} seconds`);
};


 boardPassengers(180, 3);
 */