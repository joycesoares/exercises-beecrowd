export function problem(lines) {
  // var input = require('fs').readFileSync('/dev/stdin', 'utf8');
  // var lines = input.split('\n');

  const [nota1, nota2] = lines;
  const pesoA = 3.5;
  const pesoB = 7.5;
  const totalPeso = pesoA + pesoB;

  const MEDIA = (nota1 * pesoA + nota2 * pesoB) / totalPeso;

  console.log(`MEDIA = ${MEDIA.toFixed(5)}`);
}
