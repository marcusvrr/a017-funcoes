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
function stringCount (palavra) {
    resultado= (`${palavra.length} ${palavra.toUpperCase()}`)
    console.log(resultado)
    
}
stringCount("Marcus")