function getCurrentYear() {
  const date = new Date();
  return date.getFullYear();
}

export default function getBudgetForCurrentYear(income, gdp, capita) {
  const budget = {};

  const array = ['income', 'gdp', 'capita'];
  const values = [income, gdp, capita];
  for (let i = 0; i < array.length; i += 1) {
    budget[`${array[i]}-${getCurrentYear()}`] = values[i];
  }
  return budget;
}
