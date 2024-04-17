var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

function main(){
    // Entrada
    const [n1, n2, n3, n4] = lines[0].split(" ").map(item=>parseFloat(item))

    // Processamento
    const media_notas = calcular_media_notas(n1,n2,n3,n4)
    const situacao = verificar_situacao_aluno(media_notas)

    // Saída
    exibir(`Media: ${media_notas.toFixed(1)}`)
    exibir(`${situacao}`)

    // Segundo bloco - entrada
    if ((media_notas >= 5 && media_notas <= 6.9)){
        const nota_exame = Number(lines[1])
        const media_final = calcular_media_final(media_notas, nota_exame)
        const situacao_final = verificar_situacao_final(media_final)

        // Segundo bloco - saída
        exibir (`Nota do exame: ${nota_exame.toFixed(1)}`)
        exibir(`${situacao_final}`)
        exibir(`Media final: ${media_final.toFixed(1)}`)
    } else {
        return 
    }
}


function calcular_media_notas(n1,n2,n3,n4){
    return (n1 * 2 + n2 * 3 + n3 * 4 + n4) / 10
}


function verificar_situacao_aluno(media_notas){
    if (media_notas >= 7){
        return `Aluno aprovado.`

    } else if (media_notas < 5){
        return `Aluno reprovado.`

    } else if (media_notas >= 5 && media_notas <= 6.9){
        return `Aluno em exame.`
    }
}


function calcular_media_final(media_notas, nota_exame){
    if (media_notas >= 5 && media_notas <= 6.9){
        return (media_notas + nota_exame) / 2

    } else {
        return
    }
}


function verificar_situacao_final(media_final){
    if (media_final >= 5){
        return `Aluno aprovado.`
    } else {
        return
    }
}


function obter_numero(descricao){
    const numero = Number(question(descricao))
    return numero
}


function exibir(texto){
    console.log(texto)
}


main()


