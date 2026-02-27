var array = [0, 3, 5, 10, 2];

function verMenor(array) { 
    let menorElemento = array[0]
    let indiceDoMenor = 0
    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        if (element < menorElemento) {
            menorElemento = element
            indiceDoMenor = i
        }   
    }    
}

function ordenaçãoSeleção(array) { 
    const arrayOrdenado = [] 
    while (array.length > 0) { 
        let indiceDoMenor = verMenor(array)
        arrayOrdenado.unshift(array.splice(indiceDoMenor, 1)[0])
    }
    return arrayOrdenado
}


array.sort((a, b) => a -b ) //mesma função