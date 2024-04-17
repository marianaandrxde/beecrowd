var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');


    // Entrada
    const [x1, y1] = lines.shift().split(" ").map(Number)
    const [x2, y2] = lines.shift().split(" ").map(Number)

    // Processamento
    const distancia = Math.sqrt((x2 - x1) **2 + (y2 - y1) **2)

    // Saída
    console.log(`${distancia.toFixed(4)}`)