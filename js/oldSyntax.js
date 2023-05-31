'use strict';

// литеральное создание
// const obj1 = {
//   key: 'value1',
//   key2: true,
//   age: 50,
// };

// конструктор
function User(login, password, age) {
  this.login = login;
  this.password = password;
  this.age = age;

  // this.isAdult = function () {
  //   return this.age >= 18;
  // };
}

// const user3 = new User('test', 'test', 1234);

const userProto = {
  isAdult: function () {
    return this.age >= 18;
  },
  test: function () {
    return 'test method';
  },
};

// obj1.__proto__ = userProto;

User.prototype = userProto;

const user = new User('testlogin1234', '12345admin', 12);
const user2 = new User('oldUser', 'admin12345', 25);
