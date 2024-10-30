/* eslint-disable no-restricted-syntax */

const battleHorde = (zombies, humans) => {
  let zombiesTotal = 0;
  let humansTotal = 0;

  for (const zombie of zombies) {
    zombiesTotal += +zombie;
  }
  for (const human of humans) {
    humansTotal += +human;
  }

  const difference = zombiesTotal - humansTotal;

  return difference === 0
    ? 'x'
    : `${Math.abs(difference)}${difference > 0 ? 'z' : 'h'}`;
};

module.exports = battleHorde;
