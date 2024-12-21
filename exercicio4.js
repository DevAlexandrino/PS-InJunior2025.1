let real = prompt("Digite o valor em reais")
let euro = real / 6.10
let dolar = real / 5.70

console.log(Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL'}).format(real))
console.log(Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'EUR'}).format(euro))
console.log(Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'USD'}).format(dolar))