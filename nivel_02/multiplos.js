var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

function main(){
    // Entrada
    const [A,B] = lines[0].split(" ").map(item => parseInt(item))
    
    // Processamento
    const multiplos = eh_multiplo(A,B)

    // Saída
    exibir(`${multiplos}`)
}


function eh_multiplo(A,B){
    if (A % B === 0 || B % A === 0){
        return `Sao Multiplos`
    } else {
        return `Nao sao Multiplos`
    }
}


function exibir(texto){
    console.log(texto)
}

main()