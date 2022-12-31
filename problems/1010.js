export function problem(lines) {
  var input = require("fs").readFileSync("/dev/stdin", "utf8");
  var lines = input.split("\n");

  let [idItem1, qtdItem1, valorUnitario1] = lines.shift().split(" ");
  let [idItem2, qtdItem2, valorUnitario2] = lines.shift().split(" ");

  let valorTotalItem1 = qtdItem1 * valorUnitario1;
  let valorTotalItem2 = qtdItem2 * valorUnitario2;

  const totalCompra = valorTotalItem1 + valorTotalItem2;

  console.log(`VALOR A PAGAR: R$ ${totalCompra.toFixed(2)}`);
}
