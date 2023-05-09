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

let shouldContinue = true;
while(shouldContinue) {
  console.log('iteration');
  shouldContinue = confirm('Should continue iterating?');
}