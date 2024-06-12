let valorConta = parseFloat(prompt('Digite o valor da conta: '))
let gorjeta = parseFloat(prompt('Digite o valor da gorjeta: '))

// gorjeta = (valorConta * gorjeta) /100
// let valorTotal = valorConta + gorjeta

let valorTotal = valorConta + (valorConta * gorjeta)/100

alert('O valor total da gorjeta é de $: ' + valorTotal)
