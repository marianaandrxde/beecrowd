var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
let index = 0
    
    // Entrada
    const valor = parseInt(lines[index])

    // Processamento
    const notas100 = Math.floor(valor / 100)
    const notas50 = Math.floor((valor % 100) / 50)
    const notas20 = Math.floor(((valor % 100) % 50) / 20)
    const notas10 = Math.floor((((valor % 100) % 50) % 20) / 10)
    const notas5 = Math.floor(((((valor % 100) % 50) % 20) % 10) / 5)
    const notas2 = Math.floor((((((valor % 100) % 50) % 20) % 10) % 5) / 2)
    const notas1 = Math.floor(((((((valor % 100) % 50) % 20) % 10) % 5) % 2) / 1)

    // Saída
    console.log(`${valor}`)
    console.log(`${notas100} nota(s) de R$ 100,00`)
    console.log(`${notas50} nota(s) de R$ 50,00`)
    console.log(`${notas20} nota(s) de R$ 20,00`)
    console.log(`${notas10} nota(s) de R$ 10,00`)
    console.log(`${notas5} nota(s) de R$ 5,00`)
    console.log(`${notas2} nota(s) de R$ 2,00`)
    console.log(`${notas1} nota(s) de R$ 1,00`)