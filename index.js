'use strict';

class User {
  constructor(login, password, age, firstName, lastName) {
    this.login = login;
    this.password = password;
    this.age = age;
    this.firstName = firstName;
    this.lastName = lastName;
  }

  isAdult() {
    return this.age >= 18;
  }

  get firstName() {
    return this._firstName;
  }

  set firstName(newName) {
    if (typeof newName !== 'string') {
      throw new TypeError('Name must be string');
    }

    this._firstName = newName;
  }

  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  set fullName(fullNameString) {
    if (typeof fullNameString !== 'string') {
      throw new TypeError('Name must be string');
    }

    const namesArr = fullNameString.split(' ');

    this._firstName = namesArr[0];
    this._lastName = namesArr[1];
  }

  id = 0;
}

/*
  Добавить классу User геттеры и сеттеры для
    имени
    фамилии

  добавить геттер для полного имени
*/

const user1 = new User('login1', 'pass1', 19, 'name', 'last');

/*
  создать класс Worker
  у сотрудников есть
    имя
    фамилия
    ежедневная ставка
    колисчество отработанных дней

  у сотрудников есть метод, который будет возвращать размер зарплаты, которую необходимо оплатить за пройденное время
*/

class Worker {
  // обьявление приватного свойства экземпляров класса (обьектов)
  #paymentRate;

  constructor(firstName, lastName, daysWorked, paymentRate) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.daysWorked = daysWorked;
    this.paymentRate = paymentRate;
    // this.#sadsadsada= 10;
  }

  get paymentRate() {
    return this.#paymentRate;
  }

  set paymentRate(newRate) {
    if (typeof newRate !== 'number' || isNaN(newRate)) {
      throw new TypeError();
    }

    if (newRate < 0) {
      throw new RangeError();
    }

    this.#paymentRate = newRate;
  }

  set daysWorked(newDaysWorked) {
    if (typeof newDaysWorked !== 'number' || isNaN(newDaysWorked)) {
      throw new TypeError('Days must be number');
    }

    if (newDaysWorked < 0) {
      throw new RangeError('Days cant be negative number');
    }

    this._daysWorked = newDaysWorked;
  }

  get daysWorked() {
    return this._daysWorked;
  }

  get magicProperty() {
    return 5 * 5;
  }

  getPayment() {
    return this.daysWorked * this.#paymentRate;
  }

  static isWorker (obj) {
    return 'test';
  }

  static secret = 'test';
}

// Worker.isWorker = (obj) => {
//   return 'test';
// };

const worker1 = new Worker('Test', 'Testenko', 0, 100);
// worker1.daysWorked = -5;
// console.log(worker1.#paymentRate)
