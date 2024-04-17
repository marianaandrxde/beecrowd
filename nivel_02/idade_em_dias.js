var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
let index = 0

    // Entrada
    const idade = parseInt(lines[index])

    // Processamento
    const anos = Math.floor(idade / 365)
    const meses = Math.floor((idade % 365) / 30)
    const dias = Math.floor((idade % 365) % 30)

    // Saída
    console.log(`${anos} ano(s)`)
    console.log(`${meses} mes(es)`)
    console.log(`${dias} dia(s)`)