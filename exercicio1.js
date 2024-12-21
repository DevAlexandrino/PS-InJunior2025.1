let a = prompt("Digite o valor de A")
let b = prompt("Digite o valor de B")
let c = prompt("Digite o valor de C")

let delta = (b * b) - (4 * a * c)
if (delta < 0) {
    console.log("Não possui razies reais")
} else if(delta == 0){
    let raiz = (-b) / (2 * a)
    console.log(`Possui apenas uma raiz real igual a ${raiz}`)
} else{
    let x1 = ((-b) + delta ** (1/2)) / (2 * a)
    let x2 = ((-b) - delta ** (1/2)) / (2 * a)
    console.log(`Possui duas raizes reais, r1 = ${x1} e r2 = ${x2}`)
}