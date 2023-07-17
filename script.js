let blackColor = document.getElementById("black");
let blueColor = document.getElementById("blue");
let pinkColor = document.getElementById("pink");
let purbleColor = document.getElementById("purble");
let redColor = document.getElementById("red");
let img = document.getElementById("img");
let body = document.body;

// Função para suavizar a mudança de cor de fundo e imagem
function changeColor(background, src){
    img.src = src;
    body.style.transition = "background-color 0.5s";
    body.style.background = background;
    img.classList.add("vibrate");
    setTimeout(() => {
        img.classList.remove("vibrate");
    }, 1000)
}

// Evento para a cor preta
blackColor.addEventListener("click", () => {
    changeColor("#323339", "./img/black.png");
})

// Evento para a cor azul
blueColor.addEventListener("click", () => {
    changeColor("#2eabf3", "./img/blue.png");
})

// Evento para cor pink
pinkColor.addEventListener("click", () => {
    changeColor("#E5429D", "./img/pink.png");
})

// Evento para cor purple
purbleColor.addEventListener("click", () => {
    changeColor("#4D2F9D", "./img/purple.png");
})

// Evento para cor red
redColor.addEventListener("click", () =>{
    changeColor("#A61B4E", "./img/red.png");
})
