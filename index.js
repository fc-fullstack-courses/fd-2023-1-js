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
counter1--; // уменьшает значение на 1
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

// логические операторы
console.log('=== Logic operators ===');
console.log(true);
console.log(false);

console.log(!true); // false
console.log(!false); // true

// приведение к булевому типу
console.log(!50); // false
console.log(!!50); // true

// сравнение
console.log('=== Comparison operators ===');
console.log(10 > 5); // true
console.log(10 < 5); // false
console.log(10 > 10); // false
console.log(10 >= 10); // true

console.log('=== String comparison ===');
console.log('test' > 'text'); // false
console.log('u' > 'text'); // true

// Логическое И / ИЛИ
let number = 150;
// от 0 до 50
console.log(number > 0); // true
console.log(number < 50); // true

console.log(number > 0 && number < 50);
console.log(number > 0 || number < 50);

// возвращает ПОСЛЕДНЕЕ ПРАВДИВОЕ значение
// или ПЕРВОЕ ЛОЖНОЕ значение
console.log ('test' && 8); // 8
console.log (null && 8); // null
console.log (null && NaN); // null

// возвращает ПЕРВОЕ ПРАВДИВОЕ значение 
// или ПОСЛЕДНЕЕ ЛОЖНОЕ  значение
console.log ('test' || 8); // 'test'
console.log (null || 8); // 8
console.log (null || NaN); // NaN

// console.log ('test' && 8 && null && true && 'sadsa')

// Равенство
console.log('=== Equality operators ===');
console.log(500 === 500); // true
console.log(500 === 50); // false
console.log('text' === 'text') // true
console.log('test' === 'text') // false

// console.log(500 == 500); // true
// console.log(500 == '500'); // true
console.log(500 === '500'); // false

console.log(100 !== 500); // true
console.log(100 !== 100); // false
