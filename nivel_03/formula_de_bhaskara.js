var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

    // Entrada
    const [A, B, C, D] = input.split(" ").map(item => parseFloat(item))
 
    // Processamento
    const Δ = (B **(2) - (4 * A * C))

    if (Δ < 0 || A === 0){
        console.log(`Impossivel calcular`)

    } else{
        const R1 = (-B + (Δ **(1/2))) / (2 * A)
        const R2 = (-B - (Δ **(1/2))) / (2 * A)
        console.log(`R1 = ${R1.toFixed(5)}`)
        console.log(`R2 = ${R2.toFixed(5)}`)
    }
