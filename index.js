// группировка
let res1 = 2 * 2 + 2; // 6
let res2 = 2 * (2 + 2); // 8

console.log(res2); // вызов функции

// typeof
const type1 = typeof 'sdadsadad'; // 'string'
console.log(type1);
console.log(typeof undefined); // 'undefined'
console.log(typeof 4648469); // 'number'
console.log(typeof 123434n); // 'bigint'
console.log(typeof true); // 'boolean'
console.log(typeof console.log); // 'function'
console.log(typeof {}); // 'object'
console.log(typeof null); // 'object'

// математические
let sum1 = 10 + 10; // 20
let minus1 = 10 - 10; // 0
let multiply1 = 10 * 10; // 100
let divide1 = 10 / 10; // 1
let remainder1 = 8 % 3; // 2
let toPowerOf3 = 2 ** 3; // 8

// инкрементация / декрементация
let counter1 = 10;
counter1++; // увеличивает значение на 1
console.log(counter1); // 11
counter1--;// уменьшает значение на 1
console.log(counter1); // 10

let counter2 = 5;
console.log('postfix++');
console.log(counter2++);
console.log(counter2);
console.log('++prefix');
console.log(++counter2);
console.log(counter2);

// унарные матиматические операторы 
console.log(+10);
console.log(-10);

// приводит тип данных операнда к числовому
console.log(+'50'); // 50
console.log(+undefined); // NaN
console.log(+null); // 0
console.log(+'0xFA'); // 250 0-9 a-f
console.log(+'asddsafdsfdsfds'); // NaN