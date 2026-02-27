var array = [7, 3, 1, 5]
var maior = 0
function maiorValor(atual) {
    if (atual > maior) {
        maior = atual
    }
    return array.length == 0 ? maior : maiorValor(array.shift())
}

Math.max(array)
