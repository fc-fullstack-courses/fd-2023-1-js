'use strict';

class User {
  constructor(login, password, firstName, lastName, age) {
    this.login = login;
    this.password = password;
    this.age = age;
    this.firstName = firstName;
    this.lastName = lastName;
    this.isBanned = false;
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

  createMessage(message) {
    console.log(`message ${message} created new`);
  }

  static isUser(obj) {
    return obj instanceof User;
  }

  id = 0;
}

const user1 = new User('login1', 'pass1', 'name', 'last', 19);
const user2 = new User('login2', 'pass2', 'name2', 'last2', 27);

class Moderator extends User {
  constructor(login, password, age, firstName, lastName, permissions) {
    // обязательно вызывать первым делом в конструкторе наследумого класса
    super(login, password, firstName, lastName, age); // ссылка на конструктор родительского класса (User)

    this.permissions = permissions;
  }

  deleteMessage(message) {
    console.log(`message ${message} deleted`);
  }
}

const moder1 = new Moderator(
  'moder1234',
  'moder12345',
  42,
  'Moder',
  'Moderovich',
  ['delete']
);

/*
Создайте класс Moderator и унаследуйте функционал User

Создайте класс Admin, унаследуйте их от Модеров
  Админы умеють банить пользователей
    * у пользователей должно быть булевое свойство
      которое показывае забанены ли они. При бане
      пользователя свойство меняется
*/

class Admin extends Moderator {
  constructor(login, password, age, firstName, lastName, permissions) {
    super(login, password, age, firstName, lastName, permissions);
  }

  ban(user) {
    if (User.isUser(user)) {
      console.log(`User ${user.login} is banned`);
      user.isBanned = true;
    } else {
      throw new TypeError('Invalid user');
    }
  }
}

const admin1 = new Admin('admin', 'admin12345', 55, 'Tiran', 'Tiranovich', [
  'anything',
]);

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

  static isWorker(obj) {
    return obj instanceof Worker;
  }

  static secret = 'test';
}

// Worker.isWorker = (obj) => {
//   return 'test';
// };

const worker1 = new Worker('Test', 'Testenko', 0, 100);
// worker1.daysWorked = -5;
// console.log(worker1.#paymentRate)


class Phone {
  #connectToProvider;
  #battery;
  constructor (name, battery, cpu, memory) {

  }

  get battery () {
    return this.#battery;
  }

  set battery (newAmount) {

    this.#battery = newAmount;
  }

  /**
   * 
   * @param {number | string} phoneNumber номер телефона по которому будут звонить
   */
  call (phoneNumber) {
    // тут код связанный с звонком
    // #connectToProvider();
  }

  /**
   * связывазвает телефон с оператором
   */
  #connectToProvider () {

  }

}

const phone1 = new Phone();

phone1.call(354687646456);