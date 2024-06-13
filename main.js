let numberList = document.getElementById('numberlist')
let fruits = ['Pêra', 'Uva', 'Maçã', 'Laranja', 'Melancia']

for (i = 0; i <= 4; i++){
    let listItem = document.createElement('li')
    // listItem.textContent = 'Item ' + i
    listItem.textContent = fruits[i]
    numberList.appendChild(listItem)
}


