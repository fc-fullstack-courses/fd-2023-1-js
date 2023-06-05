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

const { price: monitorPrice, model, sizes } = monitor;

console.log(monitorPrice);
