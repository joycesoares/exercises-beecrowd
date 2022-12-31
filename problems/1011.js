export function problem(lines) {
  // var input = require("fs").readFileSync("/dev/stdin", "utf8");
  // var lines = input.split("\n");

  const [raio] = lines;
  const valorPi = 3.14159;

  const volume = (4 / 3) * valorPi * raio ** 3;

  console.log(`VOLUME = ${volume.toFixed(3)}`);
}
