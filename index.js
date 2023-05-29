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

  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  id = 0;
}

const user1 = new User('login1', 'pass1', 19);

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
  constructor(firstName, lastName, daysWorked, paymentRate) {
    if (typeof daysWorked !== 'number' || isNaN(daysWorked)) {
      throw new TypeError('Days must be number');
    }

    if (daysWorked < 0) {
      throw new RangeError('Days cant be negative number');
    }

    this.firstName = firstName;
    this.lastName = lastName;
    this._daysWorked = daysWorked;
    this.paymentRate = paymentRate;
  }

  set daysWorked (newDaysWorked) {
    if (typeof newDaysWorked !== 'number' || isNaN(newDaysWorked)) {
      throw new TypeError('Days must be number');
    }

    if (newDaysWorked < 0) {
      throw new RangeError('Days cant be negative number');
    }

    this._daysWorked = newDaysWorked;
  }
  
  get daysWorked () {
    return this._daysWorked;
  }

  get magicProperty () {
    return 5*5;
  }


  getPayment() {
    return this._daysWorked * this.paymentRate;
  }


}

const worker1 = new Worker('Test', 'Testenko', 0, 100);
worker1.daysWorked = -5;