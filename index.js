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

const intervalId = setInterval( () => {
  console.log('interval');
}, 2000);

clearInterval(intervalId);