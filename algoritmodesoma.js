let numeros = prompt("Digite uma sequência de números separados por vírgula: ");
let arrayNumeros = numeros.split(",");
let soma = 0;

for (let i = 0; i < arrayNumeros.length; i++) {
  soma += parseInt(arrayNumeros[i]);
}

console.log("A soma dos números é: " + soma);