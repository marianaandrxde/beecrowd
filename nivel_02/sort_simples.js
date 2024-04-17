var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

function main(){
    // Entrada
    const [a, b, c] = lines[0].split(" ").map(Number)

    // Processamento
    const third = maior_de_tres(a, b, c)
    const first = menor_de_tres(a, b, c)
    const second = verificar_valor_central(first, third, a, b, c)

    // Saída
    exibir(`${first}`)
    exibir(`${second}`)
    exibir(`${third}`)
    exibir(``)
    exibir(`${a}`)
    exibir(`${b}`)
    exibir(`${c}`)
}


function maior_de_tres(a, b, c){
    if (a > b && a > c){
        return a
    } else if (b > a && b > c){
        return b
    } else {
        return c
    }
}


function menor_de_tres(a, b, c){
    if (a < b && a < c){
        return a
    } else if (b < a && b < c){
        return b
    } else {
        return c
    }
}


function verificar_valor_central(first, second, a, b, c){
    if (a !== first && a !== second){
        return a
    } else if (b !== first && b !== second){
        return b
    } else if (c !== first && c !== second){
        return c
    }
}


function exibir(texto){
    console.log(texto)
}

main()