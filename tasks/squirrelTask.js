/*
  Создать класс Белки
    у белое есть
      цвет меха
      имя (кличка)

    белки умеют лазать по деревьям и есть 

    Создать класс Белок-Летяг, они умеют все что могут делать обычные белки
      и они также умеют летать
      у  каждой белки-летяги есть максимальная дистанция полета
*/

// class Squirrel {
//   constructor(name, color) {
//     this.name = name;
//     this.color = color;
//     this.isHungry = false;
//   }
//   move() {
//     console.log(`Squirrel ${this.name} climbs a tree`);
//   }
//   eat() {
//     this.isHungry = false;
//   }
// }

// class flyingSquirrel extends Squirrel {
//   constructor(name, color, maxDistanse) {
//     super(name, color);
//     this.maxDistanse = maxDistanse;
//   }
//   // move() {
//   //   if (this.isHungry === true) {
//   //     console.log(`Squirrel ${this.name} can fly 15 meters`);
//   //   } else {

//   //   }
//   // }

//   fly () {
//     console.log(`Squirrel ${this.name} can fly ${this.maxDistanse} meters`);
//   }

// }
// const squirrel1 = new Squirrel('Flesh', 'brown');
// const flyingSquirrel1 = new flyingSquirrel('Timon', 'red');
// const flyingSquirrel2 = new flyingSquirrel('Max', 'greey');
// flyingSquirrel1.isHungry = true;
// console.log(flyingSquirrel1);
// flyingSquirrel1.move();
// flyingSquirrel1.eat();
// console.log(flyingSquirrel1);
// flyingSquirrel1.move();

// class Squirrel {
//   #nickname;
//   #furColor;
//   /** 
//    * @constructor
//    * @param {string} nickname
//    * @param {string} furColor
//    */
//   constructor(nickname, furColor) {
//     this.nickname = nickname;
//     this.furColor = furColor;
//     this.isHungri = true;
//   }

//   /**
//    * @param {string} nameString
//    */
//   set nickname(nameString) {
//     if (typeof nameString !== 'string') {
//       throw new TypeError('Name must be string!');
//     }
//     this.#nickname = nameString;
//   }

//   /**
//    * @param {string} colorString
//    */
//   set furColor(colorString) {
//     if (typeof colorString !== 'string') {
//       throw new TypeError('Name must be string!');
//     }
//     this.#furColor = colorString;
//   }

//   get nickname() {
//     return this.#nickname;
//   }

//   get furColor() {
//     return this.#furColor;
//   }

//   climbUpTrees() {
//     console.log(
//       `A ${this.#furColor} squirrel named ${this.#nickname} can climb trees.`
//     );
//   }

//   eat() {
//     console.log(`A ${this.#furColor} squirrel named ${this.#nickname} eating.`);
//     this.isHungri = false;
//   }
// }

// class FlyingSquirrel extends Squirrel {
//   #maxFlyDistance;
//   /**
//    * @constructor
//    * @param {string} nickname
//    * @param {string} furColor
//    * @param {number} maxFlyDistance
//    */

//   constructor(nickname, furColor, maxFlyDistance) {
//     super(nickname, furColor);
//     this.maxFlyDistance = maxFlyDistance;
//   }

//   /**
//    * @param {number} number
//    * @return {number}
//    */
//   set maxFlyDistance(number) {
//     if (typeof number !== 'number' || isNaN(number)) {
//       throw new RangeError('Length must be a number!');
//     }

//     if(number <= 0) {
//       throw new RangeError();
//     }

//     this.#maxFlyDistance = number;
//   }

//   get maxFlyDistance() {
//     return this.#maxFlyDistance;
//   }

//   /**
//    *
//    * @param {number} number
//    * @returns {string}
//    */
//   flyBetweenTrees(number) {
//     if (typeof number !== 'number' || isNaN(number)) {
//       throw new RangeError('Length must be a number!');
//     }
//     if (number <= 0) {
//       throw new RangeError('Distance must be a positive number!');
//     }

//     const totalDistanse = number > this.#maxFlyDistance ? this.#maxFlyDistance : number;

//     return `${this.nickname} jumped ${totalDistanse} meters.`;
//   }
// }

// const sguirrelJump1 = new Squirrel('Tim', 'grey');
// const squirrelFly1 = new FlyingSquirrel('Chip', 'red', 8);
