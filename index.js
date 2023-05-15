'use strict';

// const user1Email = 'mail1@test.test';
// const user2Email = 'mail2@test.test';
// const user3Email = 'mail3@test.test';

// const userEmails = {
//   0: 'mail1@test.test',
//   1: 'mail2@test.test',
//   2: 'mail3@test.test',
//   // 1: 'mail4@test.test'
// };

// const userEmailsArr = new Array(
//   'mail1@test.test',
//   'mail2@test.test',
//   'mail3@test.test'
// );

// userEmailsArr[40] = 'mail4@test.test';

const userEmails = [
  'mail1@test.test',
  'mail2@test.test',
  'mail3@test.test',
  'mail4@test.test',
];

// console.log(userEmails[3]);

// добавление элементов в конец
userEmails.push('test@test.test');
let currentLength = userEmails.push('new1@test.com', 'new2@test.com');

// удаление элемента из конца массива
const lastEmail = userEmails.pop();

// добавление элементов в начало массива
let currentLength2 = userEmails.unshift(
  'iwillbedeleted@mail.com',
  'unshifted1@test.com'
);

// удаление элемента из начала массива
const firstEmail = userEmails.shift();

// удалить все элементы начиная с указанного индекса
// userEmails.splice(3);

// удаляет все элементы начиная с 4 элемента с конца
// userEmails.splice(-4);

// удаленные элементы возвращаются в отдельном массиве
// const deletedEmails = userEmails.splice(-4);

// удаление опеределенного количества елементов
userEmails.splice(1, 4);

// добавление новых элементов
userEmails.splice(1, 0, 'spliced1@test.test', 'spliced2@test.test');

// Дан массив [1, 2, 3]. Добавьте ему в конец элементы 4, 5, 6.
const task1 = [1, 2, 3];
task1.push(4, 5, 6);
//  Дан массив [1, 2, 3]. Добавьте ему в начало элементы 4, 5, 6.
const task2 = [1, 2, 3];
task2.unshift(4, 5, 6);

// Дан массив ['js', 'css', 'jq']. Выведите на экран первый элемент и удалите его.
const task3 = ['js', 'css', 'jq'];
const deleted1 = task3.shift();
console.log(deleted1);

//  Дан массив ['js', 'css', 'jq']. Выведите на экран последний элемент и удалите его .
const task4 = ['js', 'css', 'jq'];
const deleted2 = task4.pop();
console.log(deleted2);

//  Дан массив [1, 2, 3, 4, 5]. С помощью метода splice преобразуйте массив в [1, 4, 5].
const task5 = [1, 2, 3, 4, 5];
task5.splice(1, 2);

//  Дан массив [1, 2, 3, 4, 5]. С помощью метода splice запишите в новый массив элементы [2, 3, 4].
const task6 = [1, 2, 3, 4, 5];
const spliced = task6.splice(1, 3);

//  Дан массив [1, 2, 3, 4, 5]. С помощью метода splice сделайте из него массив [1, 2, 3, 'a', 'b', 'c', 4, 5].
const task7 = [1, 2, 3, 4, 5];
task7.splice(3, 0, 'a', 'b', 'c');

//  Дан массив [1, 2, 3, 4, 5]. С помощью метода splice сделайте из него массив [1, 'a', 'b', 2, 3, 4, 'c', 5, 'e'].
const task8 = [1, 2, 3, 4, 5];
task8.splice(1, 0, 'a', 'b');
task8.splice(-1, 0, 'c');
// task8.splice(6, 0, 'c');
// task8.splice(8, 0, 'e');
task8.splice(task8.length, 0, 'e');
