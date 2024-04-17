var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

function main(){
    // Entrada
    const consumo_m3 = Number(lines[0])

    // Processamento
    const conta_agua = calcularContaDeAgua(consumo_m3)

    // Saída
    exibir(`${conta_agua}`)
}


function calcularContaDeAgua(consumo_m3){
    if (consumo_m3 <= 10){
        return 7

    } else if (consumo_m3 > 10 && consumo_m3 <= 30){
        return ((consumo_m3 - 10) * 1) + 7

    } else if (consumo_m3 > 30 && consumo_m3 <= 100){
        return ((consumo_m3 - 30) * 2) + 27

    } else if (consumo_m3 > 100){
        return ((consumo_m3 - 100) * 5) + 167
    }
}


function exibir(texto){
    console.log(texto)
}

main()