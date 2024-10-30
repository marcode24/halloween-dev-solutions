/* eslint-disable prefer-destructuring */
/* eslint-disable no-continue */
const findSafestPath = (dream) => {
  const n = dream.length;
  const m = dream[0].length;

  // Solo necesitamos una fila para el peligro
  const peligro = Array(m).fill(Infinity);

  // Inicializa el punto de partida
  peligro[0] = dream[0][0];

  // Rellena la matriz de peligro
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      // Evitar el punto de partida
      if (i === 0 && j === 0) continue;

      // Movimiento desde arriba
      const desdeArriba = i > 0 ? peligro[j] + dream[i][j] : Infinity;

      // Movimiento desde la izquierda
      const desdeIzquierda = j > 0 ? peligro[j - 1] + dream[i][j] : Infinity;

      // Actualiza el peligro en la posición actual
      peligro[j] = Math.min(desdeArriba, desdeIzquierda);
    }
  }

  // El menor nivel de peligro para llegar a la esquina inferior derecha
  return peligro[m - 1];
};

module.exports = findSafestPath;
