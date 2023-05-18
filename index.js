'use strict';

function sum(num1, num2, ...numbers) {
  // debugger;
  // console.log(arguments);
  console.log(numbers);
  let result = num1 + num2;

  for (let i = 0; i < numbers.length; i++) {
    result += numbers[i];
  }

  return result;
}

const res1 = sum(2, 2);
const res2 = sum(2, 2, 2, 4, 3, 5);

console.log(res1);
console.log(res2);

function sum2(...numbers) {
  let result = 0;

  numbers.forEach(function (number) {
    result += number;
  });

  return result;
}
