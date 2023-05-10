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
  dimensions : {
    width: 3,
    height: 2,
    lenght: 7
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
};