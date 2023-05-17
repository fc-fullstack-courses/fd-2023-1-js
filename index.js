'use strict';

function sum(num1, num2) {
  if (
    typeof num1 !== 'number' ||
    typeof num2 !== 'number' ||
    isNaN(num1 - num2)
  ) {
    // const error = new TypeError('You must provide numbers');

    // throw error;

    throw new TypeError('You must provide numbers');
  }

  return num1 + num2;
}

try {
  // опасный код
  console.log(1);

  const result = sum(false, 20);
  // throw 10;
  console.log(2);
} catch (error) {
  // выполняется в случае ошибки в try
  console.log('Error happened');
  console.log(error.message);

  if(error.message = 'You must provide numbers') {
    alert('Enter numbers next time')
  }
} finally {
  // код выполняется после catch или
  // после успешного выполнения всего try
  console.log('finally');
}
