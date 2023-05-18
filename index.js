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

function multiply(...numbers) {
  let result = 1;

  numbers.forEach(function (number) {
    result *= number;
  });

  return result;
}

const numbersArr = [50, 454, 8, 9879, -500];
const arr2 = ['test', 'test2', 'test3'];

const user = {
  test: 1,
  test2: 2,
};

const arr3 = [...numbersArr, null, ...arr2, ...'tesagd', ...user];

// const maxNumber = Math.max(
//   numbersArr[0],
//   numbersArr[1],
//   numbersArr[2],
//   numbersArr[3],
//   numbersArr[4]
// );

const maxNumber = Math.max(...numbersArr);
const res3 = multiply(...numbersArr);
