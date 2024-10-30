const battleHorde = require('./index');

describe('02 => Horda-de-zombies', () => {
  const testCases = [
    {
      input: ['242', '334'],
      expected: '2h',
    },
    {
      input: ['444', '282'],
      expected: 'x',
    },
    {
      input: ['555', '666'],
      expected: '3h',
    },
    {
      input: ['321', '123'],
      expected: 'x',
    },
    {
      input: ['4598', '7682'],
      expected: '3z',
    },
    {
      input: ['8989898999', '7779998811'],
      expected: '20z',
    },
    {
      input: ['57685849323', '98765438965'],
      expected: '10h',
    },
  ];

  it('should return a string', () => {
    const result = battleHorde(...testCases[0].input);

    expect(typeof result).toBe('string');
  });

  it.each(testCases)('should return $expected', ({ input, expected }) => {
    const result = battleHorde(...input);

    expect(result).toEqual(expected);
  });
});
