export function problem(lines) {
  // var input = require('fs').readFileSync('/dev/stdin', 'utf8');
  // var lines = input.split('\n');

  const pi = 3.14159;
  const raio = Number(lines[0]);
  const a = (pi * raio ** 2).toFixed(4);

  console.log(`A=${a}`);
}
