export function problem(lines) {
  // var input = require('fs').readFileSync('/dev/stdin', 'utf8');
  // var lines = input.split('\n');

  const [nota1, nota2, nota3] = lines;
  const pesoA = 2;
  const pesoB = 3;
  const pesoC = 5;
  const totalPeso = pesoA + pesoB + pesoC;

  const MEDIA = (nota1 * pesoA + nota2 * pesoB + nota3 * pesoC) / totalPeso;

  console.log(`MEDIA = ${MEDIA.toFixed(1)}`);
}
