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
let counter = 0;

do {
  // тело цикла 
  // гарантированно выполнится хотя бы 1 раз

  console.log(counter);
  counter += 2;
} while (counter <= 10);
