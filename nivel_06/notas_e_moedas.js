var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

    // Entrada
    const valor_informado = parseFloat(lines[0])
    let valor = valor_informado

    // Processamento
    const notas100 = Math.floor(valor / 100)
    valor = valor % 100
    const notas50 = Math.floor(valor / 50)
    valor = valor % 50
    const notas20 = Math.floor(valor / 20)
    valor = valor % 20
    const notas10 = Math.floor(valor / 10)
    valor = valor % 10
    const notas5 = Math.floor(valor / 5)
    valor = valor % 5
    const notas2 = Math.floor(valor / 2)
    valor = valor % 2
    const moedas1 = Math.floor(valor / 1)
    valor = valor % 1
    const moedas50 = Math.floor(valor / 0.5)
    valor = valor % 0.5
    const moedas25 = Math.floor(valor / 0.25)
    valor = valor % 0.25
    const moedas10 = Math.floor(valor / 0.1)
    valor = valor % 0.10
    const moedas05 = Math.floor(valor / 0.05)
    valor = valor % 0.05
    const moedas01 = Math.floor(valor / 0.00998)

    // Saída
    console.log(`NOTAS:`)
    console.log(`${notas100} nota(s) de R$ 100.00`)
    console.log(`${notas50} nota(s) de R$ 50.00`)
    console.log(`${notas20} nota(s) de R$ 20.00`)
    console.log(`${notas10} nota(s) de R$ 10.00`)
    console.log(`${notas5} nota(s) de R$ 5.00`)
    console.log(`${notas2} nota(s) de R$ 2.00`)
    console.log(`MOEDAS:`)
    console.log(`${moedas1} moeda(s) de R$ 1.00`)
    console.log(`${moedas50} moeda(s) de R$ 0.50`)
    console.log(`${moedas25} moeda(s) de R$ 0.25`)
    console.log(`${moedas10} moeda(s) de R$ 0.10`)
    console.log(`${moedas05} moeda(s) de R$ 0.05`)
    console.log(`${moedas01} moeda(s) de R$ 0.01`)
