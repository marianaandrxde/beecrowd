var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

    // Entrada
    const raio = Number(lines[0])
    const π = 3.14159
    
    // Processamento
    const area = π * (raio ** 2)
    
    // Saída
    console.log(`A=${area.toFixed(4)}`)