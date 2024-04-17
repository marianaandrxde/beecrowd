var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
let index = 0

    // Entrada
    const valor_A = Number(lines[index++])
    const valor_B = Number(lines[index])
    
    // Processamento
    const soma = valor_A + valor_B

    // Saída
    console.log(`SOMA = ${soma}`)
