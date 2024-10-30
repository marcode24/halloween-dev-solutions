const findTheKiller = require('./index');

describe('04 => Encuentra-al-asesino', () => {
  const testCases = [
    {
      input: [
        'd~~~~~a',
        ['Dracula', 'Freddy Krueger', 'Jason Voorhees', 'Michael Myers'],
      ],
      expected: 'Dracula',
    },
    {
      input: ['~r~dd~', ['Freddy', 'Freddier', 'Fredderic']],
      expected: 'Freddy,Freddier,Fredderic',
    },
    {
      input: ['~r~dd$', ['Freddy', 'Freddier', 'Fredderic']],
      expected: '',
    },
    {
      input: ['mi~~def', ['Midudev', 'Midu', 'Madeval']],
      expected: '',
    },
    {
      input: ['~~~~~~', ['Pennywise', 'Leatherface', 'Agatha']],
      expected: 'Pennywise,Leatherface,Agatha',
    },
    {
      input: ['~~~~~~$', ['Pennywise', 'Leatherface', 'Agatha']],
      expected: 'Agatha',
    },
    {
      input: ['s~v~r~', ['Severus Snape', 'Sirius Black', 'Salazar Slytherin']],
      expected: 'Severus Snape',
    },
    {
      input: ['~~~~~y$', ['Chucky', 'Tiffany', 'Freddy', 'Mickey']],
      expected: 'Chucky,Freddy,Mickey',
    },
  ];

  it('should return a string', () => {
    const test = testCases[0];
    const result = findTheKiller(...test.input);

    expect(typeof result).toBe('string');
  });

  it.each(testCases)('should return $expected', ({ input, expected }) => {
    const result = findTheKiller(...input);

    expect(result).toBe(expected);
  });
});
