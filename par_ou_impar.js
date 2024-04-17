var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let index = 0 

function main(){
    // Entrada
    let qtd_rodadas = Number(lines[index])

    // Processamento
    for (let j = 1; qtd_rodadas !== 0; j++){
        const play1 = lines[++index]
        const play2 = lines[++index]

        exibir(`Teste ${j}`)
        for (let i = 0; i < qtd_rodadas; i++){
            let [num1, num2] = lines[++index].split(" ").map(Number) 
            let campeao = verificarCampeaoDaRodada(play1, play2, num1, num2)
            
            // Saída
            exibir(campeao)
        }
            
        // Atualização de variável
        saltarLinha()
        qtd_rodadas = Number(lines[++index])
    }
}


function verificarCampeaoDaRodada(play1, play2, num1, num2){
    if (eh_par(soma(num1, num2))){
        return `${play1}`
    } else {
        return `${play2}`
    }
}


function saltarLinha(){
    return exibir(``)
}


function soma(a, b){
    return (parseInt(a) + parseInt(b))
}


function eh_par(numero){
    return numero % 2 === 0
}


function obter_numero(descricao){
    return Number(question(descricao))
}


function exibir(texto){
    console.log(texto)
}

main()
