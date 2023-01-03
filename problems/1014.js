export function problem(lines) {
  // var input = require("fs").readFileSync("/dev/stdin", "utf8");
  // var lines = input.split("\n");

  const [X, Y] = lines;

  const consumoMedio = Number(X) / Number(Y);
  console.log(`${consumoMedio.toFixed(3)} km/l`);
}
