var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
let index = 0

//import { question } from "readline-sync";

function main(){
    // Entrada
    const num1 = pedir_numero()
    const num2 = pedir_numero()

    // Processamento
    const soma = num1 + num2

    // Saída
    print(`X = ${soma}`)
}


function pedir_numero(){
    // return Number(question(`Número: `))
    return Number(lines[index++])
}


function print(resultado){
    console.log(resultado)
}

main()
