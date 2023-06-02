'use strict';

let res = 1;

for (let i = 0; i < 4; i++) {
  res *= 3;
}

let res2 = 3 ** 4;

/*
  y характеризует затраченное время (чем больше тем хуже)
  n - входные данные

  

  y = n^2 
      2.5 * 10^19

      3*2 + 30 * 3 + 150 = 246 секунд

  y = 2**n
      2**3 + 378 = 386 
*/

/*
  O(3) - константая
  O(log n)  - логарифмическая
  O(n)  - линейная
  O(n^2) - квадратичная
  O(2^n)  - экспоненциальsная
  O(n!) - факториал
*/

// O(1) - константая
const arr = [2, 7, null, true, 'test', 500000];
arr[1];

// O(n)  - линейная
function linearSearch(arr, value) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === value) {
      return i;
    }
  }

  return -1;
}

// O(n^2) - квадратичная
/*
  1 * 2 = 2
  1 * 3 = 3
  ...
  2 * 1 = 2
  3 * 1 = 3

  n**2 = n * n = 10 * 10
*/
function createMultiplicationTable(maxNumber) {
  const table = {};

  for (let i = 1; i <= maxNumber; i++) {
    for (let j = 1; j <= maxNumber; j++) {
      table[`${i} * ${j} = `] = i * j;
    }
  }

  return table;
}

// O(log n) - логарифмическая
const sortedNumers = [-14, 0, 2, 15, 53, 123, 830, 1357];
/**
 *
 * @param {number[]} arr
 * @param {number} value
 */
function binarySearch(arr, value) {
  let startIndex = 0;
  let endIndex = arr.length - 1;

  let centerIndex = Math.round((startIndex + endIndex) / 2);

  // debugger;

  while (true) {
    if (arr[centerIndex] === value) {
      return centerIndex;
    }

    if(startIndex === centerIndex && endIndex === centerIndex) {
      return -1;
    }

    if (arr[centerIndex] < value) {
      startIndex = centerIndex;
      centerIndex = Math.ceil((startIndex + endIndex) / 2);
      continue;
    }

    if (arr[centerIndex] > value) {
      endIndex = centerIndex;
      centerIndex = Math.floor((startIndex + endIndex) / 2);
      continue;
    }
  }
}
