'use strict';

const btn = document.getElementById('btn');

// btn.addEventListener('click', () => {
//   // while (true) {

//   // }
//   let j = 2;

//   for(let i = 0; i < 20_000_000_000; i++) {
//     j *= j;
//   }

//   setTimeout(() => {console.log('ok')}, 2000);

// });

// console.log('first');

// setTimeout(()=> {console.log('second')}, 0);

// console.log('third');

// const timeoutId = setTimeout(function callback () {
//   console.log('callback');
// }, 2000);

// setTimeout(function callback () {
//   clearTimeout(timeoutId);
// }, 2000);

// const intervalId = setInterval( () => {
//   console.log('interval');
// }, 2000);

// clearInterval(intervalId);

/*
  Создать функцию, которая будет выводить в консоль числа от 1 до 10 с интервалом в 100 мс.
  Можно решить через:

  setInterval - if, clearInterval

  setTimeout - рекурсия с ифом
*/

function countInterval() {
  let i = 1;

  const intervalId = setInterval(() => {
    console.log(i++);
    if (i > 10) {
      clearInterval(intervalId);
    }
  }, 100);
}

let i = 1;

function countTimeout() {
  console.log(i++);

  if (i <= 10) {
    setTimeout( countTimeout , 100);
  } 
}
