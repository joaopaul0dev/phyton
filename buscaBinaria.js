const array = [1, 3, 5, 7, 9, 11];

function buscaBinaria(alvo, inicio, fim) {
    
    if (inicio > fim) return -1;

    let meio = Math.floor((inicio + fim) / 2);

    
    if (array[meio] === alvo) return meio;
    
    return alvo < array[meio] 
        ? buscaBinaria(alvo, inicio, meio - 1) // Busca na esquerda
        : buscaBinaria(alvo, meio + 1, fim);  // Busca na direita
}

console.log(buscaBinaria(7, 0, array.length - 1)); 