//a) Declare uma função que imprima `Olá, [SEU NOME]!`. Chame esta função.
function imprimirNome (i) {
    console.log(`Olá, ${i}!`);  
};
console.log(imprimirNome("Marcus"));

//b) Declare uma função que imprima a tabuada do 6. Chame esta função.

/*function tabuada(numero) {
    for (let i = 1; i <=10; i++) {
        console.log(`Tabuada ${numero}x ${i}=${numero*i}`);;
    }
    return
};
console.log(tabuada(6));*/
//c) Comente as funções criadas acima, e reescreva-as utilizando expressões de função, ou __arrow functions__ 

let tabuada= (numero) => {
    for (let i = 1; i <=10; i++) {
        console.log(`Tabuada ${numero}x ${i}=${numero*i}`);;
    }
    return
};
console.log(tabuada(6));


