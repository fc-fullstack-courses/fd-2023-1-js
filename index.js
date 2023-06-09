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

let counter = 0;

function incrementCounter() {
  alert(++counter);
}

firstButton.addEventListener('click', incrementCounter);