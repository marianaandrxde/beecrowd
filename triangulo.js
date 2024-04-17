var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

function main(){
    // Entrada
    const [A, B, C, D] = lines[0].split(" ").map(Number)

    // Processamento
    const triangulo = verificarSeFormamTriangulo(A, B, C, D)

    // Saida
    exibir(`${triangulo}`)
}


function verificarSeFormamTriangulo(A, B, C, D) {
    if (eh_triangulo(A, B, C) || eh_triangulo(A, B, D) || eh_triangulo(A, C, D) || eh_triangulo(B, C, D)) {
      return 'S'
    } else {
      return 'N'
    }
}
  

function eh_triangulo(a, b, c) {
    return (a < b + c) && (b < a + c) && (c < a + b)
}
  

function exibir(texto){
    console.log(texto)
}


main()