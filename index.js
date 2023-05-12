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
