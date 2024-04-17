const input = require('fs').readFileSync('/dev/stdin', 'utf8');
const lines = input.trim().split('\n');

let index = 0

function main(){
    // Entrada
    const qtd_mensagens = Number(lines[index])

    // Processamento
    for(let i = 0; i < qtd_mensagens; i++){
        const mensagem = lines[++index]
        const mensagemEtapa1 = deslocarLetras(mensagem)
        const mensagemEtapa2 = inverterCaracteres(mensagemEtapa1)
        const mensagemEtapa3 = deslocarMetade(mensagemEtapa2)

    // Saída
        exibir(mensagemEtapa3)
    }
}


function deslocarLetras(mensagem){
    let nova_mensagem = ``

    for(let caractere of mensagem){
        if ((eh_letra(caractere))){
            let caractere_deslocado = deslocarTabelaASCII(caractere, 3)
            nova_mensagem += caractere_deslocado
        } else {
            nova_mensagem += caractere
        }
    }

    return nova_mensagem

}


function deslocarMetade(mensagem){
    const metade = Math.trunc(mensagem.length / 2)
    let nova_mensagem = ``

    for (let i = 0; i < mensagem.length; i++){
        if (i < metade){
            nova_mensagem += mensagem[i]
        } else {
            nova_mensagem += deslocarTabelaASCII(mensagem[i],-1)
        }
    }

    return nova_mensagem
}


function inverterCaracteres(mensagemEtapa1){
    let nova_mensagem = ``
    for (let i = mensagemEtapa1.length-1; i >= 0; i--){
        nova_mensagem += mensagemEtapa1[i]
    }
    
    return nova_mensagem
    
}


function codigoASCII(caractere){
    return caractere.charCodeAt(0)
}


function eh_letra(caractere){
    const codigo = codigoASCII(caractere)

    if (codigo >= 65 && codigo <= 90 || codigo >= 97 && codigo <= 122){
        return true
    } else {
        return false
    }
}


function deslocarTabelaASCII(caractere, posicao){
    const codigo = codigoASCII(caractere)
    const novo_codigo = codigo + posicao
    const novo_caractere = converterParaCaractere(novo_codigo)

    return novo_caractere
}


function converterParaCaractere(codigo){
    return String.fromCharCode(codigo)
}


function exibir(texto){
    console.log(texto)
}


main()
