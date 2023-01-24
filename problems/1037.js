export function problem(lines) {
   var input = require("fs").readFileSync("stdin", "utf8");
  var lines = input.split("\n");

  const valorLido = parseFloat(input);

 if (valorLido > 25.0000 && valorLido <= 50.0000000) {
      console.log('Intervalo (25,50]');
    } else if  (valorLido >= 0 && valorLido <= 25.00000) {
      console.log('Intervalo [0,25]');
    } else if  (valorLido >= 75.0000000 && valorLido <= 100.0000000) {
      console.log('Intervalo (75,100]');
    } else if  (valorLido >= 50.0000000 && valorLido <= 75.0000000) {
      console.log('Intervalo [50,75]');
    } else {
      console.log('Fora de intervalo');
    }
}
