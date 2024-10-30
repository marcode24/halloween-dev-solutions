const findTheKiller = (whisper, suspects) => {
  whisper = whisper.toLowerCase();
  const exactMatch = whisper.endsWith('$');
  const trimmedWhisper = exactMatch ? whisper.slice(0, -1) : whisper;
  const whisperLength = trimmedWhisper.length;

  const matches = suspects.filter((suspect) => {
    const suspectLower = suspect.toLowerCase();

    // Verificamos las condiciones de longitud y coincidencia
    if (
      // eslint-disable-next-line operator-linebreak
      (exactMatch && suspectLower.length !== whisperLength) ||
      (!exactMatch && suspectLower.length < whisperLength)
    ) {
      return false;
    }

    // Comprobamos que cada carácter coincida con el patrón del whisper
    return [...trimmedWhisper].every(
      (char, i) => char === '~' || char === suspectLower[i],
    );
  });

  return matches.length === 0 ? '' : matches.join(',');
};

module.exports = findTheKiller;
