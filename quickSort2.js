var array = [2, 5, 1, 3, 4]

function quickSort(array) {
    if (array.length < 2) {
        return array
    }

    let menores = []
    let maiores = []
    let pivo = array[0]

    for (let i = 1; i < array.length; i++) {
        if (pivo < array[i]) {
            menores.push(array[i])
        } else {
            maiores.push(array[i])
        }
    }

    return quickSort(menores).concat([pivo], quickSort(maiores))
}