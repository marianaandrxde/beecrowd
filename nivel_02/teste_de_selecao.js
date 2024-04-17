var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');


function main(){
    // Entrada
    const [a,b,c,d] = lines[0].split(' ')
    
    // Processamento
    const soma1 = a + b 
    const soma2 = c + d
    const situacao = verificar_validacao(a,b,c,d,soma1,soma2)
    
    // Saída
    console.log(situacao)
}


function verificar_validacao(a,b,c,d,soma1,soma2){
    if(b>c && d>a && soma2 > soma1 && c > 0 && d > 0 && (a % 2===0)){
        return("Valores aceitos")
    } else {
        return("Valores nao aceitos")}
}

main( )
