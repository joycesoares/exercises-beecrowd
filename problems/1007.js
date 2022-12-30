export function problem(lines) {
  // var input = require('fs').readFileSync('/dev/stdin', 'utf8');
  // var lines = input.split('\n');

  const [numero1, numero2, numero3, numero4] = lines;
  const DIFERENCA = numero1 * numero2 - numero3 * numero4;

  console.log(`DIFERENCA = ${DIFERENCA}`);
}
