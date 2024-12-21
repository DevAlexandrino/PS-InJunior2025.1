let number = parseInt(prompt("Digite um numero inteiro"))
if (isNaN(number)){
    alert("Erro, veririfique se o valor digitado é um numero e tente novamente")
} else {
    let result = ''
    if (number % 3 == 0){
        result += 'Fizz'
    }
    if (number % 5 == 0){
        result += 'Buzz'
    }
    console.log(result)
}

/* Fiz essa versão mas pensei que teria problemas caso fosse solicitado
   para incrementar mais algumas condições pois o codigo ficaria muito grande, 
    mas ai fiz a versão acima que apenas checa os valores independentes e 
    concatena na string.

if (number % 3 == 0 ){
        if (number % 5 == 0){
            console.log("FizzBuzz")
        } else {
            console.log("Fizz")
        }
    } else if (number % 5 == 0){
        console.log("Buzz")
    } 
*/
