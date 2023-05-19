// console.log('dfdsfdsg');

// alert('asdaff');

// let test = 12343;

// console.log(test);

// 46456;

// функция, которая позволяет пользователю ввести что-то

/*
  получите имя пользователя
  выведите в консоли / алерте следующее сообщение:
  Привет, Пользователь
*/
// let userInput = prompt('Введите имя');
// let greetingText = 'Привет, ' + userInput;
// console.log(greetingText);

// let value = NaN;
// alert(value !== value); 1
// const isNaNAnswer = isNaN(value); 2

// let number1 = +prompt('Enter number1');
// let number2 = +prompt('Enter number2');

// let result = number1 + number2;

// const isNaNResult = isNaN(result);

// if (isNaNResult) {
//   alert('Incorrect data. Please try again');
// } else {
//   alert(result);
// }

// funcion expression (функциональное выражение)
const getSumOfTwoNumbers = function (num1, num2) {
  // тело функции
  let result = num1 + num2;

  const isNaNResult = isNaN(result);

  if (isNaNResult) {
    return false;
  } else {
    return result;
  }
};

// let returningValue = getSumOfTwoNumbers();

/*
  создать функцию, которая будет делить первое число на второе
*/
const divide = function (num1, num2) {
  let result = num1 / num2;

  const isNaNResult = isNaN(result);

  if (isNaNResult) {
    return false;
  } else {
    return result;
  }
};

let testValue = null;

/*
  Создать функцию которая принимает два числа и находит наибольшее из них

  Создать функцию которая будет говорить, является ли число четным или нет

  Создать функцию которая принимает возраст пользователя и говорит, совершеннолетний он или нет
*/

const moreLess = function (num1, num2) {
  if (
    typeof num1 !== 'number' ||
    typeof num2 !== 'number' ||
    isNaN(num1 - num2)
  ) {
    return null;
  }

  if (num1 > num2) {
    return num1;
  } else {
    return num2;
  }
};

const res1 = moreLess(9, 9);

// console.log('число ' + res1 + ' больше');

const isEven = function (num) {
  if (typeof num !== 'number' || num !== num) {
    return null;
  }

  return num % 2 === 0;
};

isEven('hghggh');

const isAdult = function (age) {
  if (typeof age !== 'number' || age !== age || age <= 0 || age > 110) {
    return null;
  }
  return age >= 18;
};

const result = 12345;
// console.log(result);

const testFunc = function () {
  const result = true;
  console.log(result);
};

// console.log(result);

// var test = 'asdsafsa';
// console.log(test);

// const testFunc2 = function () {
//   var test = 1233435;

//   console.log(test);
// };

// testFunc2();

// console.log(test);

if (true) {
  var test = 346546;
  console.log(test);
}

console.log(test);

// funct();

// function expression
const funct = function () {};

sum2();

// function declaration
function sum2(num1, num2) {
  console.log('declaration');
  return num1 + num2;
}

// function User () {
//   this.age = 123;
// }

// const user = new User();

// High Order Function (HOF)

function saySomething(howToSay, whatToSay) {
  howToSay(whatToSay);
  // alert();
}

// saySomething(alert, 'test phrase');
saySomething(console.log, 'test phrase');

// High Order Function (HOF)
function highOrderFunction() {
  const someFunc = function () {};

  return someFunc;
}

let x = 1;

// function sum(num1, num2) {
//   x++;

//   return num1 + num2 + x;
// }

function multiply(num1, num2) {
  return num1 * num2;
}

function square(num) {
  const result = multiply(num, num);
  return result;
}
