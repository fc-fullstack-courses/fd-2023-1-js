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
