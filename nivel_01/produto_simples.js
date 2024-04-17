var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
index = 0

    // Entrada
    const num1 = Number(lines[index++])
    const num2 = Number(lines[index])

    // Processamento
    const prod = num1 * num2

    // Saída
    console.log(`PROD = ${prod}`)
