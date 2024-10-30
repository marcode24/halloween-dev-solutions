const createMagicPotion = require('./index');

describe('01 => Crea la pocion perfecta', () => {
  const testCases = [
    {
      input: [[13, 5, 6, 2], 8],
      expected: [2, 3],
    },
    {
      input: [[11, 3, 7, 5], 10],
      expected: [1, 2],
    },
    {
      input: [[4, 3, 2, 3, 4], 6],
      expected: [0, 2],
    },
    {
      input: [[0, 0, -2, 3], 2],
      expected: undefined,
    },
    {
      input: [[10, 5, 2, 3, 7, 5], 10],
      expected: [3, 4],
    },
    {
      input: [[1, 2, 3, 4, 5], 8],
      expected: [2, 4],
    },
    {
      input: [[5, 1, 4, 6, 2], 9],
      expected: [0, 2],
    },
    {
      input: [[1, -2, 3, -4, 5], -1],
      expected: [0, 1],
    },
    {
      input: [[10, 20, 30, 40], 50],
      expected: [1, 2],
    },
    {
      input: [[], 10],
      expected: undefined,
    },
  ];

  it('should return an array', () => {
    const testCase = testCases[0];
    const result = createMagicPotion(...testCase.input);

    expect(Array.isArray(result)).toBe(true);
  });

  it.each(testCases)('should return $expected', ({ input, expected }) => {
    const result = createMagicPotion(...input);

    expect(result).toEqual(expected);
  });
});
