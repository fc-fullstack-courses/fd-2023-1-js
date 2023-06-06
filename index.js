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
