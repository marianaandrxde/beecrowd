var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

    // Entrada
    const raio = parseFloat(lines[0])
    const pi = 3.14159

    // Processamento
    const volume = 4/3 * pi * (raio **3)

    // Saída
    console.log(`VOLUME = ${volume.toFixed(3)}`)