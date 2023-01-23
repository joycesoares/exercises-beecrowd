export function problem(lines) {
  var input = require("fs").readFileSync("stdin", "utf8");
  var lines = input.split("\n");

  var valorLido = parseFloat(input);
  console.log(valorLido);

  const notas = [100, 50, 20, 10, 5, 2];
  const moedas = [1, 0.5, 0.25, 0.1, 0.05, 0.01];

  console.log("NOTAS:");
  for (var nota of notas) {
    var qtdNotas = parseInt(valorLido / nota);
    console.log(`${qtdNotas} nota(s) de R$ ${nota}.00`);
    valorLido = valorLido % nota;
  }
  console.log("MOEDAS:");
  for (var moeda of moedas) {
    var qtdMoedas = parseInt(valorLido / moeda);
    console.log(`${qtdMoedas} moeda(s) de R$ ${moeda.toFixed(2)}`);
    valorLido = (valorLido % moeda) + 0.00001;
  }
}
