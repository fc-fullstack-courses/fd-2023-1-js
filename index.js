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

  function decrement() {
    return --i;
  }

  return {
    increment: increment,
    decrement,
  };
}

const counter1 = createCounter();
const counter2 = createCounter();

/*
  создать функцию createAdder, эта функция принимает число x
  и возвращает другую функцию. 
  Возвращаемая функция принимает
  число y и возвращает результат его сложения с х 

  const adder = createAdder(5);
  adder(10); // 15
  adder(20) // 35
  adder(5) // 40
  adder(100) // 140
*/

// function createAdder(x) {
//   let result = x;

//   return function (y) {
//     return (result += y);
//   };
// }

const createAdder = (x) => (y) => (x += y);