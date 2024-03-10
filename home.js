let x = document.getElementById('menu');
let y = document.querySelector('.menu-btn')
let z = document.querySelector('.closebtn')

function openbtn(){
    x.style.display = "block"
    y.style.display = "none"
    z.style.display = "block"
}

function closebtn(){
    x.style.display = "none"
    y.style.display = "block"
    z.style.display = "none"
}