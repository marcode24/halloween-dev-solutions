/* eslint-disable operator-linebreak */
/* eslint-disable no-restricted-syntax */

const escapePyramidHead = (room) => {
  const n = room.length;
  let start = null;
  let target = null;

  // Encontrar posiciones de ▲ y T
  room.forEach((row, i) => {
    row.forEach((cell, j) => {
      if (cell === '▲') start = [i, j];
      if (cell === 'T') target = [i, j];
    });
  });

  // Direcciones de movimiento: arriba, abajo, izquierda, derecha
  const directions = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
  ];

  // BFS desde la posición de Pyramid Head
  const queue = [[...start, 0]]; // [x, y, pasos]
  const visited = Array.from({ length: n }, () => Array(n).fill(false));
  visited[start[0]][start[1]] = true;

  while (queue.length) {
    const [x, y, steps] = queue.shift(); // Usar shift para obtener el primer elemento

    // Si hemos alcanzado la posición de 'T'
    if (x === target[0] && y === target[1]) return steps;

    // Explorar celdas adyacentes
    for (const [dx, dy] of directions) {
      const nx = x + dx;
      const ny = y + dy;

      // Comprobar límites, visitado y si es una pared
      if (
        nx >= 0 &&
        ny >= 0 &&
        nx < n &&
        ny < n &&
        !visited[nx][ny] &&
        room[nx][ny] !== '#'
      ) {
        visited[nx][ny] = true;
        queue.push([nx, ny, steps + 1]);
      }
    }
  }

  // Si no encontramos a 'T'
  return -1;
};

module.exports = escapePyramidHead;
