var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

function main(){
    const limite = lines[0].split(" ").map(Number)
    
    // Processamento --> Saída
    const impares = listarImparesAteLimite(limite)
}


function eh_impar(numero){
    if (numero % 2 !== 0){
        return true
    } else {
        return false
    }
}


function listarImparesAteLimite(limite){
    for(let i = 0; i <= limite; i++){
        if (eh_impar(i)){
            console.log(i)
        }
    }
}

main()
