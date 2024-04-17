var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');


function main(){
    const [portinhaP, portinhaR] = lines[0].split(" ").map(Number)

    // Processamento
    const caminho = verificar_caminho(portinhaP, portinhaR)

    // Saída
    exibir(`${caminho}`)
}


function verificar_caminho(portinhaP, portinhaR){
    if (portinhaP === 0){
        if (portinhaR === 0){
            return `C`
        } else if (portinhaR === 1){
            return `C`
        }

    } else if (portinhaP === 1){
        if (portinhaR === 0){
            return `B`
        } else if (portinhaR === 1){
            return `A`
        }
    }
}


function exibir(texto){
    console.log(texto)
}

main()