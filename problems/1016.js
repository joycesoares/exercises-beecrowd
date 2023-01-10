export function problem(lines) {
  // var input = require("fs").readFileSync("stdin", "utf8");
  // var lines = input.split("\n");

  const [D] = lines;
  const X = 60;

  const distancia = (X * D) / 30;
  console.log(`${distancia} minutos`);
}
