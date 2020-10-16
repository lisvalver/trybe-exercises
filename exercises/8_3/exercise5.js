    
const assert = require('assert');

const names = [
  'Aanemarie',  'Adervandes',   'Akifusa',
  'Abegildo',   'Adicellia',    'Aladonata',
  'Abeladerco', 'Adieidy',  'Alarucha',
];



function containsA() {
  const joiningWords = names.reduce((acc, next) => acc + next);
  const filteringLetters = joiningWords.split('').filter((name) => name.toLowerCase() === 'a')
  return filteringLetters.length;
}

assert.deepEqual(containsA(), 20);