let action = 's'
while ( action == 's'){
    let num = prompt("Digite um numero inteiro positivo")
    if (num < 1){
        alert("Erro, veririfique se o numero é inteiro e positivo e tente novamente")
    } else {
        let result = 1
        for (let i = 1; i <= num; i++){
            result *= i
        }
        console.log(`O fatorial de ${num} é igual a ${result}`)
        action = prompt("Deseja calcular outro fatorial? (s/n)")
        action = action.toLowerCase()
        if (action != 's' && action != 'n'){
            alert("Opção inválida, tente novamente")
            action = prompt("Deseja calcular outro fatorial? (s/n)")
            action = action.toLowerCase()
        }
    }
}