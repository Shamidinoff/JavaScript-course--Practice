// TASK 1 - Заполните новый массив (result) числами из старого (arr). Количество элементов в массиве можно получить как arr.length, а к элементам обращаемся все так же: arr[0], arr[1] и тд. Должен получиться точно такой же массив

const arr = [3, 5, 8, 16, 20, 23, 50];
const result = [];

for (let i = 0; i < arr.length; i++) {
  result.push(arr[i]);
}

console.log(result);

// TASK 2 - Измените данный массив так, чтобы все числа были увеличены в 2 раза, а если попадается строка строка - то к ней было добавлено " - done". Для определения типа данных используйте typeof(); Должно получиться: [ 10, 20, 'Shopping - done', 40, 'Homework - done' ]

const data = [5, 10, "Shopping", 20, "Homework"];

for (let i = 0; i < data.length; i++) {
  if (typeof data[i] === "number") {
    data[i] = data[i] * 2;
  } else if (typeof data[i] === "string") {
    data[i] = `${data[i]} - done`;
  }
}

console.log(data);

// TASK 3 - Разверните массив data наоборот при помощи цикла и запишите данные в массив result. Должно получиться: [ 'Homework', 20, 'Shopping', 10, 5 ]

const dataNew = [5, 10, "Shopping", 20, "Homework"];
const resultNew = [];

for (let i = dataNew.length - 1; i >= 0; i--) {
  resultNew.push(dataNew[i]);
}

console.log(resultNew);
