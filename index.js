'use strict';

const map = new Map();

const keyArr = [1, 2, 3];

// запись данных в мапу
map.set('key', 'value');
map.set(10, 'number');
map.set(null, 'null');
map.set([1, 2, 3], 'array');
map.set('10', 'string ten');
// изменение данных в мапе
map.set(10, { test: false });
map.set(keyArr, 'delete me');

// удаление данных из мапы
map.delete(null);
map.delete([1, 2, 3]);
map.delete(keyArr);

// map.clear();

// чтение данных
const value1 = map.get('10');
const value2 = map.get(null);

const isElemInMap = map.has('some key');

const vocabulary = new Map();

vocabulary.set('I', 'я');
vocabulary.set('cat', 'кіт');
vocabulary.set('have', 'мати');
vocabulary.set('like', 'подобатися');
vocabulary.set('fish', 'риба');
vocabulary.set('pet', 'улюбленець');
vocabulary.set('vase', 'ваза');
vocabulary.set('green', 'зелений');

const untraslatedString = 'I like cat I have green dragon vase dolphin';

/**
 *
 * @param {string} str
 * @param {Map<string, string>} vocab
 * @returns {string} переведенная строка
 */
function translate(str, vocab) {
  let translatedStr = '';

  const words = str.split(' ');

  for (const word of words) {
    const translatedWord = vocab.get(word);

    translatedStr += `${translatedWord} `;
  }

  return translatedStr.trim();
}

/**
 *
 * @param {string} str
 * @param {Map<string, string>} vocab
 * @returns {string} переведенная строка
 */
const translate2 = (str, vocab) =>
  str
    .split(' ')
    .map((word) => (vocab.has(word) ? vocab.get(word) : word))
    .join(' ');

// Set
const set = new Set();
const set2 = new Set([10, 20, 30, 40, 40]);

set.add(10);
set.add(15);
set.add('asdsadsad');

// set.add([10]);
// set.add([10]);

set.delete(15);
// set.clear();

const isValueInSet = set.has(100);

/*
  дано 2 массива с именами 
  с помощью сета получите набор уникальных имен
  (имена в исходных массивах будут повторятся)

  * все уникальные имена отправить в третий массив
*/

const arr1 = ['Test', 'Test2', 'Test3'];
const arr2 = ['Test4', 'Test5', 'Test'];

// const uniqueNameSet = new Set();

// for(let i = 0; i < arr1.length; i++) {
//   uniqueNameSet.add(arr1[i]);
// }

// for(let i = 0; i < arr2.length; i++) {
//   uniqueNameSet.add(arr2[i]);
// }

// const uniqueNameSet = new Set(arr1.concat(arr2));

// const uniqueNameSet = new Set([...arr1, ...arr2]);

// const uniqueNames = [];

// for (const value of uniqueNameSet) {
//   uniqueNames.push(value);
// }

const uniqueNames = [...new Set([...arr1, ...arr2])];

map.forEach((value, key, map) => {
  // console.log(value);
  // console.log(key);
  // console.log(map);
});

set.forEach((value, key, map) => {
  // console.log(value);
  // console.log(key); // key === value
  // console.log(map);
});

const mapIterKeys = map.keys();
const mapIterValues = map.values();
const mapIterEntries = map.entries();

// for (const key of mapIterKeys) {
//   console.log(key);
// }

// for (const value of mapIterValues) {
//   console.log(value);
// }

// for (const entry of mapIterEntries) {
//   console.log(entry);
// }

// for (const [key, value] of map.entries()) {
//   // const [key, value] = entry;
//   console.log(key);
//   console.log(value);
// }

// for (const test of map) {
//   console.log(test);
// }

// for (const value of set.values()) {
//   console.log(value);
// }

// for (const key of set.keys()) {
//   console.log(key); //  === value
// }

// for (const entry of set.entries()) {
//   console.log(entry);
// }

const user = {
  email: 'test@test',
  age: 12,
};

const userKeys = Object.keys(user);
const userValues = Object.values(user);
const userEntries = Object.entries(user);