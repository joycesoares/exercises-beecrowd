export function problem(lines) {
  // var input = require('fs').readFileSync('/dev/stdin', 'utf8');
  // var lines = input.split('\n');

  const [sellerName, fixedSalary, totalSales] = lines;
  const commission = 15;
  const TOTAL = (Number(totalSales) * Number(commission)) / 100 + Number(fixedSalary);

  console.log(`TOTAL = R$ ${TOTAL.toFixed(2)}`);
}
