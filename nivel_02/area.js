var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

    // Entrada
    const [A, B, C] = input.split(" ").map(item => parseFloat(item))
    const pi = 3.14159

    // Processamento
    const area_triangulo = A * C / 2
    const area_circulo = pi * (C **2)
    const area_trapezio = ((A + B) * C) / 2
    const area_quadrado = B **2
    const area_retangulo = A * B

    // Saída
    console.log(`TRIANGULO: ${area_triangulo.toFixed(3)}`)
    console.log(`CIRCULO: ${area_circulo.toFixed(3)}`)
    console.log(`TRAPEZIO: ${area_trapezio.toFixed(3)}`)
    console.log(`QUADRADO: ${area_quadrado.toFixed(3)}`)
    console.log(`RETANGULO: ${area_retangulo.toFixed(3)}`)

