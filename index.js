'use strict';

class MyArray {
  constructor(...elements) {
    this.length = 0;

    // for(let i = 0; i < elements.length; i++) {
    //   this.push(elements[i]);
    // }

    this.push(...elements);
  }

  push(...elements) {
    /*
      1. нужно принять неограниченное количество значений
      2. для каждого входящего параметра функции:
        2.1 создаем в массиве новый элемент с индексом, равным старому значению длины массива
        2.2 кладем туда входящее значение
        2.3 увеличиваем значение длины массива
        2.4 повторяем пункты 2.1 - 2.3 до тех пор пока не закончатся входные параметры
      3. возвращаем новую дину массива
    */

    for (let i = 0; i < elements.length; i++) {
      this[this.length] = elements[i];
      this.length++;
    }

    return this.length;
  }

  pop() {
    /*
      1. если массив пустой (длина = 0) 
        1.1 вернуть undefined
      2. если массив не пустой:
        2.1 сохранить удаляемый элемент
        2.2 удаляем последнее свойство 
        2.3 уменшить длину на 1
        2.4 вернуть удаляемый элемент
    */

    if (this.length === 0) {
      return undefined;
    }

    const deletedElem = this[this.length - 1];

    delete this[this.length - 1];

    this.length--;

    return deletedElem;
  }

  [Symbol.iterator]() {
    let i = 0;
    const arrayContext = this;

    return {
      next: function () {
        return {
          done: i >= arrayContext.length,
          value: arrayContext[i++],
        };
      },
    };
  }
}

const arr = new Array(40, 53, 46);
const myArr = new MyArray(40, 53, 46);

// myArr.push(40, 53, 46);

// const arrDeleted1 = arr.pop();
// const arrDeleted2 = arr.pop();

// console.log(arrDeleted1);
// console.log(arrDeleted2);
// console.log(arr);

// const myArrDeleted1 = myArr.pop();
// const myArrDeleted2 = myArr.pop();

// console.log(myArrDeleted1);
// console.log(myArrDeleted2);
// console.log(myArr);

const arr1 = [1, 3, 5];
const arr2 = [2, 4, 6];
const arr3 = [...arr1, ...arr2];

// for (let number of arr3) {
//   console.log(number);
// }

// for (let i = 0; i < arr3.length; i++) {
//   console.log(arr3[i]);
// }

for (let elem of myArr) {
  console.log(elem);
}
