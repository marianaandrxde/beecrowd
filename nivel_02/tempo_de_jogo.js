var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

function main(){
    // Entrada
    const [tempo0, tempof] = lines[0].split(" ").map(Number)

    // Processamento
    const duracao = verificar_duracao_jogo(tempo0, tempof)

    // Saída
    exibir(`O JOGO DUROU ${duracao} HORA(S)`)
}


function verificar_duracao_jogo(tempo0, tempof){
    if (tempo0 === tempof){
        return 24

    } else if (tempo0 > tempof){
        return (24 - tempo0 + tempof)

    } else if (tempof > tempo0){
        return tempof - tempo0
    }
}


function exibir(texto){
    console.log(texto)
}

main()
