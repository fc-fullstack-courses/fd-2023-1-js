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
/**
 *
 * @param {number} [num1=10]
 * @param {number} [num2=5]
 * @returns
 */
function multiply(num1 = 10, num2 = 5) {
  return num1 * num2;
}

/**
 * Функция возводит число в квадрат
 * @param {number} num - число которое будут возводить в квадрат
 */
function square(num) {
  if (typeof num !== 'number' || isNaN(num)) {
    throw new TypeError('You must provide valid number');
  }

  const result = multiply(num, num);
  return result;
}

/**
 * @param {object} user - обьект пользователя
 * @param {string} user.firstName - имя пользователя
 * @param {string} user.lastName - фамилия пользователя
 */
function greetUser(user) {
  return `Hello, ${user.firstName} ${user.lastName}`;
}

// v1
//  * @param {number[]} numbers массив чисел
// v2
// @param {Array<number>} numbers
/**
 * @param {Array<number>} numbers
 */
function calculateEven(numbers) {
  let evenNumbers = 0;

  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
      evenNumbers++;
    }
  }

  return evenNumbers;
}

/**
 * @param  {...number} numbers
 */
function calculateEven2(...numbers) {
  let evenNumbers = 0;

  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
      evenNumbers++;
    }
  }

  return evenNumbers;
}

/**
 *
 * @param {(string | number)} data число или строка
 */
function printData(data) {
  return data;
}

/*
  v1
  @param {object} [user] - опциональный обьект пользователя

  v2
  @param {object=} user - опциональный обьект пользователя
*/

/**
 * @param {object} [user] - опциональный обьект пользователя
 * @param {string} user.firstName - имя пользователя
 * @param {string} user.lastName - фамилия пользователя
 * @returns {string} строка, которая здоровается с пользователем или гостем
 */
function greetUser2(user) {
  if (user) {
    return `Hello, ${user.firstName} ${user.lastName}`;
  }

  return `Hello, guest`;
}
