'use strict';

// window.document;
// document

// Что делать
function btnAlert() {
  alert('Hello world');
}

// Кто (поиск элемента)
const [firstButton] = document.getElementsByTagName('button');
// const [firstButton] = buttons;

// Когда мы будем что-то делать
// target.addEventLister(type, listener);
firstButton.addEventListener('click', btnAlert);