var array = [7, 3, 1, 5]
function contadorArr(contador) {
    return array.length == 0 ? contador : array.shift(), contadorArr(contador + 1)
}

console.log(contadorArr(0))