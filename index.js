'use strict';

// const str1 = 'test 1';
// console.log('test 1'.length);

// const str = new String('test string');
// const num = new Number(500);

// console.log(str);

// const bool1 = new Boolean(false);

// const bool2 = Boolean(0);
// const bool3 = !!0;

// if (bool2) {
//   console.log('true');
// } else {
//   console.log('false');
// }

// +prompt()
// Number( prompt() )

// const str1 = String(false);
// '' + false;

const str = 'test test';

// str.charAt(2) === str[2]

// значене символа в Юникоде
const unicodeValue = str.charCodeAt(2);

const newStr = str.concat(' new text');

const includes1 = str.includes('test');
const includes2 = str.includes('text');

const index1 = str.indexOf(' ');
const index2 = str.indexOf('text');

const str2 = str.replace('test', 'replaced');

const sliced = str2.slice(0, -5);

const capsedStr = str.toUpperCase();
const lowerStr = capsedStr.toLowerCase();

const badStr = '         Anton              User       ';

const trimmed = badStr.trim();

const splitted1 = str.split();

// массив слов в строке
const splitted2 = str.split(' ');
// массив символов
const splitted3 = str.split('');

function betterTrim(str) {
  const words = str.split(' ');

  const filteredWords = words.filter(function (word) {
    return word !== '';
  });

  return filteredWords.join(' ');
}

function toRandomCase(str) {
  let result = '';

  // result = str;
  for (let i = 0; i < str.length; i++) {
    const currentLetter = str[i];

    if (Math.random() > 0.5) {
      result = result + currentLetter.toLowerCase();
    } else {
      result = result + currentLetter.toUpperCase();
    }
  }

  return result;
}
