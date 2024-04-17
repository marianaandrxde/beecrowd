var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
let index = 0


    // Entrada
    const nomeVendedor = lines[index++]
    const salarioFixo = parseFloat(lines[index++])
    const totalVendas = parseFloat(lines[index])

    // Processamento
    const total = totalVendas * 0.15 + salarioFixo

    // Saída
    console.log(`TOTAL = R$ ${total.toFixed(2)}`)