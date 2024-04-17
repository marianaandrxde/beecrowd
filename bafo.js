var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let index = 0

function main(){
    // Entrada
    let qtd_rodadas = Number(lines[index])

    // Processamento
    for (let j = 1; qtd_rodadas !== 0; j++){
        let pontuacaoAldo = 0
        let pontuacaoBeto = 0

        for (let i = 1; i <= qtd_rodadas; i++){
            const [aldo, beto] = lines[++index].split(" ").map(Number)
            pontuacaoAldo += aldo
            pontuacaoBeto += beto
        }

        const campeao = verificarCampeaoDaRodada(pontuacaoAldo, pontuacaoBeto)

        // Saída
        exibir(`Teste ${j}`)
        exibir(campeao)

        // Atualização de variável
        qtd_rodadas = Number(lines[++index])
    }
}


function verificarCampeaoDaRodada(pontuacaoAldo, pontuacaoBeto){
    if (pontuacaoAldo > pontuacaoBeto){
        return `Aldo\n`
    } else {
        return `Beto\n`
    }
}


function exibir(texto){
    console.log(texto)
}

main()