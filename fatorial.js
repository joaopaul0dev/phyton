function fatorial(x) {
    if (x == 1) {
        return 1 
    } else {
        return x * fatorial(x - 1)
    }
}

function fatorialTern() {
    return x == 1 ? 1 : x * fatorialTern(x - 1);
}

function fatoriallac(n) {
    let x = 1
    for (let i = 1; i <= n ; i++) {
        x * n - 1
    }
    return x
}