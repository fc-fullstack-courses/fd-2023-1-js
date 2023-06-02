'use strict';

class MyArray {
  constructor() {
    this.length = 0;
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
}

const arr = [];
const myArr = new MyArray();

myArr.push(16546);
myArr.push('text');
myArr.push(true, null, false);
