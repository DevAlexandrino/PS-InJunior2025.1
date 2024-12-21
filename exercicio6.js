function fibonacci(number){
    if (number == 0){
        return 0
    } else if (number == 1){
        return 1
    } else {
        return fibonacci(number - 1) + fibonacci(number - 2)
    }
}

let number = parseInt(prompt("Digite um numero de termos que deseja ver da sequencia de fibonacci"))
if (isNaN(number) || number < 1){
    alert("Erro, veririfique se o valor digitado é um numero ou positivo e tente novamente")
}else {
    arrayFibonacci = []
    for (let i = 1; i <= number; i++){
        arrayFibonacci.push(fibonacci(i))
    }
    for (let i = 0; i < arrayFibonacci.length; i++){
        console.log(`Termo ${i+1}: ${arrayFibonacci[i]}`)
    }
}
    