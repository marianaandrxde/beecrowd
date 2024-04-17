var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let index = 0

function main(){
    // Entrada
    const numero_testes = Number(lines[index])

    // Processamento
    for (let i = 0; i < numero_testes; i++){
        let qtd_pessoas = Number(lines[++index])
        const idioma_pessoa1 = lines[++index]
        
    // Saída
        const idioma_apropriado = informarIdiomaApropriado(qtd_pessoas, idioma_pessoa1 )
        exibir(`${idioma_apropriado}`)
    }
}


function informarIdiomaApropriado(qtd_pessoas, idioma_pessoa1){
    let idioma_nativo
    let contador = 0

    for (let i = 1; i < qtd_pessoas; i++){
        idioma_nativo = lines[++index]

        if (idioma_nativo !== idioma_pessoa1){
            contador++
        }
    }

    if (contador === 0){
        return `${idioma_pessoa1}`
    } else {
        return `ingles`
    }
}


function exibir(texto){
    console.log(texto)
}

main()