'use strict';

function sum(num1, num2) {
  if (
    typeof num1 !== 'number' ||
    typeof num2 !== 'number' ||
    isNaN(num1 - num2)
  ) {
    // const error = new TypeError('You must provide numbers');

    // throw error;

    throw new TypeError('You must provide numbers');
  }

  return num1 + num2;
}

console.log(1);

const result = sum(true, true);
// throw 10;
console.log(2);
