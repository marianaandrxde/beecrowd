var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

    // Entrada
    const [a, b, c] = input.split(" ").map(Number)

    // Processamento
    const maior_ab = (a + b + Math.abs(a-b)) / 2
    const eh_maior = (maior_ab + c + Math.abs(maior_ab - c)) / 2

    // Saída
    console.log(`${eh_maior} eh o maior`)