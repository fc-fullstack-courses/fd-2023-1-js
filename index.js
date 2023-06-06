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

vocabulary.set('I','я');
vocabulary.set('cat','кіт');
vocabulary.set('have','мати');
vocabulary.set('like','подобатися');
vocabulary.set('fish', 'риба');
vocabulary.set('pet','улюбленець');
vocabulary.set('vase', 'ваза');
vocabulary.set('green', 'зелений');

const untraslatedString = 'I like cat I have green vase';

/**
 * 
 * @param {string} str 
 * @param {Map<string, string>} vocab
 * @returns {string} переведенная строка
 */
function translate (str, vocab) {
  let translatedStr = '';

  const words = str.split(' ');

  for(const word of words) {
    const translatedWord = vocab.get(word);

    translatedStr += `${translatedWord} `;
  }

  return translatedStr.trim();
}