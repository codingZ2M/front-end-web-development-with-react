'use strict';  // Activating Strict Mode.... writing secure JS code... avoiding accidental errors... showing visible errors


//******************** Activating Strict Mode *****************
/*
let hasPersonalAssistance = false;
const booking = true;

if (booking) 
  hasPersonalAssistance = true;

if (hasPersonalAssistance) console.log('Passenger needs personal assistance');
//if (hasPersonalAssistanc) console.log('I can drive :D');

//const interface = 'Product';
//const private = 3.14;
*/


// **************** Functions ********************
// Reusable piece of code and it can be reused over and over again
/*
function getCustomerName() {    // Function declaration
  console.log('Customer Name: Rick');
}

// calling / running / invoking function
getCustomerName();
getCustomerName();

// Functions are taking inputs, transforming and returning data
// Here function parameters are representing the input data
function booking(oneway, passengers, from, to, departureDate, seniorCitizen ) {

  const bookingStatus = `Booking with One Way: ${oneway}, ${passengers} passengers
   from ${from} to ${to} on ${departureDate}, Senior Citizen: ${seniorCitizen}`;

  return bookingStatus
}

const bookingStatus = booking(true, 3, 'DEL', 'NYC', '21-02-2021', false); // Passing inputs/arguments to the function parameters
console.log(bookingStatus);

const num1 = Number('23');  // calling built-in function
const num2= String(23);  // calling built-in function
*/




// ****************** Function Declarations vs. Expressions ************************
// Note: Function Declarations: You can call it first and declare it later.
/*
let now = 2021;
function calcPassengerAge(birthYear) {
 let age = now - birthYear;
  return age;
 
}

const age1 = calcPassengerAge(1989);

// Function expression: You can't access the function before the initialization
const calculatePassengerAge = function (birthYear) {  // Anonymous Function & its stored in a variable
  return now - birthYear;
}

const age2 = calculatePassengerAge(1990);

console.log(`${age1}  
${age2}`
          );

*/


// *************************** Arrow functions ***************************************
// Note: No need to use 'this' keyword
/*
let now = 2021;

const yearsUntilSeniorCitizen = (birthYear, firstName) => {
  const age = now - birthYear;
  const seniorCitizen = 65 - age;

  return `${firstName}'s Age Is: ${age} years old & 
       passenger has left ${seniorCitizen} years
       to avail senior citizen booking charges.`;
}
let result = yearsUntilSeniorCitizen(1991, 'Rick')
console.log(result); 
console.log(yearsUntilSeniorCitizen(1980, 'Coery'));
*/


// *********************** Functions Calling Other Functions *************************
/*
const calcFare = (passengers, fare) => {
  return fare * passengers;
}

const booking = (oneway, fare, passengers, from, to, departureDate, seniorCitizen ) => {

   const totalFare = calcFare (passengers, fare);

  const bookingStatus = `Booking with One Way: ${oneway}, ${passengers} passengers 
  from ${from} to ${to} on ${departureDate}, Senior Citizen: ${seniorCitizen} &
   Total Fare: $${totalFare}`;
  return bookingStatus

}

const bookingStatus = booking(true, 550.00, 3, 'DEL', 'NYC', '21-02-2021', false); // Passing inputs/arguments to the function parameters
console.log(bookingStatus);
*/



//***************** Reviewing Functions *****************
/*
const calcFare = (passengers, fare) => {
  return fare * passengers;
}
const booking  =  (oneway, fare, passengers, from, to, departureDate, seniorCitizen ) => {
   const totalFare = calcFare (passengers, fare); 

   if(totalFare > 1500.00) {
   const bookingStatus = `Flat 10% OFF Booking with One Way: ${oneway}, ${passengers} passengers from ${from} to ${to} on ${departureDate}, Senior Citizen: ${seniorCitizen} & Total Fare: $${totalFare}`;
   return  bookingStatus;
  }
   else {
   const bookingStatus = `No Offers Booking with One Way: ${oneway}, ${passengers} passengers from ${from} to ${to} on ${departureDate}, Senior Citizen: ${seniorCitizen} & Total Fare: $${totalFare}`;
   return  bookingStatus; 
  }
}

const bookingConfirmation = booking(true, 550.00, 3, 'DEL', 'NYC', '21-02-2021', false); // Passing inputs/arguments to the function parameters
console.log(bookingConfirmation);
*/




// ********************* Exercise ***********************
/*
const calcAverage = (a, b, c) => { 
                                  (a + b + c) / 3 
                                };

const checkWinner = (avgDolphins, avgKoalas) => {
  if (avgDolphins >= 2 * avgKoalas) {
    return `Dolphins win  ( ${avgDolphins} vs. ${avgKoalas} )`;
  } else if (avgKoalas >= 2 * avgDolphins) {
    return `Koalas win  (${avgKoalas} vs. ${avgDolphins})`;
  } else {
   return 'No team wins...';
  }
}

// Test 1
let res='';
let scoreDolphins = calcAverage(44, 23, 71);
let scoreKoalas = calcAverage(65, 54, 49);

 res = checkWinner(scoreDolphins, scoreKoalas);
console.log(res);

// Test 2
scoreDolphins = calcAverage(85, 54, 41);
scoreKoalas = calcAverage(23, 34, 27);
res =checkWinner(scoreDolphins, scoreKoalas);
console.log(res);
*/

//****************** Arrays - Data Structure **************************
/*
const friend1 = 'Michael';
const friend2 = 'Steven';
const friend3 = 'Peter';

let friends = ['Michael', 'Steven', 'Peter'];
console.log(friends);

const yrs = new Array(1991, 1984, 2008, 2020); // using Array Function

console.log(friends[0]);
console.log(friends[2]);

console.log(friends.length);
console.log(friends[friends.length - 1]);

friends[2] = 'Coery';   // Array is mutable
console.log(friends);

const firstName = 'Rick';
const employee = [firstName, 'Coery', 2021 - 1991, 'Programmer', friends];
console.log(employee);
console.log(employee.length);

// Exercise
const calcAge = (birthYear) => {
  return 2021 - birthYear;
}
const years = [1990, 1967, 2002, 2010, 2011];

const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);

const age3 = calcAge(years[years.length - 1]);

console.log(age1, age2, age3);

const allAges = [ calcAge( years[0]), calcAge(years[1]), calcAge(years[years.length - 1] )];
console.log(allAges);
*/



//******************** Basic Array Operations (Methods) **************************
/*
const friends = ['Michael', 'Steven', 'Peter'];

// Add elements
const newLength = friends.push('Mike');
console.log(friends);
console.log(newLength);

friends.unshift('John');
console.log(friends);


// Remove elements  
friends.pop(); // Last
const popped = friends.pop(); // storing the popped element
console.log(`You removed ${popped}`);
console.log(friends);

friends.shift(); // First
console.log(friends);

console.log(friends.indexOf('Steven'));
console.log(friends.indexOf('Bob'));

friends.push(23);
console.log(friends.includes('Steven'));
console.log(friends.includes('Bob'));
console.log(friends.includes(23));

if ( friends.includes('Steven') ) {
  console.log('You have a friend called Steven');
}
*/




//******************** Tip Calculator ****************************
/*
const calcTip =  (bill) => {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}
//const calcTip1 = (bill) => {return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2};

const bills = [125, 555, 44];
const tips = [ calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2]) ];

const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];

console.log(bills, tips, totals);
*/


//************ Introduction to Objects - Data Structure *********************
/*
const employeeArray = [
  'Rick',
  'Coery',
  2037 - 1991,
  'teacher',
  ['Michael', 'Peter', 'Steven']
];

const employee = {
  firstName: 'Rick',
  lastName: 'Coery',
  age: 2037 - 1991,
  job: 'teacher',
  friends: ['Michael', 'Peter', 'Steven']
};
*/

//**************** Dot vs. Bracket Notation *******************
/*
const customer = {
  firstName: 'Rick',
  lastName: 'Mike',
  age: 2037 - 1991,
  job: 'teacher',
  friends: ['Michael', 'Peter', 'Steven']
};
console.log(customer);

console.log(customer.lastName);  // Accessing the property from an object
console.log(customer['lastName']); // Accessing the property from an object using bracket notation

const nameKey = 'Name';
console.log(customer['first' + nameKey]); // Use of Bracket Notation
console.log(customer['last' + nameKey]); // 

const interestedIn = prompt('What do you want to know about Customer? Choose between firstName, lastName, age, job, and friends');

if (customer[interestedIn]) {  // Use of Bracket Notation
  console.log(`User Entered ${interestedIn}: ${customer[interestedIn]}`);
} else {
  console.log('Wrong request! Choose between firstName, lastName, age, job, and friends');
}

customer.location = 'Portugal';
customer['twitter'] = '@purple';
console.log(customer);

// "Jonas has 3 friends, and his best friend is called Michael"
console.log(`${customer.firstName} has ${customer.friends.length} friends, and his best friend is called ${customer.friends[0]}`);
*/



//****************** Object Methods with this keyword ***********************
/*
const coery = {
  firstName: 'Coery',
  lastName: 'Jhon',
  birthYear: 1991,
  job: 'teacher',
  friends: ['Michael', 'Peter', 'Steven'],
  hasDriversLicense: true,

  calcAge: function (birthYear)  {   // Function inside an object as key value pair & function name is used as objects's property
    this.age = 2021 - birthYear;
    return this.age;
  },

  getSummary: function () {
    return `${this.firstName} is a ${this.calcAge(1990)}-year old ${coery.job}, and he has ${this.hasDriversLicense ? 'a' : 'no'} driver's license.`
  }
};

//console.log(coery.calcAge(1990));
//console.log(coery['calcAge'](1990)); // Using Bracket Notation
console.log(coery.getSummary());
*/


//**************** Comparing BMIs *****************************
/*
const mark = {
  fullName: 'Mark Miller',
  mass: 78,
  height: 1.69,
  calcBMI: function () {
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  }
};

const john = {
  fullName: 'John Smith',
  mass: 92,
  height: 1.95,
  calcBMI: function () {
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  }
};

mark.calcBMI();
john.calcBMI();

console.log(mark.bmi, john.bmi);

// "John Smith's BMI (28.3) is higher than Mark Miller's (23.9)!"

if (mark.bmi > john.bmi) {
  console.log(`${mark.fullName}'s BMI (${mark.bmi}) is higher than ${john.fullName}'s BMI (${john.bmi})`)
} else if (john.bmi > mark.bmi) {
  console.log(`${john.fullName}'s BMI (${john.bmi}) is higher than ${mark.fullName}'s BMI (${mark.bmi})`)
}
*/


//***************** */ Iteration: The for Loop ************
/*
// for loop keeps running while condition is TRUE
for (let rep = 1; rep <= 30; rep++) {
  console.log(`Lifting weights repetition ${rep} 🏋️`);
}
*/

//***************** Looping Arrays, Breaking and Continuing *********************
/*
const rick = [
  'Rick',
  'Jhon',
  2037 - 1991,
  'teacher',
  ['Michael', 'Peter', 'Steven'],
  true
];
const types = [];

for (let i = 0; i < rick.length; i++) {
  // Reading from rick array
  console.log(rick[i], typeof rick[i]);

  // Filling types array
  // types[i] = typeof rick[i];
  types.push(typeof rick[i]);
}

console.log(types);

const years = [1991, 2007, 1969, 2020];
const ages = [];

for (let i = 0; i < years.length; i++) {
  ages.push(2021 - years[i]);
}
console.log(ages);

// continue and break
console.log('--- ONLY STRINGS ---')
for (let i = 0; i < rick.length; i++) {
  if (typeof rick[i] !== 'string') {
      continue;
  }
  console.log(rick[i], typeof rick[i]);
}

console.log('--- BREAK WITH NUMBER ---')
for (let i = 0; i < rick.length; i++) {
  if (typeof rick[i] === 'number'){
     break;
  }

  console.log(rick[i], typeof rick[i]);
}
*/



//************* Looping Backwards and Loops in Loops ************
/*
const rick = [
  'Rick',
  'Jhon',
  2037 - 1991,
  'teacher',
  ['Michael', 'Peter', 'Steven'],
  true
];

for (let i = rick.length - 1; i >= 0; i--) {
  console.log(i, rick[i]);
}

for (let exercise = 1; exercise < 4; exercise++) {
  console.log(`-------- Starting exercise ${exercise}`);

  for (let rep = 1; rep < 6; rep++) {
    console.log(`Exercise ${exercise}: Lifting weight repetition ${rep} 🏋️‍♀️`);
  }
}
*/


//**************** */ The while Loop **********************
/*
for (let rep = 1; rep <= 10; rep++) {
  console.log(`Lifting weights repetition ${rep} 🏋️‍♀️`);
}

let rep = 1;
while (rep <= 10) {
  // console.log(`WHILE: Lifting weights repetition ${rep} 🏋️‍♀️`);
  rep++;
}
              // Returning random number between 0 and 1 & multiplied with 6
let dice = 0;

while (dice != 6) {
  console.log(`You rolled a ${dice}`);
  dice = Math.trunc( Math.random() * 6) + 1;    // Remving the decimal point
  if (dice === 6) console.log('Loop is about to end...');
}
*/

//**************** Tip calculator ********************
/*
const calcTip =  (bill) => {
                           return (bill >= 50 && bill <= 300)
                           ?
                            bill * 0.15 
                           :
                            bill * 0.2;
}
const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

for (let i = 0; i < bills.length; i++) {
  const tip = calcTip(bills[i]);
  tips.push(tip);
  totals.push(tip + bills[i]);
}
console.log(`Bills: ${bills}, 
Tips: ${tips},  
Total: ${totals}` );



const calcAverage = (arrayData) => {
  let sum = 0;
  for (let i = 0; i < arrayData.length; i++) {
    // sum = sum + arrayData[i];
    sum += arrayData[i];
  }
  return sum / arrayData.length;
}

console.log(`Total Average Bill:  ${calcAverage(totals)}` );
console.log(`Total Average Tips:  ${calcAverage(tips)}` );
*/
