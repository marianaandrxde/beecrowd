var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

function main(){
    const [p1, c1, p2, c2] = lines[0].split(" ").map(Number)

    // Processamento
    const situacao = verificar_se_esta_equilibrado(p1, c1, p2, c2)

    // Saída
    exibir(`${situacao}`)
}


function verificar_se_esta_equilibrado(p1, c1, p2, c2){
    const esquerdo = p1 * c1
    const direito = p2 * c2

    if (esquerdo === direito){
        return 0

    } else if (esquerdo < direito){
        return 1

    } else {
        return -1
    }
}


function exibir(texto){
    console.log(texto)
}

main()
