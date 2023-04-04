let numeros = prompt("Digite uma sequência de números separados por vírgula: ");
let arrayNumeros = numeros.split(",");
let soma = 0;

for (let i = 0; i < arrayNumeros.length; i++) {
  soma += parseInt(arrayNumeros[i]);
}

console.log("A soma dos números é: " + soma);
let n = parseInt(prompt("Digite o número de termos da sequência de Fibonacci que deseja gerar:"));

let fibonacci = [0, 1];

// Gera a sequência de Fibonacci até o n-ésimo termo
for (let i = 2; i < n; i++) {
  fibonacci[i] = fibonacci[i-1] + fibonacci[i-2];
}

console.log("Sequência de Fibonacci: " + fibonacci.join(", "));
let a = parseInt(prompt("Digite o primeiro número inteiro:"));
let b = parseInt(prompt("Digite o segundo número inteiro:"));

// Encontra o máximo divisor comum usando o algoritmo de Euclides
function mdc(a, b) {
  if (b === 0) {
    return a;
  } else {
    return mdc(b, a % b);
  }
}

let resultado = mdc(a, b);

console.log("O máximo divisor comum de " + a + " e " + b + " é " + resultado);