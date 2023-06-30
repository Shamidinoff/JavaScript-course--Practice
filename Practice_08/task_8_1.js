// 1) Создайте функцию, которая принимает в себя целое число минут и возвращает время в нужном формате строки. (Смотри пример). Обратите внимание на окончание слова "час" - оно меняется в зависимости от цифры. Если вместо аргумента приходит не число, дробное или отрицательное число - функция возвращает строку "Ошибка, проверьте данные"

// Внимание! Давайте пока ограничимся максимум 600ю минутами (10 часов). Так как проверки на большие числа будут раздувать код (33 часа, 31 час, 11 часов и тд). Этого будет достаточно и код будет проверять именно этот промежуток (1 - 10 часов). Но вы можете реализовать и полный скрипт, он тоже должен проходить тесты.

// Пример:
// getTimeFromMinutes(150) => "Это 2 часа и 30 минут"
// getTimeFromMinutes(50) => "Это 0 часов и 50 минут"
// getTimeFromMinutes(0) => "Это 0 часов и 0 минут"
// getTimeFromMinutes(-150) => "Ошибка, проверьте данные"

// Это мое решение

/* function getTimeFromMinutes(time) {
  if (time < 0 || typeof time !== "number" || !Number.isInteger(time)) {
    console.log(`Ошибка, проверьте данные`);
  } else if (time === 0) {
    console.log(`Это ${time} часов и ${time} минут`);
  } else if (time > 0 && time < 60) {
    console.log(`Это 0 часов и ${time} минут`);
  } else {
    const hours = Math.floor(time / 60);
    const minutes = time % 60;
    console.log(`Это ${hours} часа и ${minutes} минут`);
  }
}

getTimeFromMinutes(80); */

function getTimeFromMinutes(minutesTotal) {
  if (
    typeof minutesTotal !== "number" ||
    minutesTotal < 0 ||
    !Number.isInteger(minutesTotal)
  ) {
    console.log("Ошибка, проверьте данные");
  }

  const hours = Math.floor(minutesTotal / 60);
  const minutes = minutesTotal % 60;

  let hoursStr = "";

  switch (hours) {
    case 0:
      hoursStr = "часов";
      break;
    case 1:
      hoursStr = "час";
      break;
    case 2:
    case 3:
    case 4:
      hoursStr = "часа";
      break;
    default:
      hoursStr = "часов";
  }

  console.log(`Это ${hours} ${hoursStr} и ${minutes} минут`);
}

getTimeFromMinutes(310);
