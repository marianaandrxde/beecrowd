var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

function main(){
    // Entrada
    const ddd = parseInt(lines[0])

    // Processamento
    const cidade_ddd = verificar_cidade_correspondente(ddd)

    // Saída
    exibir(`${cidade_ddd}`)
}


function verificar_cidade_correspondente(ddd){
    if (ddd === 61){
        return `Brasilia`

    } else if (ddd === 71){
        return `Salvador`

    } else if (ddd === 11){
        return `Sao Paulo`

    } else if (ddd === 21){
        return `Rio de Janeiro`

    } else if (ddd === 32){
        return `Juiz de Fora`

    } else if (ddd === 19){
        return `Campinas`

    } else if (ddd === 27){
        return `Vitoria`

    } else if (ddd === 31){
        return `Belo Horizonte`
        
    } else {
        return `DDD nao cadastrado`
    }
}


function exibir(texto){
    console.log(texto)
}

main()
