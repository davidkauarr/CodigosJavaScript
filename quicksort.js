function quicksort(array) {
  if (array.length <= 1) {
    return array;
  }

  let pivo = array[Math.floor(array.length / 2)];

  let menores = [];
  let maiores = [];
  let iguais = [];

  for (let elemento of array) {
    if (elemento < pivo) {
      menores.push(elemento);
    } else if (elemento > pivo) {
      maiores.push(elemento);
    } else {
      iguais.push(elemento);
    }
  }

  return quicksort(menores).concat(iguais, quicksort(maiores));
}

let array = [3, 6, 1, 8, 4, 2, 7, 5];
let resultado = quicksort(array);

console.log("Array ordenado: " + resultado);
