'use strict';

let a = 10;
let b = 20;
// вывести в консоль / алерт строчку:
// 10 + 20 = 30

// alert(a + ' + ' + b + ' = ' + (a + b));
// alert(`${a} + ${b} = ${a + b}`);

// alert('Пролог\nЖили-были');
// alert(`Пролог
// Жили-                           
//   были`);

/*
  вывести в консоль / алерт строчки:
  a - b = result
  a * b = result
  a / b = result
*/

const user = {
  firstName: 'Test',
  lastName: 'User',
  age: 12,
  isMale: true
}
const user2 = {
  firstName: 'User',
  lastName: 'Test',
  age: 12,
  isMale: true
}

/*
  написать функцию, которая будет создавать строчку
  в которой будут здороватся с пользователем
*/

const greetUser = function(user) {
  return `Hello, ${user.firstName} ${user.lastName}!`;
}