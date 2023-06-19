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
    setTimeout(countTimeout, 100);
  }
}

const user1 = {
  id: 1,
  firstName: 'User',
  lastName: 'Userenko',
  isMale: true,
  getFullName: function () {
    return 'test';
  },
  test: null,
  test2: undefined,
  test3: Symbol(),
  arr: [1, 2, 3],
};

// сериализация данных
const serializedUser = JSON.stringify(user1);

// десериализация данных
const reconstructedUser = JSON.parse(serializedUser);

const func = () => {
  console.log('something');
};

setTimeout(func, 1000);

setTimeout(() => {
  // 1
  setTimeout(() => {
    // 2
    setTimeout(() => {
      //3
      setTimeout(() => {
        //4
        setTimeout(() => {
          //5
          setTimeout(() => {

          }, 2000);
          setTimeout(() => {
            
          }, 2000);
        }, 1000);
      }, 1000);
    }, 1000);
  }, 1000);
}, 1000);
