let array = [1,2,3,4,5,6,1,2,3,4,5]

function encontrarElementoUnico(array){
   let arrayOrdenado = array.slice().sort()
   console.log(arrayOrdenado)

    for(let i = 0; i < arrayOrdenado.length; i+=2){

        if(arrayOrdenado[i] == arrayOrdenado[i+1]){
            continue
        } else{
            return arrayOrdenado[i]
        }
    }
    return "Valor nao encontrado"
}    

let number = encontrarElementoUnico(array)
console.log(number)