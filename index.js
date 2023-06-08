'use strict';

let value1 = 'test';
let value3 = 12345;

function log1() {
  console.log(`log function: ${value3}`);
}

function log2() {
  let value2 = 'inner';
  let value3 = 98765;

  // console.log(`value2: ${value2}`);
  // console.log(`value3: ${value3}`);

  // log1();

  if (true) {
    let value3 = 8465468463;
    console.log(value3);
  }

  function log3() {
    console.log(`log3 function: ${value3}`);
  }

  log3();
}

// console.log(value2);

function wrapper() {
  debugger;
  // переменная в замыкании
  let value = 'data';

  console.log(`wrapper: ${value}`);

  function inner() {
    console.log(`inner: ${value}`);
  }

  inner();
}

// let i = 0;

// function counter () {

//   i++;
//   return i;
// }

function createCounter() {
  let i = 0;

  function increment() {
    // i++;
    // return i;
    return ++i;
  }

  return increment;
}

const counter = createCounter();