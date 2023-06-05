'use strict';

const str = 'stasds';

// objects
const monitor = {
  model: 'CHHG1239asjd-xw2',
  price: 9999.99,
  sizes: {
    width: {
      value: 50,
      unit: 'cm',
    },
    height: {
      value: 19.3,
      unit: 'cm',
    },
  },
  color: 'black',
};

// console.log(monitor.color);
// console.log(monitor.sizes.width.unit);

// monitorWidthUnit
// const monitorWidthUnit = monitor.sizes.width.unit;

// const price = 5000;

const {
  price: monitorPrice,
  model,
  sizes: {
    width: { value: phoneWidth, unit },
  },
  sizes,
} = monitor;

// BAD
// const { width } = sizes;
// const { unit, value } = width;

// BAD but better
// const { value } = monitor.sizes.width;

console.log(monitorPrice);

const user = {
  login: 'testLogin',
  password: '12345damin',
  email: 'mail@test.test',
  age: 12,
  isMale: true,
};

const { password, email, ...restOfUser } = user;

const arr = [10, 15, 20, 25, 30];

// const first = arr[0];

// const [first, second, third] = arr;
const [first, , , , third] = arr;

const [, ...newArr] = arr;

let a = 'value A';
let b = 'value B';

// // let temp = b;
// // b = a;
// // a = temp;

[ b, a ] = [a, b];