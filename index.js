'use strict';

// let x = 0;

function recursive() {
  // debugger;
  // ...
  // x++;
  recursive();
}

function sum(num1, num2) {
  return num1 + num2;
}

function nonRecursive() {
  debugger;

  sum(2, 5);
}

// for(let i = 10; i > 0; i--) {
//   console.log(i);
// }

function countdown(number) {
  debugger;
  console.log(number);

  if (number > 0) {
    countdown(number - 1);
  }

  return 'done'; // база рекурсии
}

/*
  min = 2
  max = 5


  2
  3
  4
  5

*/
function logRange(min, max) {
  debugger;
  if (min > max) {
    throw new RangeError('min must be smaller than max');
  }

  console.log(min);

  if (min < max) {
    logRange(min + 1, max);
  }
}

/*
  Этапы рекурсии:
    1. функции рекурсивно выполняются в колл стеке
    2. доходим до базы рекурсии
    3. все остальные функции завершают работу
*/

const tree = {
  value: 10,
  left: {
    value: 5,
    left: {
      value: 3,
    },
  },
  right: {
    value: 2,
    left: {
      value: 3,
    },
    right: {
      value: 1,
      right: {
        value: 1,
      },
    },
  },
};

/**
 *  @param {object} treeObj
 *  @returns {number}
 * */
function reduceTree(treeObj) {
  let result = treeObj.value;

  if (treeObj.left) {
    result += reduceTree(treeObj.left);
  }

  if (treeObj.right) {
    result += reduceTree(treeObj.right);
  }

  return result;
}
