var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

function main(){
    // Entrada e Processamento 
    let index = 0
    let qtd_pares = 0

    while (index <= 4){
        const numero = Number(lines[index])
        
        if (eh_par(numero)){
            qtd_pares++
            index++
            
        } else {
            qtd_pares = qtd_pares
            index++
        }
    }

    // Saída
    exibir(`${qtd_pares} valores pares`)
}


function eh_par(num){
    if (num % 2 === 0){
        return true
    } else {
        return false
    }
}


function exibir(texto){
    console.log(texto)
}


main()