var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

function main(){
    // Entrada
    const num = parseInt(lines[0])

    // Processamento
    const mes = verificar_mes_correspondente(num)

    // Saída
    exibir(`${mes}`) 
}


function verificar_mes_correspondente(num){
    if (num === 1){
        return `January`
        
    } else if (num === 2){
        return `February`
        
    } else if (num === 3){
        return `March`
        
    } else if (num === 4){
        return `April`
        
    } else if (num === 5){
        return `May`
        
    } else if (num === 6){
        return `June`
        
    } else if (num === 7){
        return `July`
        
    } else if (num === 8){
        return `August`
        
    } else if (num === 9){
        return `September`
        
    } else if (num === 10){
        return `October`
        
    } else if (num === 11){
        return `November`
        
    } else if (num === 12){
        return `December`
    }
}


function exibir(texto){
    console.log(texto)
}

main()
