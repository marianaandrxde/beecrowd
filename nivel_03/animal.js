var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let index = 0

function main(){
    // Entrada
    const dica1 = lines[index++]
    const dica2 = lines[index++]
    const dica3 = lines[index]

    // Processamento
    const animal = descobrir_animal_descrito(dica1, dica2, dica3)

    // Saída
    exibir(`${animal}`)
}


function descobrir_animal_descrito(dica1, dica2, dica3){
    if (dica1 === "vertebrado"){
        if (dica2 === "ave"){
            if (dica3 === "carnivoro"){
                return `aguia`
            } else {
                return `pomba`
            }

        } else{
            if (dica3 === "onivoro"){
                return `homem`
            } else {
                return `vaca` 
            }
        } 
        
    } else if (dica1 === "invertebrado"){
        if (dica2 === "inseto"){
            if (dica3 === "hematofago"){
                return `pulga`
            } else {
                return `lagarta`
            }

        } else{
            if (dica3 === "hematofago"){
                return `sanguessuga`
            } else {
                return `minhoca` 
            }
        } 
    }
}


function exibir(texto){
    console.log(texto)
}


main()