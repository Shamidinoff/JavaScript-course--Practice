// Задания на работу с методами массивов
// В этих заданиях мы с вами потренируемся работать с методами массивов.
// Учтите, что проверка кода в таких заданиях осуществляется автоматически, через программу. Поэтому нужно четко следовать инструкции.
// Вы можете сначала решить у себя в редакторе кода, а потом вставить сюда.
// Все данные для решения задач мы с вами рассмотрели в предыдущих обязательных уроках. Каждая задача проверяется отдельно, но по порядку, так что вы будете получать разные уведомления при проверке.
// Задачи:
// 1) У вас есть список фильмов с рейтингом в виде массива объектов. Напишите функцию showGoodFilms, которая будет принимать этот массив, а возвращать будет массив объектов только с теми фильмами, у которых рейтинг больше или равен 8.
// P.S. Это довольно типичная задача в программировании. Вспомните, на самых разных сайтах можно так фильтровать любые товары/фильмы/сериалы...
// 2) Напишите функцию showListOfFilms, которая будет принимать этот же массив, а возвращать будет строку, которая содержит названия фильмов через запятую.
// Пример:
// showListOfFilms(films) => "Titanic, Die hard 5, Matrix, Some bad film"
// 3) Напишите функцию setFilmsIds, которая будет принимать этот же массив, а возвращать будет такой же массив с фильмами, но у каждого фильма будет новое поле id. Значение этого поля установите по нумерации фильма.
// Пример:
// setFilmsIds(films)  => [   { name: 'Titanic', rating: 9, id: 0 },   { name: 'Die hard 5', rating: 5, id: 1 },   { name: 'Matrix', rating: 8, id: 2 },   { name: 'Some bad film', rating: 4, id: 3 } ]

const films = [
  {
    name: "Titanic",
    rating: 9,
  },
  {
    name: "Die hard 5",
    rating: 5,
  },
  {
    name: "Matrix",
    rating: 8,
  },
  {
    name: "Some bad film",
    rating: 4,
  },
];

// function showGoodFilms(arr) {
//   return arr.filter(function (item) {
//     return item.rating >= 8;
//   });
// }

// showGoodFilms(films);

// function showListOfFilms(arr) {
//   return arr.reduce(
//     (acc, curr) => `${typeof acc === "object" ? acc.name : acc}, ${curr.name}`
//   );
// }

// showListOfFilms(films);

function setFilmsIds(arr) {
  return arr.map((film, i) => {
    film.id = i;
    return film;
  });
}

const filmsIds = setFilmsIds(films);
console.log(filmsIds);

const tranformedArray = setFilmsIds(films);

function checkFilms(arr) {}
