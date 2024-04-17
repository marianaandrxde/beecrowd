var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

function main(){
    // Entrada
    const num = lines[0].split(" ").map(Number)

    // Processamento
    const primo_gemeo = buscar_primo_gemeo(num)

    // Saída
    exibir(`${primo_gemeo}`)
}


function eh_primo(valor){
    let divisores = 0

    for (let i = 1; i <= valor; i++){
        if (valor % i === 0){
            divisores ++
        } else {
            divisores = divisores
        }
    }

    if (divisores === 2){
        return true

    } else {
        return false
    }

}


function buscar_primo_gemeo(num){
    let i = num

    while(!(eh_primo(i) && eh_primo(i - 2))){
        i--
    }

    return `${i-2} ${i}`
}


function exibir(texto){
    console.log(texto)
}

main()