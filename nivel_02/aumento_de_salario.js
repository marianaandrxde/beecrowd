var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

function main(){
    // Entrada
    const salario = Number(lines[0])

    // Processamento
    const perc_reajuste = verificar_percentual_reajuste(salario)
    const reajuste = verificar_reajuste_salarial(perc_reajuste, salario)
    const novo_salario = calcular_novo_salario(reajuste, salario)

    // Saída
    exibir(`Novo salario: ${novo_salario.toFixed(2)}`)
    exibir(`Reajuste ganho: ${reajuste.toFixed(2)}`)
    exibir(`Em percentual: ${perc_reajuste} %`)
}


function verificar_percentual_reajuste(salario){
    if(salario > 0 && salario <= 400.00){
        return 15

    } else if (salario >= 400.01 && salario <= 800.00){
        return 12

    } else if (salario >= 800.01 && salario <= 1200.00){
        return 10

    } else if (salario >= 1200.01 && salario <= 2000.00){
        return 7

    } else if (salario >= 2000.01){
        return 4
    }
}


function verificar_reajuste_salarial(perc_reajuste, salario){
    return (perc_reajuste/100) * salario
}


function calcular_novo_salario(reajuste, salario){
    return salario + reajuste
}


function exibir(texto){
    console.log(texto)
}


main()