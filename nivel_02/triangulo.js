var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

function main(){
    // Entrada
    const [a,b,c] = lines[0].split(" ").map(Number)
    
    // Processamento
    const lado_maior= maior_de_tres(a, b, c)
    const lados_menores = menores_de_tres(lado_maior, a, b , c)
    const sum_menores = somar_lados_menores(lados_menores)
    const sumsq_menores = somar_quadrados_lados_menores(lados_menores)
    const class_angulo = classificar_quanto_ao_angulo(lado_maior, sum_menores, sumsq_menores)
    const area_perimetro = calcular_area_ou_perimetro(class_angulo, a, b, c)

    // Saída
    exibir(area_perimetro)
}

function maior_de_tres(a, b, c){
    if (a === b && b === c ){
        return a

    }else if (a > b && a > c){
        return a

    } else if (b > a && b > c){
        return b

    } else {
        return c
    }
}


function menores_de_tres(lado_maior, a, b, c){
    if ((lado_maior === a && a === b && a === c)){
        const menores = [c, b]
        return menores

    } else if (lado_maior === a){
        const menores = [c, b]
        return menores
    } else if (lado_maior === b){
        const menores = [a, c]
        return menores

    } else {
        const menores = [a, b]
        return menores
    }
} 


function somar_lados_menores(lados_menores){
    let sum = 0
    const numbers = [lados_menores].map(Number)

    for (let i = 0; i <= numbers.length; i++){
        sum = sum + lados_menores[i]
    }

    return sum
}


function somar_quadrados_lados_menores(lados_menores){
    let sumsq = 0
    const numbers = [lados_menores].map(Number)
    
    for (let i = 0; i <= numbers.length; i++){
        sumsq = sumsq + Math.pow(lados_menores[i],2)
    }

    return sumsq
}


function classificar_quanto_ao_angulo(lado_maior, sum_menores, sumsq_menores){
    const quadrado_maior = Math.pow(lado_maior, 2)
    
    if (lado_maior >= sum_menores){
        return false

    } else if (quadrado_maior === sumsq_menores){
        return true

    } else if (quadrado_maior > sumsq_menores){
        return true

    } else if (quadrado_maior < sumsq_menores){
        return true
    }
}


function calcular_area_ou_perimetro(class_angulo, a, b, c){
    if (class_angulo === false){
        return `Area = ${((a+b)*c/2).toFixed(1)}`

    } else if (class_angulo){
        return `Perimetro = ${(a+b+c).toFixed(1)}`
    }
}

function exibir(texto){
    console.log(texto)
}

main()



