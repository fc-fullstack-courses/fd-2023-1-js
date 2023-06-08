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

// connect
// connect(func1, func2)(Component)

function sum(a, b, c) {
  return a + b + c;
}

const res1 = sum(5, 10, 3);

function curriedSum(a) {
  function func1(b) {
    function func2(c) {
      return a + b + c;
    }

    return func2;
  }

  return func1;
}

function curriedSum2(a) {
  return function (b) {
    return function (c) {
      return a + b + c;
    };
  };
}

const curriedSum3 = (a) => (b) => (c) => a + b + c;

const sumWithFive = curriedSum(5);
const sumWithFiveAndTen = sumWithFive(10);
const res2 = sumWithFiveAndTen(3);

const res3 = curriedSum(5)(10)(3);

/**
 *
 * @param {number} price
 * @param {number} amount
 * @param {number} discount
 * @returns {number}
 */
function calculatePrice(price, discount, amount) {
  return price * amount - price * amount * discount;
}

// 0.2 === 20%
const totalPrice1 = calculatePrice(100, 0.2, 10);
const totalPrice2 = calculatePrice(100, 0.2, 3);


function curriedCalculatePrice(price) {
  return function (discount) {
    return function (amount) {
      return price * amount - price * amount * discount;
    };
  };
}

const withPrice100 = curriedCalculatePrice(100);
const withPrice100AndDiscount20 = withPrice100(0.2);

const curriedTotal1 = withPrice100AndDiscount20(10);
const curriedTotal2 = withPrice100AndDiscount20(3);

const total3 = withPrice100AndDiscount20(50);

const withPrice5000 = curriedCalculatePrice(5000);
const withPrice5000AndDiscount7 = withPrice5000(0.07);

const total4 = withPrice5000AndDiscount7(4);
