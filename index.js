// debugger;
// let condition = NaN;
// let condition2 = false;

// if (condition) {
//   // выполнится только если condition приводится к true
//   console.log('condition is true');
// } else if (condition2) {
//   // выполнится тогда, когда все условия до него были лживы
//   // а его условие истинно
//   console.log('else if');
// } else if (10 < 3) {
//   // выполнится тогда, когда все условия до него были лживы
//   // а его условие истинно
//   console.log('else if 10 < 3');
// } else if (5 === 'five') {
//   // выполнится тогда, когда все условия до него были лживы
//   // а его условие истинно
//   console.log('else if 5 === five');
// } else if (7) {
//   // выполнится тогда, когда все условия до него были лживы
//   // а его условие истинно
//   console.log('else if 7');
// } else {
//   // выполняется во всех других случаях. Всегда пишется в конце
//   // конструкции
//   console.log('this is else');
// }

// switch ... case
// const userOrder = prompt(
//   'Choose your product \n1 - tea \n2 - coffee \n3 - juice'
// );
// // debugger;
// switch (userOrder) {
//   // описываем случаи / значения которые принимает userOrder
//   // и сравнивает их по строгому стравнению (===)
//   case 'Чай':
//   case 'чай':
//   case 'Tea':
//   case 'tea':
//   case '1': {
//     // код для случая userOrder === '1'
//     const amount = prompt('how meny');
//     alert('You have ordered tea');
//     // отключает падение дальше по кейсам
//     break;
//   }
//   case '2': {
//     alert('You have ordered coffee');
//     break;
//   }
//   case '3': {
//     alert('You have ordered juice');
//     break;
//   }
//   // для всех остальных случаев
//   // в него тоже мон упасть если не делать break
//   default: {
//     alert('incorrect product number');
//   }
// }

let a = 10;
let b = 70;

if (a > b) {
  console.log(1);
} else {
  console.log(2);
}

// тернарный (условный) оператор
a > b ? console.log(1) : console.log(2);
console.log(a > b ? 1 : 2);

const getInput = function () {
  const input = prompt();

  // if (input) {
  //   return input;
  // } else {
  //   return 'Nothing was entered';
  // }

  return input ? input : 'Nothing was entered';
};

let result;

if (a > b) {
  result = a;
} else {
  result = b;
}

let result1 = a > b ? a : b;

/*
  Создать простенький калькуляторы с использованием
  if ... else
  switch ... case

  калькуляторы должны уметь 
    сложить
    вычесть
    поделить
    умножить
  2 числа

  * переделать решения на отдельные функции
*/
