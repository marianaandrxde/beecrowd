var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

function main(){
    // Entrada e Processamento I
    let index = 0
    let somatorio = 0
    let qtd_positivos = 0

    while (index <= 5){
        const numero = Number(lines[index])
        if (eh_positivo(numero)){
            qtd_positivos++
            somatorio = somatorio + numero
            index++
        } else {
            qtd_positivos = qtd_positivos
            index++
        }
    }

    // Processamento II
    const media = calcular_media_positivos(somatorio, qtd_positivos)

    // Saída
    exibir(`${qtd_positivos} valores positivos`)
    exibir(`${media.toFixed(1)}`)
}


function eh_positivo(num){
    if (num > 0){
        return true
    } else {
        return false
    }
}


function calcular_media_positivos(somatorio, qtd_positivos){
    return somatorio / qtd_positivos
}


function exibir(texto){
    console.log(texto)
}


main()
