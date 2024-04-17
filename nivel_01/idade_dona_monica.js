var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let index = 0

function main(){
    // Entrada
    const idade_monica = Number(lines[index])
    const idade_filho1 = Number(lines[++index])
    const idade_filho2 = Number(lines[++index])

    // Processamento
    const idade_filho3 = verificarIdadeFilhoC(idade_monica, idade_filho1, idade_filho2)
    const filho_mais_velho = informarIdadeMaisVelho(idade_filho1, idade_filho2, idade_filho3)

    // Saída
    exibir(`${filho_mais_velho}`)
}


function verificarIdadeFilhoC(idade_monica, idade_filho1, idade_filho2){
    return idade_monica - (idade_filho1 + idade_filho2)
}


function informarIdadeMaisVelho(idade_filho1, idade_filho2, idade_filho3){
    return eh_maior(idade_filho1, idade_filho2, idade_filho3)
}


function eh_maior(a, b, c){
    if (a > b && a > c){
        return a
    } else if (b > c && b > a){
        return b
    } else {
        return c
    }
}


function exibir(texto){
    console.log(texto)
}


main()