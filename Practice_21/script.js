// 1) У вас есть небольшой массив с данными о доходах каждой торговой точки. Напишите функцию getPositiveIncomeAmount, которая принимает этот массив данных и возвращает сумму только положительных значений из каждого объекта. (число)
// Пример:
// getPositiveIncomeAmount(funds) => 13300

const funds = [
  { amount: -1400 },
  { amount: 2400 },
  { amount: -1000 },
  { amount: 500 },
  { amount: 10400 },
  { amount: -11400 },
];

const getPositiveIncomeAmount = (data) => {
  const positiveAmounts = data.reduce((sum, item) => {
    if (item.amount > 0) {
      return sum + item.amount;
    } else {
      return sum;
    }
  }, 0);

  return positiveAmounts;
};

const positiveNumbers = getPositiveIncomeAmount(funds);
console.log(positiveNumbers);
