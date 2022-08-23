//exercicio 2
//a
function calcular (a,b){
    return a+b
}
console.log(calcular(4,5));

//b
function comparar (a,b){
    return a>=b
}
console.log(`O primeiro é maior ou igual ao segundo? ${comparar(10,10)}`);

//c
function comparar1 (numero) {
    resultado1 = numero%2===0
    if(resultado1){
        return`O numero ${numero} é par! `;
    } else{
        return`O numero ${numero} é impar! `;
    }
    return
}
console.log(comparar1(11));


//d
function stringCount (palavra) {
    let resultado = (`${palavra.length} ${palavra.toUpperCase()}`)
    console.log(resultado)
    
}
stringCount("Marcus")