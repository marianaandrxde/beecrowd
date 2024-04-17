var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');


function main(){
    // Entrada
    const [x,y] = lines[0].split(" ").map(Number)
    
        // Processamento
    const quadrante = verificar_quadrante(x, y)

    // Saída
    exibir(`${quadrante}`)
}


function verificar_quadrante(x, y){
    if (x === 0 && y !== x){
        return `Eixo Y`

    } else if (y === 0 && y !== x){
        return `Eixo X`

    } else if (x > 0 && y > 0){
        return `Q1`

    } else if (x < 0 && y > 0){
        return `Q2`

    } else if (x < 0 && y < 0){
        return `Q3`

    } else if (x > 0 && y < 0){
        return `Q4`

    } else if (x === 0 && y === 0){
        return `Origem`
    }
}


function exibir(texto){
    console.log(texto)
}

main()