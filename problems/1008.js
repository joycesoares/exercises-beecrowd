export function problem(lines) {
  // var input = require('fs').readFileSync('/dev/stdin', 'utf8');
  // var lines = input.split('\n');

  const [number, workedHours, hourValue] = lines;
  const SALARY = workedHours * hourValue;

  console.log(`NUMBER = ${number}\nSALARY = U$ ${SALARY.toFixed(2)}`);
}
