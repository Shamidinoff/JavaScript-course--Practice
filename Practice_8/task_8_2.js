// 2) Напишите функцию, которая принимает в себя 4 числа и возвращает самое большее из них. Если один из аргументов не является числом или их меньше 4 - возвращается 0. Дробные числа разрешены.

// Пример:
// findMaxNumber(1, 5, 6.6, 11); =>  11
// findMaxNumber(1, 5, '6', '10');  =>  0
// У этой задачи есть очень много вариантов решения, в том числе и встроенное в JS. Подходит любое :)

function findMaxNumber(num1, num2, num3, num4) {
  if (
    typeof num1 !== "number" ||
    typeof num2 !== "number" ||
    typeof num3 !== "number" ||
    typeof num4 !== "number"
  ) {
    console.log(0);
  } else {
    console.log(Math.max(num1, num2, num3, num4));
  }
}

findMaxNumber(1, 5, 6.6, 10.5);
findMaxNumber(1, 5, "6", "10");
