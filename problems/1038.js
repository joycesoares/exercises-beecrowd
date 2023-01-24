export function problem(lines) {
  var input = require("fs").readFileSync("stdin", "utf8");
  var lines = input.split("\n");

 const [A, B] = input.split(" ");

  let opcoes = [
    {
      "codigo": 1,
      "especificacao": "Cachorro Quente",
      "preco": 4.00,
    },
    {
      "codigo": 2,
      "especificacao": "X-Salada",
      "preco": 4.50,
    },
    {
      "codigo": 3,
      "especificacao": "X-Bacon",
      "preco": 5.00,
    },
    {
      "codigo": 4,
      "especificacao": "Torrada Simples",
      "preco": 2.00,
    },
    {
      "codigo": 5,
      "especificacao": "Refrigerante",
      "preco": 1.50,
    },
  ]
  let opcao = opcoes.map(opc => {
    if (opc.codigo == A){
      return console.log(`Total: R$ ${(B * opc.preco).toFixed(2)}`);
    } else {
      return console.log("Favor informar um código válido");
    }
  });
}
