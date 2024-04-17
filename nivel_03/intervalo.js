var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

function main(){
    // Entrada
    const valor = parseFloat(lines[0])

    // Processamento
    const situacao = verificar_se_pertence_ao_intervalo(valor)

    // Saída
    console.log(`${situacao}`)
}


function verificar_se_pertence_ao_intervalo(valor){
    if (valor >= 0 && valor <= 25.0000000 ){
        return `Intervalo [0,25]`

    } else if (valor > 25.00001 && valor <= 50.0000000){
        return `Intervalo (25,50]`

    } else if (valor > 50.00001 && valor <= 75.0000000){
        return `Intervalo (50,75]`

    } else if (valor > 75.00001 && valor <= 100.0000000){
        return `Intervalo (75,100]`
        
    } else{
        return `Fora de intervalo`
    }
}

main()