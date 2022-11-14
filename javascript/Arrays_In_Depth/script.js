'use strict';  // Activating Strict Mode.... writing secure JS code... avoiding accidental errors... showing visible errors

// Arrays: Arry themselves are objects
// SLICE
/*
let arr = [1, 2, 3, 4, 5, 6, 7];
console.log(arr.slice(2)); // Retuns a new array (copy).. doesn't modify the original array.
console.log(arr.slice(2, 5));
console.log(arr.slice(-3))
console.log(arr.slice(1, -2))
console.log(arr);
console.log('****************************');
*/
// SPLICE - Mutates the original array

let arr = [1, 2, 3, 4, 5, 6, 7];
arr.splice(-1);
console.log(arr);
arr.splice(1,2);
console.log(arr);
console.log('****************************');



//REVERSE - Mutates the original array
/*
const arr1 = ['j', 'i', 'h', 'g'];
arr1.reverse();
console.log(arr1);
console.log('****************************');


// CONCAT - Doesn't mutate the original array.
const arr2 = ['1', '2', '3', '4'];
const alphaNumeric = arr2.concat(arr1);
console.log(alphaNumeric);
console.log('****************************');

// JOIN
console.log(alphaNumeric.join('-'));
*/


// Looping Arrays: forEach()
/*
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

for (const [i, movement] of movements.entries()) {
  if (movement > 0) {
    console.log(`Movement ${i + 1}: You deposited ${movement}`);
  } else {
    console.log(`Movement ${i + 1}: You withdrew ${Math.abs(movement)}`);
  }
}

console.log('---- FOREACH ----');
//forEach is an Array method that we can use to execute a function on each element 
// in an array. It can only be used on Arrays, Maps, and Sets.
movements.forEach(  (mov, i) => {

  if (mov > 0) {
    console.log(`Movement ${i + 1}: You deposited ${mov}`);
  } else {
    console.log(`Movement ${i + 1}: You withdrew ${Math.abs(mov)}`);
   }
  }

 );
*/



// forEach With Maps and Sets
// Map
/*
const currencies = new Map(  [
  ['USD', 'United States dollar'],    // Key/Value Pair
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]  );

currencies.forEach( 
                    (value, key, map) => {
                      console.log(`${key}: ${value}`);
                      } 
              );

 Set
const currenciesUnique = new Set( ['USD', 'GBP', 'USD', 'EUR', 'EUR'] );
//console.log(currenciesUnique);
currenciesUnique.forEach( (value, key, mset) => {
  console.log(`${key}: ${value}`);
});
*/

// Data Transformations: map, filter, reduce
// The map Method:Unlike, 'forEach' function, Map creates a new array based on the original array. Map loops over the array and
// each iteration, it applies callback function
// Returns a new array containing the results of applying an operation on all original array elements.
// Note: forEach function creates side effects.
/*
const eurToUsd = 1.1;
const movements= [200, 450, -400, 3000, -650, -130, 70, 1300];
const movementsUSD = movements.map( (mov, i) => mov * eurToUsd );
console.log(movements);
console.log(movementsUSD);

const movementsUSDfor = [];
for (const mov of movements) 
  movementsUSDfor.push(mov * eurToUsd);

console.log(movementsUSDfor);

const movementsDescriptions = movements.map(
  (mov, i) =>
    `Movement ${i + 1}: You ${mov > 0 ? 'deposited' : 'withdrew'} ${Math.abs(
      mov
    )}`
);
console.log(movementsDescriptions);
*/



// The filter Method: Used   to filter the elements in the original array which statify certain condition.
/*
const movements= [200, 450, -400, 3000, -650, -130, 70, 1300];
const deposits = movements.filter(  (mov, i, arr) => {
                                       return mov > 0;
                                     }
                                  );
console.log(movements);
console.log(deposits);

const withdrawals = movements.filter( 
                                      (mov) => 
                                          mov < 0 
                                    );
console.log(withdrawals);
*/



// The reduce Method: Reduces all array elements down to one single value.(Adding all the elements together)
/*
const movements= [200, 450, -400, 3000, -650, -130, 70, 1300];
console.log(movements);

const balance = movements.reduce(  (acc, cur) => acc + cur, 0  );
console.log(balance);

// Maximum value
const max = movements.reduce( (acc, mov) => {
                                if (acc > mov) return acc;
                                else return mov;
                                }, movements[0]
                                
                            );
console.log(max);
*/



//Chaining Methods
/*
const movements= [200, 450, -400, 3000, -650, -130, 70, 1300];
const eurToUsd = 1.1;

// PIPELINE
const totalDepositsUSD = movements
                           .filter( (mov) => mov > 0  )
                            .map((mov, i, arr) => {
                                return mov * eurToUsd;
                                }
                            )
                            .reduce((acc, mov) => acc + mov, 0);
            console.log(totalDepositsUSD);
*/



// The find Method

const movements= [200, 450, -400, 3000, -650, -130, 70, 1300];
const firstWithdrawal = movements.find( mov => mov < 0 );
console.log(movements);
console.log(firstWithdrawal);

const account1 = {
  owner: 'Rick Coery',
  transactions: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, 
  pin: 1111,
};

const account2 = {
  owner: 'Tom Davis',
  transactions: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};


const accounts = [account1, account2];
const account = accounts.find( acc => acc.owner === 'Tom Davis');
console.log(account);


