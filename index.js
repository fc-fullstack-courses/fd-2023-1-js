'use strict';

const sym1 = Symbol('test');
const sym2 = Symbol('text');

sym1 === sym2; // false

const obj = {
  prop1: 'test property 1',
  prop2: false,
  [sym2]:'other symbol',
  [Symbol('i am safe')]:'also a symbol symbol',
  // prop1: 10,
};

// создание символьного ключа
obj[sym1] = 'this key is symbol';

// доступ к симовльному свойству
obj[sym1];

const objSymbols = Object.getOwnPropertySymbols(obj);

console.log(obj[objSymbols[1]]);