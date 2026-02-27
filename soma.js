var array = [7, 3, 1, 5]
function somaArr(soma) {
    if (array.length == 0) {
        return 0
    } else {
        return soma.shift() + somaArr(array)
    }
}