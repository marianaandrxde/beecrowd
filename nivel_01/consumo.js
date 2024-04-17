var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
let index = 0

    // Entrada
    const X = parseInt(lines[index++])
    const Y = parseFloat(lines[index])

    // Processamento
    const consumo_medio = X / Y

    // Saída
    console.log(`${consumo_medio.toFixed(3)} km/l`)