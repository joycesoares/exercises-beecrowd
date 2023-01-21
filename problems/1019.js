export function problem(lines) {
  var input = require("fs").readFileSync("stdin", "utf8");
  var lines = input.split("\n");

  var horaLida = parseInt(input);

  var totalHoras = parseInt(horaLida / 3600);
  var totalMinutos = parseInt((horaLida % 3600) / 60);
  var totalSegundos = parseInt(horaLida % 60);

  console.log(`${totalHoras}:${totalMinutos}:${totalSegundos}`);
}
