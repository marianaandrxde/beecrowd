var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

function main(){
    // Entrada
    const nota1 = Number(lines[0])
    const media = Number(lines[1])

    // Processamento
    const nota_esquecida = verificarNotaEsquecida(nota1, media)

    // Saída
    exibir(`${nota_esquecida}`)
}


function verificarNotaEsquecida(nota1, media){
    return (2 * media) - nota1
}


function exibir(texto){
    console.log(texto)
}

main()