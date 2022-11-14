//////////// Arithmatic Operators ///////////////////
/*
const travel = 'Flight Booking';
const departureDate = '26-Jan-2021';
const passengersAdults = 2;
const passengersAdult1Name = 'Rick';
const passengersAdult2Name = 'Coery';
const passengersChildren= 0;

let now = 2021;
 const ageOfRick = now - 1990;
 const ageOfCoery = now - 1989;

let specialAssistance = false;
const seniorCitizen = false;
const roundTrip = false;

console.log(travel + ' | ' + 'Departure Date:  ' + departureDate)
console.log('Passengers (Adults): ' + passengersAdults);
console.log('Passengers: ' + passengersAdult1Name + '  & ' + passengersAdult2Name);
console.log('Passenger Ages: ' + ageOfRick + '  & ' + ageOfCoery);
console.log('Special Assistance: ' + specialAssistance + '  & ' + 'Round Trip: '+ roundTrip);
console.log('********************************************')

let x = 10 + 10;
 x += 5;    // Addintion Assignment operator
 x *= 5;    // Multiplication Assignment operator
 //x /= 5; 
 x++;   // increment operator
 x++;
 x--;   // decrement operator
 x--;
 console.log(x);
*/



 ////////////// Comparison operators /////////////////////
 /*
 let now = 2021;
 const ageOfRick = now - 1990;
 const ageOfCoery = now - 2010;

console.log( ageOfRick > ageOfCoery ); // >, <, >=, <=
console.log(ageOfCoery >= 18);
const isFullAge = ageOfCoery >= 18; // boolean variable

if (isFullAge)
  console.log('Full Age')
else 
  console.log('Not Full Age')

console.log(now - 1991 > now - 2020);
*/



///////////// Calculating BMI (Body Mass Index) ///////////////////
/*
const massRick = 95;
const heightRick = 1.88;
const massJohn = 85;
const heightJohn = 1.76;

const BMIRick = massRick / heightRick ** 2;
const BMIJohn = massJohn / (heightJohn * heightJohn);
const rickHigherBMI = BMIRick > BMIJohn;

console.log('BMI of Rick: ' + BMIRick);
console.log('BMI of Jhon: ' + BMIJohn);
console.log('Is Rick having higher BMI?: ' + rickHigherBMI);
*/

///////////// Strings and Template Literals (ES6) ///////////////
/*
const firstName = 'Rick';
const job = 'Full Stack Web Developer';
const birthYear = 1989;
const year = 2022;

let rick = "I'm " + firstName + ', a ' + (year - birthYear) + ' years old ' + job + '!';
console.log(rick);

 rick = ` I'm ${firstName}, a ${year - birthYear} year old ${job}!`;
console.log(rick);

console.log(`Just a regular string...`);

console.log( `I'm ${firstName}, 
            a ${year - birthYear} year old
            ${job}!`);
*/


////////////////// Taking Decisions: if / else Statements /////////////////////////
/*
const personName ='Rick';
let personAge  = 30;
const seniorCitizenAge = 61;
const yearsLeft = seniorCitizenAge - personAge;
let specialAssistance = false;

if (specialAssistance) {
  console.log(`${personName} needs special assistance`);
} else {
  console.log(`${personName} doesn't need special assistance`);
}
if (yearsLeft <= seniorCitizenAge) {
  console.log(`${personName} is too young. Wait another ${yearsLeft} years :) to avail senior citizen booking charges`);
}


const birthYear = 1984;
let century;
if (birthYear <= 2000) {
  century = 20;
} else {
  century = 21;
}
console.log(century);
*/


////////////// Calculating BMI using condition /////////////
/*
const massMark = 95;
const heightMark = 1.88;
const massJohn = 85;
const heightJohn = 1.76;

const BMIMark = massMark / heightMark ** 2;
const BMIJohn = massJohn / (heightJohn * heightJohn);
console.log(`BMI of Mark: ${BMIMark}  |  BMI of Jhon:  ${BMIJohn}`);

if (BMIMark > BMIJohn) {
  console.log(`Mark's BMI (${BMIMark}) is higher than John's (${BMIJohn})!`)
} else {
  console.log(`John's BMI (${BMIJohn}) is higher than Marks's (${BMIMark})!`)
}
*/



//////////////// Type Conversion and Coercion ////////////////////////
// Type conversion - Manually convert from one to another type (Explicitly)
/*
const inputYear = '1991';

console.log( Number(inputYear), inputYear);
console.log( Number(inputYear) + 18);

console.log(Number('Rick')); // NaN
console.log(typeof NaN);

console.log(String(23), 23);

// Type coercion - JS automatically handles it implicitly.
console.log('I am ' + 23 + ' years old'); // Converted into String
console.log('23' - '10' - 3);  //  Converted into Number
console.log('23' / '2');  
console.log('23' > '18');  //  Converted into Number

let n = '10'-'4'-'3'-2+'5';
n = n - 1;
console.log(n);
*/



/////////////// Truthy and Falsy Values /////////////////////////
/*
// 5 falsy values: 0, '', undefined, null, NaN
console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('Mike'));
console.log(Boolean({}));
console.log(Boolean(''));

const money = 100;
if (money) { // converted into boolean
  console.log("Don't spend it all ;)");
} else {
  console.log('You should get a job!');
}

let height;
if (height) {
  console.log('YAY! Height is defined');
} else {
  console.log('Height is UNDEFINED');
}
*/



////////////////////// Equality Operators: == vs. ===  ///////////////////////////////
/*
let empoyeeAge = '18';  // strictly equal
if (empoyeeAge == 18) 
  console.log('You just became an adult :D (strict)');

empoyeeAge = '18';   //  Type Conversion and Coercion - loosly equal  
if (empoyeeAge == 18) console.log('You just became an adult :D (loose)');

const favourite = prompt("What's your favourite number?");
console.log(favourite);
console.log(typeof favourite);

if ( Number(favourite) === 23) { // Check with == 
  console.log('Cool! 23 is an amzaing number!')
} else if (Number(favourite) === 7) {
  console.log('7 is also a cool number')
} else if (Number(favourite) === 9) {
  console.log('9 is also a cool number')
} else {
  console.log('Number is not 23 or 7 or 9')
}

if ( Number(favourite) !== 23) console.log('Why not 23?');  // // strictly not equal
*/

///////////// Logical Operators /////////////////////
/*
const hasDriversLicense = true; // A
const hasGoodVision = true; // B

console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasDriversLicense);

const isTired = false; // C
console.log(hasDriversLicense && hasGoodVision && isTired);

if (hasDriversLicense && hasGoodVision && !isTired) {
  console.log('Sarah is able to drive!');
} else {
  console.log('Someone else should drive...');
}
*/


////////////////// Relationl & Logical Operators /////////////////////////
/*
const scoreDolphins = (97 + 112 + 80) / 3;
const scoreKoalas = (109 + 95 + 50) / 3;
console.log(scoreDolphins, scoreKoalas);

if (scoreDolphins > scoreKoalas && scoreDolphins >= 100) {
  console.log('Dolphins win the trophy');
} else if (scoreKoalas > scoreDolphins && scoreKoalas >= 100) {
  console.log('Koalas win the trophy');
} else if (scoreDolphins === scoreKoalas && scoreDolphins >= 100 && scoreKoalas >= 100) {
  console.log('Both win the trophy!');
} else {
  console.log('No one wins the trophy');
}
*/

////////////// The switch Statement ////////////////////////
/*
const day = 'wednesday';
// Comparing single value with multiple options...

switch (day) {     
  case 'monday': // day === 'monday'
    console.log('Plan course structure');
    console.log('Go to coding meetup');
    break;
  case 'tuesday':
    console.log('Prepare theory videos');
    break;
  case 'wednesday':
  case 'thursday':
    console.log('Write code examples');
   break;
  case 'friday':
    console.log('Record videos');
   break;
  case 'saturday':
  case 'sunday':
    console.log('Enjoy the weekend :D');
   break;
  default:
    console.log('Not a valid day!');
}
/*
if (day === 'monday') {
  console.log('Plan course structure');
  console.log('Go to coding meetup');
} else if (day === 'tuesday') {
  console.log('Prepare theory videos');
} else if (day === 'wednesday' || day === 'thursday') {
  console.log('Write code examples');
} else if (day === 'friday') {
  console.log('Record videos');
} else if (day === 'saturday' || day === 'sunday') {
  console.log('Enjoy the weekend :D');
} else {
  console.log('Not a valid day!');
}
*/

/////////////////// Statements and Expressions ////////////////////////
/*
3 + 4
1991
true && false && !false

if (23 > 10) {
  const str = '23 is bigger';
}

const me = 'Jonas';
console.log(`I'm ${2037 - 1991} years old ${me}`);
*/



//////////////////// The Conditional (Ternary) Operator //////////////////////
/*
const personAge = 23;

const drink = personAge >= 18 ? 'wine' : 'water';

console.log(drink);

let drink2;
if (personAge >= 18) {
  drink2 = 'wine';

} else {
  drink2 = 'water';
}
console.log(drink2);

console.log(`I like to drink ${ personAge >= 18 ? 'wine' : 'water' }`);
*/