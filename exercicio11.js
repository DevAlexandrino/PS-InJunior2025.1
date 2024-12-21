let arraylength = parseInt(Number(prompt("Quantos numeros deseja inserir?")))
let numbers = []
let crecentNumbers = 0

while (true){
    if (isNaN(arraylength)){
        console.log("Verifique o valor inserido e tente novamente")
        break;
    }
    for (let i = 0; i < arraylength; i++){
        numbers.push(prompt(`Digite o ${i + 1}º numero`))
    }
        
    for (let i = 0; i <= numbers.length - 1; i++){
        if (numbers[i] < numbers[i+1]){
            crecentNumbers += 1
        }
    }
        
    console.log(`Numeros em ordem crescente ${crecentNumbers}`)
    break
}