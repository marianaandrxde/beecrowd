var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

function main(){
    // Entrada
    const [a, b, c] = lines[0].split(" ").map(Number)
    const [x, y, z] = lines[1].split(" ").map(Number)

    // Processamento
    const qtd_conteineres = calcular_quantidade_conteineres(a, b, c, x, y, z)

    // Saída
    exibir(`${qtd_conteineres}`)
}


function calcular_quantidade_conteineres(a, b, c, x, y, z){
    const comprimento = Math.floor(x / a)
    const largura = Math.floor(y / b)
    const altura = Math.floor(z / c)

    if (comprimento === 0 || largura === 0|| altura === 0){
        return 0 
    } else {
        return comprimento * largura * altura
    }
}


function exibir(texto){
    console.log(texto)
}

main()
