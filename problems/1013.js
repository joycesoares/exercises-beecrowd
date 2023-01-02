export function problem(lines) {
  // var input = require("fs").readFileSync("/dev/stdin", "utf8");
  // var lines = input.split("\n");

  const [A, B, C] = lines
    .shift()
    .split(" ")
    .map((item) => parseInt(item));

  const maiorAB = (A + B + Math.abs(A - B)) / 2;
  const maiorC = (C + maiorAB + Math.abs(C - maiorAB)) / 2;

  console.log(`${maiorC} eh o maior`);
}
