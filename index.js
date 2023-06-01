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
    if(arr[i] === value) {
      return i;
    }
  }

  return -1;
}
