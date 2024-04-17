var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

function main(){
    // Entrada e Processamento 
    let index = 0
    let qtd_impares = 0
    let qtd_positivos = 0
    let qtd_negativos = 0
    let qtd_pares = 0

    while (index <= 4){
        const numero = Number(lines[index])
        
        if (eh_par(numero)){
            qtd_pares++
            if (eh_positivo(numero)){
                qtd_positivos++
            } else if (eh_negativo(numero)) {
                qtd_negativos++
            } 
            index++
            
        } else {
            qtd_impares++
            if (eh_positivo(numero)){
                qtd_positivos++
            } else if (eh_negativo(numero)){
                qtd_negativos++
            }
            index++
        }
    }

    // Saída
    exibir(`${qtd_pares} valor(es) par(es)`)
    exibir(`${qtd_impares} valor(es) impar(es)`)
    exibir(`${qtd_positivos} valor(es) positivo(s)`)
    exibir(`${qtd_negativos} valor(es) negativo(s)`)
}


function eh_positivo(num){
    if (num > 0 && num !== 0){
        return true
    } else {
        return false
    }
}


function eh_negativo(num){
    if (num < 0 && num !== 0){
        return true
    } else {
        return false
    }
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


