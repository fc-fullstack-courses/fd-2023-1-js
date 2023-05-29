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
    this.firstName = firstName;
    this.lastName = lastName;
    this.daysWorked = daysWorked;
    this.paymentRate = paymentRate;
  }

  getPayment () {
    return this.daysWorked * this.paymentRate;
  }
}

const worker1 = new Worker('Test', 'Testenko', 5, 100);
