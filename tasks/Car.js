/*
сделайте функцию конструктор Car

у машины есть следующие свойства
manufacturer (производитель)
model (модель)
color (цвет)
releaseYear (год выпуска)
speed (скорость. число) // текущая скорость, при создании машины она никуда не едет
maxSpeed (максимальная скрость, число)


машина должна уметь:
разгонятся (увеличивать значение скорости)
тормозить  (уменьшать значение скорости)
останавливатся (значение скорости в ноль)


Методы машины должны передаватся из прототипа


*/

// function Car(manufacturer, model, color, releaseYear, maxSpeed) {
//   this.manufacturer = manufacturer;
//   this.model = model;
//   this.color = color;
//   this.releaseYear = releaseYear;
//   this.speed = 0;
//   this.maxSpeed = maxSpeed;
// }

// const carProto = {
//   plusSpeed: function (value) {
//     this.speed += value;
//   },
//   slowlySpeed: function (value) {
//     this.maxSpeed -= value;
//   },
//   stopSpeed: function () {
//     this.speed = 0;
//   },
// };

// Car.prototype = carProto;

// const car1 = new Car('Kia', 'Fast', 'black', 2022, 180);
// const car2 = new Car('Toyota', 'Camry', 'white', 2020, 220);

// car1.plusSpeed(30);
// car1.slowlySpeed(10);
// car1.stopSpeed();

const Car = function (manufacturer, model, color, releaseYear, maxSpeed) {
  if (typeof maxSpeed !== 'number' || isNaN(maxSpeed)) {
    throw new TypeError('Max speed of a car must be a number');
  }

  if(maxSpeed <= 0) {
    throw new RangeError('Max speed of a car must be positive value');
  }

  this.manufacturer = manufacturer;
  this.model = model;
  this.color = color;
  this.releaseYear = releaseYear;
  this.speed = 0;
  this.maxSpeed = maxSpeed;
};

const carProto = {
  racing: function (racingValue) {
    if (this.speed + racingValue <= this.maxSpeed) {
      this.speed += racingValue;
      return;
    }

    throw new RangeError('Car cant accelerate by this amount');
  },

  brake: function (brakeValue) {
    if (this.speed - brakeValue >= 0) {
      this.speed -= brakeValue;
    }
  },
  showSpeed: function () {
    return this.speed;
  },
  stop: function () {
    this.speed = 0;
  },
};

Car.prototype = carProto;

const car1 = new Car('Opel', '5X', 'red', 1996, 220);
const car2 = new Car('Mersedes', '98', 'black', 2020, 280);
const car3 = new Car('Mersedes', '98', 'black', 2020, -500);
