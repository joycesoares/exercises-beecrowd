export function problem(lines) {
  // var input = require("fs").readFileSync("stdin", "utf8");
  // var lines = input.split("\n");

  const [X1, Y1] = lines[0].split(" ");
  const [X2, Y2] = lines[1].split(" ");

  const distancia = Math.sqrt((X2 - X1) ** 2 + (Y2 - Y1) ** 2, 2);
  console.log(`${distancia.toFixed(4)}`);
}
