var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

function main(){
    // Entrada
    const [a, b, c, d] = lines[0].split(" ").map(Number) 

    // Processamento
    const denominador = calcularDenominador(b, d)
    const numerador = calcularNumerador(denominador, a, b, c, d)
    const fracao_irredutivel = obterFracaoIrredutivel(denominador, numerador)

    // Saída
    exibir(`${fracao_irredutivel}`)
}


function calcularDenominador(b, d){
    if (b === d){
        return b

    } else {
        const denominadorComum = calcularMinimoMultiploComum(b, d)
        return denominadorComum
    }
}


function calcularNumerador(denominador,a, b, c, d){
    if (denominador === d){
        return a + c
    } else {
        return (denominador / b * a) + (denominador / d * c)
    }
}


function obterFracaoIrredutivel(numerador, denominador){
    if (numerador / denominador === 1){
        return 1

    } else {
        for (let i = eh_maior(numerador, denominador); i >= 0; i--){
            if (numerador % i === 0 && denominador % i === 0){
                numerador = numerador / i
                denominador = denominador / i
            }
        }
    }

    return `${denominador} ${numerador}`
}


function calcularMinimoMultiploComum(numA, numB){
    let i = 1
    while (!(eh_multiplo(i, numA) && eh_multiplo(i, numB))){
        i++
    }
    return i
}


function eh_maior(a, b){
    if (a > b){
        return a 
    } else {
        return b
    }
}


function eh_multiplo(A, B){
    return A % B === 0
}


function exibir(texto){
    console.log(texto)
}

main()

