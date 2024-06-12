let nota = parseFloat(prompt('Insira a sua nota: '))

if (nota >= 90 && nota <= 100){
    alert('Você tirou a nota A')
}
else if(nota >= 80 && nota <= 89){
    alert('Você tirou a nota B')
}
else if(nota >= 70 && nota <= 79){
    alert('Você tirou a nota C')
}
else if(nota >= 60 && nota <= 69){
    alert('Você tirou a nota D')
}
else if (nota > 100 || nota < 0){
    alert('A nota inserida é inválida')
}
else{
    alert('Você tirou a nota F')
}
