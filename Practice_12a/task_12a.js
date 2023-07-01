// Задача 1: Напишите функцию sumArray, которая принимает массив чисел и возвращает сумму всех чисел в массиве.

const numbers = [1, 2, 3, 4, 5];

function sumArray(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

console.log(sumArray(numbers));
