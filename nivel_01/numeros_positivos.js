var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

function main(){
    // Entrada e Processamento 
    let index = 0
    let qtd_positivos = 0

    while (index <= 5){
        const numero = Number(lines[index])
        
        if (eh_positivo(numero)){
            qtd_positivos++
            index++
            
        } else {
            qtd_positivos = qtd_positivos
            index++
        }
    }

    // Saída
    exibir(`${qtd_positivos} valores positivos`)
}


function eh_positivo(num){
    if (num > 0){
        return true
    } else {
        return false
    }
}


function exibir(texto){
    console.log(texto)
}


main()

