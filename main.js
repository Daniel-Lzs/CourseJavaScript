let age = parseInt(prompt('Insira sua idade: '))
let voterCard = prompt('Você tem um título de eleitor (sim/nao)').trim().charAt(0).toLowerCase()
let minAge = 18 
if (age >= minAge && voterCard == 's'){
    alert('Pode votar')
}
else if(age >= minAge && voterCard == 'n'){
    alert('Precisa de título')
}
else{
    alert('Não pode votar')
}
