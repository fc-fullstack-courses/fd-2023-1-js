'use strict';
// console.log('iteration');
// console.log('iteration');
// console.log('iteration');
// console.log('iteration');
// console.log('iteration');

// let condition = false;

// let counter = 0;
// while (counter < 5) {
//   // тело цикла
//   counter++;
//   console.log('iteration');
// }

// let counter = 0;
// while (true) {
//   counter++;
//   console.log('iteration');
//   if(counter >= 5) {
//     break; // досрочная остановка цикла
//   }
// }

// let shouldContinue = true;
// while(shouldContinue) {
//   console.log('iteration');
//   shouldContinue = confirm('Should continue iterating?');
// }

/*
  С помощью консоль логов отобразите в консоли
  четные числа от 0 до 10
*/
// let counter = 0;
// while (counter <= 10) {
//   if (counter % 2 === 0) {
//     console.log(counter);
//   }
//   counter++;
// }

// let counter = 0;
// while (counter <= 10) {
//   console.log(counter);
//   counter += 2;
// }

// let counter = 0;
// while (counter <= 10) {
//   if (counter % 2 !== 0) {
//     counter++;
//     continue; // досрочно остановить этот проход и начать новый
//   }

//   console.log(counter);
//   counter++;
// }

// do ... while
// let counter = 0;

// do {
//   // тело цикла
//   // гарантированно выполнится хотя бы 1 раз

//   console.log(counter);
//   counter += 2;
// } while (counter <= 10);

// for

// for(start; condition; step) {
// тело цикла
// }
// debugger;
// for (let i = 0; i <= 10; i += 2) {
//   console.log(i);
// }

// for(;;) {

// }

/*
  создайте переменную в которой будет хранится строка, являющяся паролем

  с помощью промпта спрашивайте у пользователя пароль до тех пор пока он не совпадет с сохраненным

  можете использовать любой вид циклов
  * напишите решения с использованием всех видов циклов
  
*/
//WHILE:
// let passValue = 'admin1234';
// let pass;
// while (pass !== passValue) {
//   pass = prompt ('Your password');

// }

//DO...WHILE:
// let passValue = 'admin1234';
// do {
//   let pass = prompt ('Your password');
//   if (pass === passValue){
//     alert ('welcome');
//     break;
//   }
// } while(true);

// FOR:
// let passValue = 'admin1234';

// for (;;){
//   let pass = prompt ('Your password');

//   if (pass === passValue){
//   alert ('welcome');
//   break;
//   }
// }

/*
создать функцию которая будет возводить число в положительную степень
  не использовать ** и Math.pow()
  * возводить число в любую степень
*/

// let userNumberTemp = +prompt('Введите число:');
// let userDegreeTemp = +prompt('Введите степень числа:');

// let funDegree = function (userNumberTemp, userDegreeTemp) {
//   //debugger;
//   let result = 1;

//   if (
//     typeof userNumberTemp !== 'number' &&
//     typeof userDegreeTemp !== 'number' &&
//     isNaN(userNumberTemp * userDegreeTemp) &&
//     userDegreeTemp <= 0
//   ) {
//     return null;
//   }

//   for (let i = 0; i < userDegreeTemp; i++) {
//     result *= userNumberTemp;
//   }
//   return result;
// };

// console.log(funDegree(userNumberTemp, userDegreeTemp));
