var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
index = 0

    // Entrada
    const nota_A = parseFloat(lines[index++])
    const nota_B = parseFloat(lines[index])

    // Processamento
    const media = (nota_A.toFixed(1) * 3.5 + nota_B.toFixed(1) * 7.5) / 11

    // Saída
    console.log(`MEDIA = ${media.toFixed(5)}`)