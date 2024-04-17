var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
index = 0

function main(){
    // Entrada
    const valor_A = fixar(parseFloat(lines[index++]))
    const valor_B = fixar(parseFloat(lines[index++]))
    const valor_C = fixar(parseFloat(lines[index]))

    // Processamento
    const media = (valor_A * 2 + valor_B * 3 + valor_C * 5) / 10

    // Saida
    console.log(`MEDIA = ${media.toFixed(1)}`)
}


function fixar(valor){
    return valor.toFixed(1)
}

main()
