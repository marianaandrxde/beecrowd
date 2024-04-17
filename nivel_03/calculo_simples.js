var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

    // Entrada
    const [codigoPeca1,numeroPeca1,valorPeca1] = lines.shift().split(" ")
    const [codigoPeca2,numeroPeca2,valorPeca2] = lines.shift().split(" ")

    // Processamento
    const total = parseInt(numeroPeca1) * parseFloat(valorPeca1) + parseInt(numeroPeca2) * parseFloat(valorPeca2)

    // Saída
    console.log(`VALOR A PAGAR: R$ ${total.toFixed(2)}`)