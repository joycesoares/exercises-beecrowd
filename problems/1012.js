export function problem(lines) {
  // var input = require("fs").readFileSync("/dev/stdin", "utf8");
  // var lines = input.split("\n");

  const [A, B, C] = lines.shift().split(" ");

  const valorPi = 3.14159;
  const areaTrianguloRetangulo = (Number(A) * Number(C)) / 2;
  const areaCirculo = valorPi * Number(C) ** 2;
  const areaTrapezio = (1 / 2) * Number(C) * (Number(A) + Number(B));
  const areaQuadrado = Number(B) ** 2;
  const areaRetangulo = Number(A) * Number(B);

  console.log(`TRIANGULO: ${areaTrianguloRetangulo.toFixed(3)}\nCIRCULO: ${areaCirculo.toFixed(3)}\nTRAPEZIO: ${areaTrapezio.toFixed(3)}\nQUADRADO: ${areaQuadrado.toFixed(3)}\nRETANGULO: ${areaRetangulo.toFixed(3)}`);
}
