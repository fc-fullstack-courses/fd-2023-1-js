let condition = NaN;
let condition2 = false;

if (condition) {
  // выполнится только если condition приводится к true
  console.log('condition is true');
} else if (condition2) {
  // выполнится тогда, когда все условия до него были лживы
  // а его условие истинно
  console.log('else if');
} else if (10 < 3) {
  // выполнится тогда, когда все условия до него были лживы
  // а его условие истинно
  console.log('else if 10 < 3');
} else if (5 === 'five') {
  // выполнится тогда, когда все условия до него были лживы
  // а его условие истинно
  console.log('else if 5 === five');
} else if (7) {
  // выполнится тогда, когда все условия до него были лживы
  // а его условие истинно
  console.log('else if 7');
} else {
  // выполняется во всех других случаях. Всегда пишется в конце
  // конструкции
  console.log('this is else');
}
