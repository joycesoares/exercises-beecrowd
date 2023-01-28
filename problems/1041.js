export function problem(lines) {
  var input = require("fs").readFileSync("stdin", "utf8");
  var lines = input.split("\n");

  const [A, B] = input.split(" ").map((item) => parseFloat(item));

  if (A == 0 && B == 0) {
    console.log(`Origem`);
  } else if (A > 0.0 && B > 0.0) {
    console.log("Q1");
  } else if ((A < 0.0) & (B > 0.0)) {
    console.log("Q2");
  } else if (A < 0.0 && B < 0.0) {
    console.log("Q3");
  } else if (A > 0.0 && B < 0.0) {
    console.log("Q4");
  } else if (B === 0.0) {
    console.log("Eixo X");
  } else if (A === 0.0) {
    console.log("Eixo Y");
  }
}
