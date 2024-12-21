let arr = [1987, 2024, 1467, 2013, 1999, 2000, 1979]
let maiorEMenorArray = verificarIdades(arr)

function verificarIdades(arr){
    let temp = []
    let ano = prompt("Digite o ano atual")
    for (let i = 0; i < arr.length; i++){
        if (ano - arr[i] >= 18){
            temp.push("maior")
        }else {
            temp.push("menor")
        }
    }
    
    for (let i = 0; i < arr.length; i++){
        if (temp[i] == "maior"){
            console.log(`Pessoa ${i+1}: Maior de idade`)
        } else {
            console.log(`Pessoa ${i+1}: Menor de idade`)
        }
    }
    return temp
}