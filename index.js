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
const getSumOfTwoNumbers = function () {
  // тело функции
  let number1 = +prompt('Enter number1');
  let number2 = +prompt('Enter number2');

  let result = number1 + number2;

  const isNaNResult = isNaN(result);

  if (isNaNResult) {
    return false;
  } else {
    return result;
  }
};

// let returningValue = getSumOfTwoNumbers();
