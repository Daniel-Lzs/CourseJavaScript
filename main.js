let grade = parseFloat(prompt('Insira a sua grade: '))

if (grade >= 90 && grade <= 100){
    alert('Você tirou a grade A')
}
else if(grade >= 80 && grade <= 89){
    alert('Você tirou a grade B')
}
else if(grade >= 70 && grade <= 79){
    alert('Você tirou a grade C')
}
else if(grade >= 60 && grade <= 69){
    alert('Você tirou a grade D')
}
else if (grade > 100 || grade < 0){
    alert('A nota inserida é inválida')
}
else{
    alert('Você tirou a nota F')
}
