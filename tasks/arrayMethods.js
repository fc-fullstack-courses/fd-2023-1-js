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