var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
let index = 0

    // Entrada
    const numero = parseInt(lines[index++])
    const horas_trabalhadas = parseInt(lines[index++])
    const valor_hora = parseFloat(lines[index])

    // Processamento
    const salario = horas_trabalhadas * valor_hora

    // Saída
    console.log(`NUMBER = ${numero}`)
    console.log(`SALARY = U$ ${salario.toFixed(2)}`)
    