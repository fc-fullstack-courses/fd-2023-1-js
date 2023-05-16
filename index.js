'use strict';

const object = {
  key: 'value',
  display: 'flex',
  justiftContent: 'center',
};

const car = {
  color: 'red',
  model: 'Model XYT++',
  power: 430,
  isUsed: false,
  dimensions: {
    width: 3,
    height: 2,
    lenght: 7,
  },
  otherObject: object,
  drive: function () {
    // метод обьекта
    return 'car is driving';
  },
};

// Создание обьектов
const obj1 = {}; // литеральное создание
const obj2 = Object(); // редко
const obj3 = new Object(); // редко

const cat = {
  nickname: 'Vas`ka',
  color: 'gray',
  age: 3,
  weight: 5,
  breed: 'British',
  isAngry: false,
  meow: function () {
    return 'cat is meowing';
  },
  run() {
    return 'cat is running';
  },
};

// Чтение
// console.log(cat);
// alert(cat); // приводит к строке которую он и показывает

// обьект.свойствоОбьекта
// cat.breed
// cat.isAngry
// console.log(cat.age);
// console.log(cat.asdsfdsf) // undefined

// Изменение
// обьект.свойствоОбьекта = новоеЗначение
cat.weight = cat.weight + 1;
cat.weight += 1;
cat.weight++;

cat.furType = 'long'; // добавление новых свойст

// Удаление свойств
delete cat.isAngry;
// cat.age = undefined;

// Конструкторы
// const WildCat = function() {} // PascalCase

/*

const cat = {
  nickname: 'Vas`ka',
  color: 'gray',
  age: 3,
  weight: 5,
  isMale: true,
  breed: 'British',
  meow: function () {
    return 'cat is meowing';
  },
  run() {
    return 'cat is running';
  },
};

*/

const Cat = function (nickname, color, age, weight, breed, isMale) {
  // debugger;
  this.nickname = nickname;
  this.color = color;
  this.age = age;
  this.weight = weight;
  this.breed = breed;
  this.isMale = isMale;

  this.meow = function () {
    return 'cat is meowing';
  };

  this.run = function () {
    return 'cat is running';
  };
};

// const cat1 = new Cat('Anfisa', 'white', 2, 3.5, 'Siameese', false);
// const cat2 = new Cat('Anfisa', 'white', 2, 3.5, 'Siameese', false);

/*
  Создайте функцию-конструктор для пользователя
  у пользователя должны быть следующие свойства:
  имя
  фамилия
  возраст
  пол
  *полное имя (имя и фамилия одновременно)
*/

const User = function (firstName, lastName, age, isMale) {
  //debugger;
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
  this.isMale = isMale;

  this.fullName = this.firstName + ' ' + this.lastName;
};

const user1 = new User('Denis', 'Ivanov', 20, true);
const user2 = new User('Olya', 'Denisyk', 50, false);
const user3 = new User('Yehor', 'Stepanov', 30, true);

const obj = {
  0: 'secret test',
};

// console.log(obj.0);
// console.log(obj.'0');

let index = 0;

// console.log(obj[0]);
// console.log(obj['0']);
// console.log(obj[50 - 50]);
// console.log(obj[index]);

let key = 'my secret key';

obj[key] = 'but why?';

// console['log']('but why X2 ?')

/*
  создать функцию, которая принимает число
  и возвращает обьект
  свойства в обьекте описывают таблицу умножения, где
  ключ - 2 * 5 =
  значение 10

  таблица расчитывает от 1 до принятого параметра


  createMultiplicationTable (5)
    {
      '1 * 1 =' : 1,
      '1 * 2 =' : 2,
      '1 * 3 =' : 3,






      
      // ...
      '5 * 4 =' 20,
      '5 * 5 =' 25
    }
*/

const createMultiplicationTable = function (maxNumber) {
  const table = {};

  for (let i = 1; i <= maxNumber; i++) {
    debugger;
    for (let j = 1; j <= maxNumber; j++) {
      table[`${i} * ${j} =`] = j * i;
    }
  }

  return table;
};

const test1 = 10;
const test2 = 10;

const cat1 = {
  isMale: true,
  age: 3,
};

const cat2 = {
  isMale: true,
  age: 3,
};
// одинаковая ячейка

// console.log(cat3 === cat2);

const cat3 = cat2;
cat3.age++;

const mouse1 = {
  nickname: 'Mickey',
};

const mouse2 = new Object({ nickname: 'Mickey' });

function Phone(model, color, memory, price, hasNFC) {
  this.model = model;
  this.color = color;
  this.memory = memory;
  this.price = price;
  this.hasNFC = hasNFC;

  this.call = function (who) {
    return `You are calling ${who}`;
  };
}

const phone1 = new Phone('Galaxy Note 530', 'white', 256, 49999, true);
const phone2 = new Phone('Test phone X', 'black', 128, 25999, false);

const phones = [];

for (let i = 0; i < 200000; i++) {

  const hasNFC = i % 2 === 0;

  const newPhone = new Phone(
    `Random Phone ${i + 1}`,
    `color ${i + 1}`,
    128,
    29999,
    hasNFC
  );

  phones.push(newPhone);
}
