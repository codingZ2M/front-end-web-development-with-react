/*  What is Object-Oriented Programming? (Oraganizing Code)
Its a programming paradigm based on the concepts of objects.
We  are creating objects (instances) to model / describe real world entities/features
An Object (self-contained block of code) contains data & methods
Objects are building blocks and interacting with one another
Interaction between objects happen through Public Interface (API): methods that the code
outside of the object can access and use to communicate with the object.

CLASS (Blue Print), from which we can create objects (instances)
Example: multiple houses can be built with one blue print.
Each object can have different data but all are sharing the same funtionalities.
Note: JavaScript doesn't support real calss declrations as we have in the clssical 'OOP'
*/

/*
How do we design classes?
How do we model real world data into classes?
OOP concets:
Abstraction: Hiding details that don't matter allowing us to get an overview perspective of the 
thing we are implementing.
Ex: Event Listner methods

Encapsulation: Keeping properties & methods private inside the class, so they are not
accessible from outside the class. But some methods can be exposed as Public Interface (API)
Preventing external code from manipulating internal properties/state.
Allows to change internal implementation without breaking external code.
Note: 'private' keyword doesn't exist in JS

Inheritance: Avoiding duplicate codes.
Making all properties and methods of a certain class available to a child class.

Polymorphismm: A single form can behave differently in different situations.
A child class can overwrite a method it inherited from parent class.
Example: Customer & Employee classes can inherit login method from its parent class 'User' 
and overwrite (override) it but with different implementation.
*/

/* ***************** OOP in JS: PROTOTYPES ********************************
Objects are linked to a prototype object. ( An instance inheriting from a class)
The prototype conatins methods that are accessible to all objects linked to that prototype.

How do we create prototypes?
How do we link objects to prototypes?
How can we create objects without having classes?
1. Constructor Functions
2. ES6 Classes
3. object.create()

The above techniques allow objects to inherit methods from its prototype object.
Note: Each object has a private property which holds a link to another object called its prototype. 
Objects can have a prototype object, which acts as a template object that it inherits methods
 and properties from.
*/

'use strict';

// Creating a Constructor Functions and the new Operator
// Constructor function acts like class declaration in classical OOP

const Person = function (firstName, birthYear) {
  // Instance properties
  this.firstName = firstName;
  this.birthYear = birthYear;
};
// Calling the constructoer function with new operator
const rick = new Person('Rick', 1991);   // Prototype inheriting
console.log(rick);
// Step are taken behind the scenes.
// 1. New {} is created
// 2. function is called, this = {}
// 3. {} linked to prototype
// 4. function automatically return {}
const matilda = new Person('Matilda', 1997);
console.log(matilda);

console.log(rick instanceof Person);


// Prototypes
// Accessing the prototype property of constructor
// NOTE: All the objects created through this constructor function will inherit and they will get
// access to all the methods & properties which are defined in the 'Prototype' property.

console.log(Person.prototype);   

// Adding method to a prototype property
Person.prototype.calcAge = function () {
  console.log(2021 - this.birthYear);
};

//Objects are accessing the methods defined in the 'Prototype' property.
rick.calcAge();
matilda.calcAge();

console.log(Person.prototype.isPrototypeOf(matilda));
console.log(Person.prototype.isPrototypeOf(Person));


// .prototyeOfLinkedObjects
Person.prototype.species = 'Homo Sapiens';
console.log(rick.species, matilda.species);

console.log(rick.hasOwnProperty('firstName'));
console.log(rick.hasOwnProperty('species'));



// Example:
 /*
const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;


};

Car.prototype.accelerate = function () {
  this.speed += 10;
  console.log(`${this.make} is going at ${this.speed} km/h`);
};

Car.prototype.brake = function () {
  this.speed -= 5;
  console.log(`${this.make} is going at ${this.speed} km/h`);
};

const bmw = new Car('BMW', 120);
const mercedes = new Car('Mercedes', 95);

mercedes.accelerate();
mercedes.brake();
bmw.accelerate();
bmw.brake();
*/


// ES6 Classes: Are special type of functions. Classes are still functions.
// Class declaration
/*
class PersonCl {
  // Adding constructor method of this class, similar to constructor function
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  // Instance methods,  Methods will be added to .prototype property
  calcAge() {
    console.log(2021 - this.birthYear);
  }

  greet() {
    console.log(`Hey ${this.fullName}`);
  }

// creating a getter for a property
  get age() {   // getter..just like a property
    return 2021 - this.birthYear;
  }

  // // creating a setter for a property
  // Whenever we set the fullName using the constructor, this setter is going to be executed.
  //Inorder to avoid the naming conflicts, create a new property '_fullName'
 
  set fullName(name) {  // setter.. just like a property
    if (name.includes(' ')) this._fullName = name;
    else alert(`${name} is not a full name!`);
  }

  get fullName() {  // getter.. just like a property
    return this._fullName;
  }
}

const jessica = new PersonCl('Jessica Davis', 1996);   // Prototype inheriting
jessica.calcAge();
jessica.greet();  

console.log(jessica.age);  // reading it as a property and do some functionality
jessica.fullName = 'Mary Williams';  // reading it as a property and do some functionality
console.log(jessica.fullName); 

// Simple validation with setter method.
const walter = new PersonCl('Walter', 1990);
walter.calcAge();
*/



// Object.create
/*
const PersonProto = {   // simple object literal
 
  calcAge() {
    console.log(2037 - this.birthYear);
  },

  init(firstName, birthYear) {     // similar to constructors in ES6 classes.
    this.firstName = firstName;
    this.birthYear = birthYear;
  },

};
// Psssing the object that we want to be the prototype of the new object.
const steven = Object.create(PersonProto);  // Prototype inheriting
console.log(steven);
steven.name = 'Steven';
steven.birthYear = 2002;
steven.calcAge();

const sarah = Object.create(PersonProto);
sarah.init('Sarah', 1979);
sarah.calcAge();
*/



// Example
/*
class CarCl {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }

  accelerate() {
    this.speed += 10;
    console.log(`${this.make} is going at ${this.speed} km/h`);
  }

  brake() {
    this.speed -= 5;
    console.log(`${this.make} is going at ${this.speed} km/h`);
  }

  get speedUS() {
    return this.speed / 1.6;
  }

  set speedUS(speed) {
    this.speed = speed * 1.6;
  }
}

const ford = new CarCl('Ford', 120);
console.log(ford.speedUS);
ford.accelerate();
ford.accelerate();
ford.brake();
ford.speedUS = 50;
console.log(ford);
*/



// Inheritance Between "Classes": Constructor Functions
/*
const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};

Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};

const Student = function (firstName, birthYear, course) {
  Person.call(this, firstName, birthYear);
  this.course = course;
};


// Linking prototypes (Prototype Chain)
Student.prototype = Object.create(Person.prototype);

Student.prototype.introduce = function () {
  console.log(`My name is ${this.firstName} and I study ${this.course}`);
};

const mike = new Student('Mike', 2020, 'Computer Science');
mike.introduce();
mike.calcAge();
*/



// Example
/*
const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

Car.prototype.accelerate = function () {
  this.speed += 10;
  console.log(`${this.make} is going at ${this.speed} km/h`);
};

Car.prototype.brake = function () {
  this.speed -= 5;
  console.log(`${this.make} is going at ${this.speed} km/h`);
};

const EV = function (make, speed, charge) {
  Car.call(this, make, speed);
  this.charge = charge;
};

// Link the prototypes
EV.prototype = Object.create(Car.prototype);

EV.prototype.chargeBattery = function (chargeTo) {
  this.charge = chargeTo;
};

EV.prototype.accelerate = function () {
  this.speed += 20;
  this.charge--;
  console.log(
    `${this.make} is going at ${this.speed} km/h, with a charge of ${this.charge}`
  );
};

const tesla = new EV('Tesla', 120, 23);
tesla.chargeBattery(90);
console.log(tesla);
tesla.brake();
tesla.accelerate();
*/




// Inheritance Between "Classes": ES6 Classes

class PersonCl {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  // Instance methods
  calcAge() {
    console.log(2037 - this.birthYear);
  }

  greet() {
    console.log(`Hey ${this.fullName}`);
  }

  get age() {
    return 2037 - this.birthYear;
  }

  set fullName(name) {
    if (name.includes(' ')) this._fullName = name;
    else alert(`${name} is not a full name!`);
  }

  get fullName() {
    return this._fullName;
  }
}

class StudentCl extends PersonCl {
  constructor(fullName, birthYear, course) {
    // Always needs to happen first!
    super(fullName, birthYear);
    this.course = course;
  }

  introduce() {
    console.log(`My name is ${this.fullName} and I study ${this.course}`);
  }

  calcAge() {
    console.log(
      `I'm ${
        2021 - this.birthYear
      } years old, but as a student I feel more like ${
        2021 - this.birthYear + 10
      }`
    );
  }
}

const martha = new StudentCl('Martha Jones', 2012, 'Computer Science');
martha.introduce();
martha.calcAge();





// Inheritance Between "Classes": Object.create

const PersonProto = {
  calcAge() {
    console.log(2037 - this.birthYear);
  },

  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};

const steven = Object.create(PersonProto);

const StudentProto = Object.create(PersonProto);

StudentProto.init = function (firstName, birthYear, course) {
  PersonProto.init.call(this, firstName, birthYear);
  this.course = course;
};

StudentProto.introduce = function () {
  console.log(`My name is ${this.fullName} and I study ${this.course}`);
};

const jay = Object.create(StudentProto);
jay.init('Jay', 2010, 'Compuetr Science');
jay.introduce();
jay.calcAge();


