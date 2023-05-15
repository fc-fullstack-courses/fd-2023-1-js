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

// Копирование части массива начиная с индекса до конца
const vipEmails = userEmails.slice(3);
const vipEmails2 = userEmails.slice(-2);

// Копирование части массива начиная с индекса1 до индекса2
const workerEmails = userEmails.slice(1, 3);
const workerEmails2 = userEmails.slice(1, -2);

// скопируйте в новый массив первую половину старого
userEmails.push('testmail@mail.com');
const sliceSolution1 = userEmails.slice(0, 3);
const sliceSolution2 = userEmails.slice(0, userEmails.length / 2);

// concat
const concat1 = userEmails.concat('1@1.1', '2@2.2');

const emails2 = [100, 200, 300];
const concat2 = userEmails.concat(emails2, '3@3.3', [700, [800, 900]]);
