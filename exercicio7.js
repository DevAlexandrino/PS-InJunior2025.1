let string = prompt("Digite uma palavra")
string = string.toLowerCase()
let array = string.split(" ")
let semEspaços = ''

for(let i = 0; i < array.length; i++){
    semEspaços += array[i]
}

let igual = true
for (let i = 0; i < semEspaços.length; i++){
    if (semEspaços[i] != semEspaços[semEspaços.length - 1 - i]){
        igual = false
    }
}

if (igual == true){
    console.log("Palindromo")
} else {
    console.log("Nao é palindromo")
}