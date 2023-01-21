export function problem(lines) {
  var input = require("fs").readFileSync("/dev/stdin", "utf8");
  // var lines = input.split("\n");

  var valorLido = parseInt(input);
  console.log(valorLido);

  const valores = [100, 50, 20, 10, 5, 2, 1];

  for (var valor of valores) {
    var qtdNotas = parseInt(valorLido / valor);
    console.log(`${qtdNotas} nota(s) de R$ ${valor},00`);
    valorLido = valorLido % valor;
  }
}
