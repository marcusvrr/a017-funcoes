function soma (a,b){
    return a+b
}

function diminuir (a,b){
    return a-b
}

function multiplicar (a,b){
    return a*b
}

function dividir (a,b){
    return a/b
}
const a = Number(prompt("Digite um número"))
const b = Number(prompt("Digite outro número"))

console.log(`A soma é ${soma(a,b)} \nA subtração é ${diminuir(a,b)} \nA multiplicação é ${multiplicar(a,b)} \nA divisão é ${dividir(a,b)}`)