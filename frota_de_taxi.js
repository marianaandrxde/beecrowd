var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

function main(){
    // Entrada
    const [valorAlcool, valorGasolina, rendimentoAlcool, rendimentoGasolina] = lines[0].split(" ").map(Number)

    // Processamento
    const opcaoEconomica = verificarOpcaoEconomica(valorAlcool, valorGasolina, rendimentoAlcool, rendimentoGasolina)

    // Saída
    exibir(`${opcaoEconomica}`)
}


function verificarOpcaoEconomica(valorAlcool, valorGasolina, rendimentoAlcool, rendimentoGasolina){
    const abastecimentoAlcool = rendimentoAlcool / valorAlcool
    const abastecimentoGasolina = rendimentoGasolina / valorGasolina

    if (abastecimentoAlcool > abastecimentoGasolina){
        return `A`
    } else {
        return `G`
    }
}


function exibir(texto){
    console.log(texto)
}

main()