var array = [0, 2, 4, 5, 1, 3]
function quickSort(array) {
    if (array, length < 2) {
        return array
    }

    let pivo = array[Math.floor(array.length/2)] //pegando meio do array pra aumentar velocidade    
    let menores = []
    let maiores = []
    
    for (let i = 1; i < array.length; i++)
        if (array[i] < pivo) {
            menores.push(array[i])
        } else {
            maiores.push(array[i])
        }
        
    return quickSort(menores).concat([pivo], quickSort(maiores))
}