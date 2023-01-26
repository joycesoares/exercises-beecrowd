export function problem(lines) {
  var input = require("fs").readFileSync("stdin", "utf8");
  var lines = input.split("\n");

  const [A, B, C, D, E] = input.split(/\s+/).map((item) => parseFloat(item));

  const totalPeso = 2 + 3 + 4 + 1;
  let media = (A * 2 + B * 3 + C * 4 + D * 1) / totalPeso;

  if (media >= 7.0) {
    console.log(`Media: ${media.toFixed(1)}\nAluno aprovado.`);
  } else if (media < 5.0) {
    console.log(`Media: ${media.toFixed(1)}\nAluno reprovado.`);
  } else if (media >= 5.0 && media <= 6.9) {
    console.log(`Media: ${media}\nAluno em exame.`);
    console.log(`Nota do exame: ${E.toFixed(1)}`);
    let mediaFinal = (E + media) / 2;
    if (mediaFinal >= 5.0) {
      console.log("Aluno aprovado.");
    } else if (mediaFinal <= 4.9) {
      console.log("Aluno reprovado.");
    }
    console.log(`Media final: ${mediaFinal.toFixed(1)}`);
  }
}
