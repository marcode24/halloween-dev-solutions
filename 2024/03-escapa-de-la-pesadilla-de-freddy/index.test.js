const findSafestPath = require('./index');

describe('03 => Escapa de la pesadilla de freddy', () => {
  const testCases = [
    {
      input: [
        [1, 3, 1],
        [1, 5, 1],
        [4, 2, 1],
      ],
      expected: 7,
    },
    {
      input: [
        [5, 9],
        [4, 2],
      ],
      expected: 11,
    },
    {
      input: [
        [1, 1, 1],
        [1, 1, 1],
        [1, 1, 1],
      ],
      expected: 5,
    },
    {
      input: [
        [1, 2, 3],
        [3, 2, 1],
        [4, 4, 4],
      ],
      expected: 10,
    },
    {
      input: [
        [1, 2],
        [3, 4],
        [6, 5],
        [7, 8],
      ],
      expected: 20,
    },
    {
      input: [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9],
      ],
      expected: 21,
    },
  ];

  it('should return a number', () => {
    const test = testCases[0];
    const result = findSafestPath(test.input);

    expect(typeof result).toBe('number');
  });

  it.each(testCases)('should return $expected', ({ input, expected }) => {
    const result = findSafestPath(input);

    expect(result).toBe(expected);
  });
});
