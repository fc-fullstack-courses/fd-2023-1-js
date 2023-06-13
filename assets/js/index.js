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

// firstButton.addEventListener('click', btnHandler, { capture: true });
// rootDiv.addEventListener('click', btnHandler, { capture: true });
// document.body.addEventListener('click', btnHandler, { capture: true }); // body
// document.documentElement.addEventListener('click', btnHandler, true); // html
// window.addEventListener('click', btnHandler, true);

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

// rootDiv.children - дочерние элементы дива
// rootDiv.attributes - все атрибуты елемента

// firstButton.className - строка с классами элемента
// firstButton.className = 'dom-class' - полная перезапись классов элемента

// firstButton.classList - псевдомассив с классами и методами изменения классов

// firstButton.classList.add('new1', 'new2', 'new3'); - добавляет строчки классов к уже существующим
// firstButton.classList.remove('new1', 'new2', 'new3'); - убирает строчки классов из элемента
// firstButton.classList.toggle('test') - "переключает" один класс в элементе

// firstButton.id - получение или изменение айдишника элемента
// firstButton.innerHTML - позвоялет просмтаривать из изменять верстку внутри вашего элемента. ПОЛЬЗОВАТЬСЯ ОСТОРОЖНО!

/*
  имеется такая верстка
  <div id="task">
    <p>Test paragraph</p>
    <button>Dark</button>
    <button>Light</button>
  </div>

  также имеется css файл со стилями, в которых прописаны стили для темной и светлой темы. По нажатию на кнопку добавлять класс с соответствующей темой диву и убирать класс с противоположной темой
*/

const darkBtn = document.querySelector('#task > button');
const lightBtn = document.querySelector('#task > button + button');
const taskDiv = document.querySelector('#task');

const taskDivTitle = document.createAttribute('title');
taskDiv.setAttributeNode(taskDivTitle);

// darkBtn.addEventListener('click', () => {
//   taskDiv.classList.add('dark');
//   taskDiv.classList.remove('light');
//   // taskDiv.setAttribute('title', `Current theme is dark`);
//   taskDivTitle.value = `Current theme is dark`;
// });

// lightBtn.addEventListener('click', () => {
//   taskDiv.classList.remove('dark');
//   taskDiv.classList.add('light');
//   // taskDiv.setAttribute('title', `Current theme is light`);
//   taskDivTitle.value = `Current theme is light`;
// });

const themes = ['light', 'dark'];

console.log(taskDiv.dataset);

function handleThemeSwitch(event) {
  const {
    target: {
      dataset: { theme },
    },
  } = event;
  // const btnTheme = target.getAttribute('theme');

  // taskDiv.className = btnTheme;
  taskDiv.classList.remove(...themes);
  taskDiv.classList.add(theme);
  taskDivTitle.value = `Current theme is ${theme}`;
}

const buttons = document.getElementsByTagName('button');

for (const btn of buttons) {
  btn.addEventListener('click', handleThemeSwitch);
}

// rootDiv.getAttribute('style') - получаем строковое значение атрибута
// const rootStyle = rootDiv.getAttributeNode('style'); - получение узла атрибута
// rootStyle.value = 'new value' - измение значения атрибута

// firstButton.setAttribute('style', 'padding: 20px'); - додабвление или изменение атрибута элемента

const style = document.createAttribute('style');
style.value = 'background-color: red;';
firstButton.setAttributeNode(style);
