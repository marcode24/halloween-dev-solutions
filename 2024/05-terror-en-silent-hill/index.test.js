const escapePyramidHead = require('./index');

describe('05 => Terror en Silent Hill', () => {
  const testCases = [
    {
      input: [
        ['T', '.', '#', '.'],
        ['.', '.', '.', '.'],
        ['▲', '.', '.', '#'],
        ['.', '#', '#', '#'],
      ],
      expected: 2,
    },
    {
      input: [
        ['.', '.', '#', '.', '▲'],
        ['#', '.', '#', '.', '#'],
        ['.', '.', '.', '.', '.'],
        ['#', '#', '#', '.', '#'],
        ['T', '.', '.', '.', '.'],
      ],
      expected: 8,
    },
    {
      input: [
        ['#', '#', '#'],
        ['▲', '.', '#'],
        ['.', '#', 'T'],
      ],
      expected: -1,
    },
    {
      input: [
        ['#', '#'],
        ['▲', 'T'],
      ],
      expected: 1,
    },
    {
      input: [
        ['.', '.', '.'],
        ['T', '▲', '.'],
        ['.', '.', '.'],
      ],
      expected: 1,
    },
  ];

  it('should return a number', () => {
    const test = testCases[0];
    const result = escapePyramidHead(test.input);

    expect(typeof result).toBe('number');
  });

  it.each(testCases)('should return $expected', ({ input, expected }) => {
    const result = escapePyramidHead(input);

    expect(result).toBe(expected);
  });
});
