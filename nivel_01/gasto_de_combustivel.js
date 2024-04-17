var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
let index = 0

    // Entrada
    const qtd_horas = parseInt(lines[index++])
    const distancia = parseInt(lines[index])

    // Processamento
    const gasto_combustivel = distancia / 12 * qtd_horas

    // Saída
    console.log(`${gasto_combustivel.toFixed(3)}`)
