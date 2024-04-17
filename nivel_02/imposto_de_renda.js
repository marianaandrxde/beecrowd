var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');


function main(){
    // Entrada
    const renda = Number(lines[0])

    // Processamento
    const imposto_renda = calcular_total_a_pagar_imposto(renda)

    // Saída
    exibir (`${imposto_renda}`)
}


function calcular_total_a_pagar_imposto(renda){
    if (renda >= 0 && renda <= 2000.00){
        return `Isento`

    } else if (renda >= 2000.01 && renda <= 3000.00){
        const calculo = (renda - 2000) * 0.08
        return `R$ ${calculo.toFixed(2)}`

    } else if (renda >= 3000.01 && renda <= 4500.00){
        const calculo = (1000 * 0.08) + (renda - 3000.00) * 0.18
        return `R$ ${calculo.toFixed(2)}`
    
    } else if (renda >= 4500.01){
        const calculo = ((1000 * 0.08) + (1500 * 0.18) + (renda - 4500.00) * 0.28)
        return `R$ ${calculo.toFixed(2)}`
    }
}


function exibir(texto){
    console.log(texto)
}

main()