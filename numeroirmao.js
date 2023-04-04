let n = parseInt(prompt("Digite um número inteiro positivo: "));

// Um número é primo se ele for maior que 1 e se for divisível apenas por 1 e por ele mesmo
if (n > 1) {
  let isPrime = true;
  for (let i = 2; i < n; i++) {
    if (n % i === 0) {
      isPrime = false;
      break;
    }
  }
  if (isPrime) {
    console.log(n + " é um número primo");
  } else {
    console.log(n + " não é um número primo");
  }
} else {
  console.log(n + " não é um número primo");
}