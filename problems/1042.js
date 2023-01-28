export function proBlem(lines) {
  var input = require("fs").readFileSync("stdin", "utf8");
  var lines = input.split("\n");

  const [A, B, C] = input.split(" ").map((item) => parseInt(item));

  if (A < B && A < C) {
    console.log(A);
    if (B < C) {
      console.log(B);
      console.log(C);
    } else {
      console.log(C);
      console.log(B);
    }
  } else if (B < C) {
    console.log(B);
    if (A < C) {
      console.log(A);
      console.log(C);
    } else {
      console.log(C);
      console.log(A);
    }
  } else {
    console.log(C);
    if (A < B) {
      console.log(A);
      console.log(B);
    } else {
      console.log(B);
      console.log(A);
    }
  }

  console.log();
  console.log(A);
  console.log(B);
  console.log(C);
}
