// Задача 1: Напишите функцию sumArray, которая принимает массив чисел и возвращает сумму всех чисел в массиве.

const numbers1 = [1, 2, 3, 4, 5];

function sumArray(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

console.log(sumArray(numbers1));

// Задача 2: Напишите функцию findMax, которая принимает массив чисел и возвращает наибольшее число из массива.

const numbers2 = [10, 5, 8, 3, 9];

function findMax(array) {
  return Math.max(...array); // Используем оператор расширения (spread operator) для передачи элементов массива в Math.max
}

console.log(findMax(numbers2));

// Задача 3: Напишите функцию filterEvenNumbers, которая принимает массив чисел и возвращает новый массив, содержащий только четные числа из исходного массива.

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function filterEvenNumbers(arrayNum) {
  return arrayNum.filter((element) => {
    return element % 2 === 0; // Возвращаем true для четных чисел, которые должны быть включены в новый массив
  });
}

console.log(filterEvenNumbers(numbers)); // Ожидаемый вывод: [2, 4, 6, 8, 10]

// Задача 4: Напишите функцию getFullName, которая принимает объект с полями firstName и lastName и возвращает полное имя, объединяя значения этих полей.

const person = {
  firstName: "John",
  lastName: "Doe",
};

function getFullName(obj) {
  return obj.firstName + " " + obj.lastName; // Обращаемся к свойствам объекта `obj`, а не `person`
}

console.log(getFullName(person)); // Ожидаемый вывод: 'John Doe'

// Задача 5: Напишите функцию countOccurrences, которая принимает массив строк и возвращает объект, где ключами являются уникальные строки из массива, а значениями - количество их вхождений в массив.

const fruits = ["apple", "banana", "apple", "orange", "apple", "banana"];
console.log(countOccurrences(fruits)); // Ожидаемый вывод: { apple: 3, banana: 2, orange: 1 }
