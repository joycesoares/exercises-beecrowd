export function problem(lines) {
  var input = require("fs").readFileSync("stdin", "utf8");
  var lines = input.split("\n");

  const [tempoGasto] = lines[0].split(" ");
  const [velocidadeMedia] = lines[1].split(" ");

  const distanciaPercorrida = (tempoGasto * velocidadeMedia) / 12;
  console.log(`${distanciaPercorrida.toFixed(3)}`);
}
