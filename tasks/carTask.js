/*
  создать класс машины
    у машины будет 
      название
      максимальная скорость
      текущая скорость

    машина должна уметь
      разгонятся
      тормозить

    скорость и максимальная скорость не должна быть отрицательной
*/

// class Car {
//   constructor(name, maxSpeed, currentSpeed) {
//     this.name = name;
//     this.maxSpeed = maxSpeed;
//     this.currentSpeed = currentSpeed;
//   }

//   get maxSpeed() {
//     return this._maxSpeed;
//   }

//   get currentSpeed() {
//     return this._currentSpeed;
//   }

//   set currentSpeed(speed) {
//     if (typeof speed !== 'number' || isNaN(speed)) {
//       throw TypeError('speed should be a number');
//     }

//     if (speed < 0) {
//       throw RangeError(
//         'current speed cannot be less then 0 or grater then your max speed'
//       );
//     }

//     this._currentSpeed = speed;
//   }

//   set maxSpeed(speed) {
//     if (typeof speed !== 'number') throw TypeError('speed should be a number');
//     if (speed < 0) throw RangeError('maximum speed cannot be less then 0');
//     this._maxSpeed = speed;
//   }

//   acceleration(speed) {
//     if (typeof speed !== 'number' || isNaN(speed)) {
//       throw new TypeError();
//     }

//     if (this.currentSpeed + speed <= this.maxSpeed) {
//       this.currentSpeed = speed;
//       return this.currentSpeed;
//     }

//     throw new RangeError('Car cant move this fast');
//   }

//   brake(speed) {
//     if (typeof speed !== 'number' || isNaN(speed)) {
//       throw new TypeError();
//     }

//     if (this.currentSpeed - speed < 0) {
//       // throw RangeError('brake speed should be less then 0');
//       this.currentSpeed = 0;
//       return this.currentSpeed;
//     }

//     this.currentSpeed = speed;
//     return this.currentSpeed;
//   }
// }

// const car = new Car('test', 15, 5);
// console.log(car.acceleration(10));
// console.log(car.brake(5));

// class Car {
//   #speed = 0;
//   #manufacturer = '';
//   #maxSpeed = 0;

//   /**
//    * @constructor
//    * @param {string} manufacturer
//    * @param {number} maxSpeed
//    */
//   constructor(manufacturer, maxSpeed) {
//     if (typeof manufacturer !== 'string') {
//       throw new TypeError('Manufacturer must be string');
//     }
//     this.#manufacturer = manufacturer;
//     this.maxSpeed = maxSpeed;
//   }

//   get speed() {
//     return this.#speed;
//   }

//   get manufacturer() {
//     return this.#manufacturer;
//   }

//   get maxSpeed() {
//     return this.#maxSpeed;
//   }

//   /**
//    * @param {number} newMaxSpeed
//    */
//   set maxSpeed(newMaxSpeed) {
//     if (typeof newMaxSpeed !== 'number' || isNaN(newMaxSpeed)) {
//       throw new TypeError('MaxSpeed must be string');
//     }
//     if (newMaxSpeed < 0) {
//       throw new RangeError('MaxSpeed must be positive');
//     }

//     this.#maxSpeed = newMaxSpeed;
//   }

//   upSpeed(number) {
//     if (typeof number !== 'number' || isNaN(number)) {
//       throw new TypeError('You must provide numbers');
//     }

//     if (number < 0) {
//       number *= -1;
//     }

//     // this.#speed += number;
//     this.#speed =
//       this.#speed + number > this.maxSpeed
//         ? this.maxSpeed
//         : this.#speed + number;
//   }

//   downSpeed(number) {
//     if (typeof number !== 'number' || isNaN(number)) {
//       throw new TypeError('You must provide numbers');
//     }

//     if (number < 0) {
//       number *= -1;
//     }

//     this.#speed = number > this.#speed ? 0 : this.#speed - number;
//   }

//   stop() {
//     this.#speed = 0;
//   }
// }
