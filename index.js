'use strict';

function recursive() {
  debugger;
  // ...
  recursive();
}

function sum(num1, num2) {
  return num1 + num2;
}

function nonRecursive() {
  debugger;

  sum(2,5);
}
