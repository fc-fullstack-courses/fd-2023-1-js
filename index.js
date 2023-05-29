'use strict';

class UserClass {
  constructor(login, password, age) {
    this.login = login;
    this.password = password;
    this.age = age;
  }

  isAdult() {
    return this.age >= 18;
  }

  test() {
    return 'test method';
  }
}

const betterUser1 = new UserClass('testlogin1234', '12345admin', 12);
const betterUser2 = new UserClass('oldUser', 'admin12345', 25);