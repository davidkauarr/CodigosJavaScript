let conjunto = [2, 3, 6, 8, 9, 10, 11, 14, 16, 17, 18, 19];
let N = 15; //valor limite para a contagem

let contagem = 0;
for (let i = 0; i < conjunto.length; i++) {
  if (conjunto[i] >= conjunto[0] && conjunto[i] <= N && Number.isInteger(conjunto[i])) {
    contagem++;
  }
}

console.log("Existem " + contagem + " valores inteiros entre " + conjunto[0] + " e " + N);