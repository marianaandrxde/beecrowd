var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
index = 0

    // Entrada
    const valor_A = parseInt(lines[index++])
    const valor_B = parseInt(lines[index++])
    const valor_C = parseInt(lines[index++])
    const valor_D = parseInt(lines[index])

    // Processamento
    const diferenca = valor_A * valor_B - valor_C * valor_D

    // Saida
    console.log(`DIFERENCA = ${diferenca}`)
