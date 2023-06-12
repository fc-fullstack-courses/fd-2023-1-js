'use strict';

// window.document;
// document

// Что делать (слушатель)
// function btnAlert() {
//   alert('Hello world');
// }

// Кто (поиск элемента)
const [firstButton] = document.getElementsByTagName('button');
// const [firstButton] = buttons;

// Когда мы будем что-то делать
// target.addEventLister(type, listener);
// firstButton.addEventListener('click', btnAlert);

/*
  создать кнопку, и подключить к ней слушатель события (функцию)
  при нажатии на кнопку нужно показывать сколько раз кнопка была нажата


*/

// let counter = 0;

// function incrementCounter() {
//   alert(++counter);
// }

// function createCounter() {
//   let counter = 0;

//   return function () {
//     alert(++counter);
//   };
// }

// const incrementCounter = createCounter();

// // firstButton.addEventListener('click', incrementCounter());

// // firstButton.addEventListener('click', incrementCounter);
// firstButton.addEventListener('click', createCounter());

/*
document.getElementsByTagName
document.getElementById
document.getElementsByClassName
document.querySelector
document.querySelectorAll
*/

// const par1 = document.getElementById('par');
// const [par2] = document.getElementsByClassName('text');

// // const par3 = document.querySelector('body > section > article > p');
// const par3 = document.querySelector('p#par.text');
// const paragraphs = document.querySelectorAll('p');

// const elem1 = document.querySelector('.article > h1');
// const elem2 = document.querySelector('.article + p');
// // const elem3 = document.querySelector('main > div > img');
// const elem3 = document.querySelector('img[alt="GET THIS"]');

// function subscribeHandler() {
//   alert('You are now subscribed !');

//   firstButton.removeEventListener('click', subscribeHandler);
// }

// firstButton.addEventListener('click', subscribeHandler);

// firstButton.addEventListener('click', () => {
//   alert('You are now subscribed !');

//   firstButton.removeEventListener('click', () => {

//   });
// });
const rootDiv = document.getElementById('root');

const btnHandler = (eventObj) => {
  // alert('You are now subscribed !');
  // console.group();
  // console.log(eventObj);
  // console.log('target: ');
  // // с кем произошло событие
  // console.log(eventObj.target);
  // console.log('currentTarget: ');
  // // на ком событие было повешено
  console.log(eventObj.currentTarget);
  // console.groupEnd();
};

firstButton.addEventListener('click', btnHandler, { capture: true });
rootDiv.addEventListener('click', btnHandler, { capture: true });
document.body.addEventListener('click', btnHandler, { capture: true }); // body
document.documentElement.addEventListener('click', btnHandler, true); // html
window.addEventListener('click', btnHandler, true);

// const clickEvent = new MouseEvent('click');

// firstButton.dispatchEvent(clickEvent);

/*
  1. Создать кнопку. При нажатии на эту кнопку отображать
  в коносли / алерте её текстовое содержимое 

  2.  Считатать количество нажатий по кнопке и отображать в её 
      тексте текущее количество кликов
*/

// let counter = 0;

// firstButton.addEventListener('click', (event) => {
//   // console.log(firstButton.textContent);
//   // console.log(event.target.textContent);

//   event.target.textContent = `Clicks: ${++counter}`;
// });
