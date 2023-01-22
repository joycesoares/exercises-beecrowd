export function problem(lines) {
  var input = require("fs").readFileSync("stdin", "utf8");
  var lines = input.split("\n");

  var dias = parseInt(input);

  var totalAno = parseInt(dias / 365);
  dias = dias % 365;
  var totalMes = parseInt(dias / 30) % 12;
  console.log(totalMes);
  var totalDias = parseInt((dias = dias % 30));

  console.log(`${totalAno} ano(s)\n${totalMes} mes(es)\n${totalDias} dia(s)`);
}
