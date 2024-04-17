var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

function main(){
    // Entrada
    let [farinha, ovos, leite] = lines[0].split(" ").map(Number)

    // Processamento
    const qtd_bolos = verificar_quantidade_bolos(farinha, ovos, leite)

    // Saída
    exibir(`${qtd_bolos}`)
}


function verificar_quantidade_bolos(farinha, ovos, leite){
    farinha = Math.floor(farinha / 2)
    ovos = Math.floor(ovos / 3)
    leite = Math.floor(leite / 5)

    if (farinha === ovos && farinha === leite){
        return ovos
    } else {
        return menor_de_tres(farinha, ovos, leite)
    }

}


function menor_de_tres(a, b, c){
    if (a < b && a < c){
        return a

    } else if ((a === b && b < c)){
        return a

    } else if (a === c && c < b){
        return a
        
    } else if (b === c && c < a){
        return b

    } else if (b < a && b < c){
        return b

    } else if (c < a && c < b){
        return c
    }
}


function exibir(texto){
    console.log(texto)
}

main()