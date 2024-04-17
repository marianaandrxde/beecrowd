var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

function main(){
    // Entrada
    const [codigo, qtd_item] = lines[0].split(" ").map(item => parseInt(item))

    // Processamento
    const total_conta = calcular_total_a_pagar(codigo, qtd_item)

    // Saída
    show(`Total: R$ ${total_conta.toFixed(2)}`)
}


function show(descricao){
    console.log(descricao)
}


function calcular_total_a_pagar(codigo, qtd_item){
    if (codigo === 1){
        return qtd_item * 4

    } else if (codigo === 2){
        return qtd_item * 4.5

    } else if (codigo === 3){
        return qtd_item * 5

    } else if (codigo === 4){
        return qtd_item * 2

    } else if (codigo === 5){
        return qtd_item * 1.5
    }
}

main()

