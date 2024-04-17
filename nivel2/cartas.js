var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

function main(){
    const [a, b, c, d, e] = lines[0].split(" ").map(Number)

    //Proceesamento
    const situacao = verificarOrdenacaoDasCartas(a, b, c, d, e)

    // Saída
    exibir(`${situacao}`)
}


function verificarOrdenacaoDasCartas(a, b, c, d, e){
    if (eh_ordem_crescente(a, b, c, d, e)){
        return `C`

    } else if (eh_ordem_decrescente(a, b, c, d, e)){
        return `D`
        
    } else {
        return `N`
    }
}


function eh_ordem_crescente(a, b, c, d, e){
    if (a < b && b < c && c < d && d < e){
        return true
    } else {
        return false
    }
}


function eh_ordem_decrescente(a, b, c, d, e){
    if (e < d && d < c && c < b && b < a){
        return true
    } else {
        return false
    }
}


function exibir(texto){
    console.log(texto)
}

main()