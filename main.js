function changeBackgroundColor(){
    let colors = ['red', 'green', 'yellow', 'orange', 'pink']
    randomColor = colors[Math.floor(Math.random() * colors.length)]
    document.body.style.backgroundColor = randomColor
    console.log(Math.floor(Math.random() * colors.length))
}