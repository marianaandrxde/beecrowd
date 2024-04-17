var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
let index = 0

    // Entrada
    const distancia = parseInt(lines[index])

    // Processamento
    const qtd_minutos = distancia * 2

    // Saída
    console.log(`${qtd_minutos} minutos`)