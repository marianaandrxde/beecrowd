const input = require('fs').readFileSync('/dev/stdin', 'utf8');
const lines = input.trim().split('\n');

let index = 0

function main() {
    // Entrada
    const num_testes = Number(lines[index])

    // Processamento
    for (let i = 0; i < num_testes; i++) {
    const numero = lines[++index]
    const qtd_leds = calcularQuantidadeLedsNecessarias(numero)
    
    // Saída
    exibir(`${qtd_leds} leds`)
    }
}

function calcularQuantidadeLedsNecessarias(numero) {
  let qtd_leds = 0

  for (let i = 0; i < numero.length; i++) {
    const digito = numero[i]
    qtd_leds += atribuirValor(digito)
  }

  return qtd_leds
}

function atribuirValor(numero) {
  if (numero === "1") {
    return 2
  } else if (numero === "2" || numero === "3" || numero === "5") {
    return 5
  } else if (numero === "4") {
    return 4
  } else if (numero === "6" || numero === "9" || numero === "0") {
    return 6
  } else if (numero === "7") {
    return 3
  } else if (numero === "8") {
    return 7
  }
}

function exibir(texto) {
  console.log(texto)
}

main()
