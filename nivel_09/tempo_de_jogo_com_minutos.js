var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

function main (){
    // Entrada
    const [N, X] = lines[0].split(" ").map(Number)

    // Processamento
    const qtd_dias = calcular_tempo_percurso(N, X)

    // Saída
    exibir(`${qtd_dias.toFixed(2)}`)
}


function calcular_tempo_percurso(N, X){
    return X / (N + 2)
}


function exibir(texto){
    console.log(texto)
}

main()
