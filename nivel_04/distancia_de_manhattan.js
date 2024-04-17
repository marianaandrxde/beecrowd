var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

function main(){
    const [xM, yM, xR, yR] = lines[0].split(" ").map(Number)

    // Processamento
    const distancia = calcularDistancia(xM, xR) + calcularDistancia(yM, yR)


    exibir(`${distancia}`)
}


function calcularDistancia(a, b){
    if (a === b){
        return 0

    } if (a < b){
        return b - a

    } if (b < a){
        return a - b
    }
}


function exibir(texto){
    console.log(texto)
}


main()