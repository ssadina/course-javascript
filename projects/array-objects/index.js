/* ДЗ 2 - работа с массивами и объектами */

/*
 Задание 1:

 Напишите аналог встроенного метода forEach для работы с массивами
 Посмотрите как работает forEach и повторите это поведение для массива, который будет передан в параметре array

 Пример:
   forEach([1, 2, 3], (el) => console.log(el))
 */

function forEach(array, fn) {
  for (let i = 0; i < array.length; i++) {
    fn(array[i], i, array);
  }
}

/*
 Задание 2:

 Напишите аналог встроенного метода map для работы с массивами
 Посмотрите как работает map и повторите это поведение для массива, который будет передан в параметре array

 Пример:
   map([1, 2, 3], (el) => el ** 2) // [1, 4, 9]
 */
function map(array, fn) {
  const newArray = [];
  for (let i = 0; i < array.length; i++) {
    newArray[i] = fn(array[i], i, array);
  }
  return newArray;
}

/*
 Задание 3:

 Напишите аналог встроенного метода reduce для работы с массивами
 Посмотрите как работает reduce и повторите это поведение для массива, который будет передан в параметре array

 Пример:
   reduce([1, 2, 3], (all, current) => all + current) // 6
 */
function reduce(array, fn, initial) {
  let previousValue;
  for (let i = 0; i < array.length; i++) {
    if (i === 0 && initial !== undefined) {
      previousValue = fn(initial, array[i], i, array);
    } else if (i === 0 && initial === undefined) {
      previousValue = array[i];
    } else {
      previousValue = fn(previousValue, array[i], i, array);
    }
    fn(previousValue, array[i], i, array);
  }
  console.log(previousValue);
  return previousValue;
}
// for (let i=0; i < array.length; i++){
//   let previousValue = 0;
//   if(i === 0) {
//     previousValue = fn(initial, array[i], i, array)
//   } else {
//     previousValue = fn( previousValue ? previousValue : array[i], array[i], i, array );
//     fn( previousValue, array[i], i, array)
//   }
// }
// return fn();
// }
reduce([1, 2, 3], (all, current) => all + current);

// let summ = 0;
// for (let i=0; i < array.length; i++){
//   summ += array[i];
// }
// return summ + initial;
// reduce([1, 2, 3], (all, current) => all + current);

/*
 Задание 4:

 Функция должна перебрать все свойства объекта, преобразовать их имена в верхний регистр и вернуть в виде массива

 Пример:
   upperProps({ name: 'Сергей', lastName: 'Петров' }) вернет ['NAME', 'LASTNAME']
 */
function upperProps(obj) {
  const array = [];
  for (let prop of Object.keys(obj)) {
    prop = prop.toUpperCase();
    array.push(prop);
  }
  return array;
}

/*
 Задание 5 *:

 Функция принимает объект и должна вернуть Proxy для этого объекта
 Proxy должен перехватывать все попытки записи значений свойств и возводить это значение в квадрат

 Пример:
   const obj = createProxy({});
   obj.foo = 2;
   console.log(obj.foo); // 4
 */
function createProxy(obj) {
  obj = new Proxy(obj, {
    set(target, prop, val) {
      target[prop] = val * val;
      return true;
    },
  });
  return obj;
}

export { forEach, map, reduce, upperProps, createProxy };
