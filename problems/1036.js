export function problem(lines) {
  var input = require("fs").readFileSync("stdin", "utf8");
  var lines = input.split("\n");

  const [A,B,C] = input.split(" ").map(item => parseFloat(item));

  const delta =   B ** 2  - 4 *  A * C ;
  const raizQuadrada = Math.sqrt(delta);
 
 if (delta < 0 || A == 0) {
    console.log ("Impossivel calcular");
  } else if (delta > -1) {
    const R1 = (-B + raizQuadrada ) / ( 2 * A);
    const R2 = (-B -  raizQuadrada ) / ( 2 * A) ;
    console.log(`R1 = ${R1.toFixed(5)}\nR2 = ${R2.toFixed(5)}`);
  } else {
    console.log ("Impossivel calcular");
  }
}
