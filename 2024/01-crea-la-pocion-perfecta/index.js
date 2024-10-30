const createMagicPotion = (potions, target) => {
  const map = new Map();

  for (let i = 0; i < potions.length; i++) {
    const neededPower = target - potions[i];

    if (map.has(neededPower)) return [map.get(neededPower), i];

    map.set(potions[i], i);
  }

  return undefined;
};

module.exports = createMagicPotion;
