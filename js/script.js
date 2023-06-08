let leftArrow = document.getElementById("leftArrow");
let rightArrow = document.getElementById("rightArrow");
let contenedor = document.getElementById("contenedor");
let cordenadasX = 0;

rightArrow.addEventListener("click", moveLeft);
leftArrow.addEventListener("click", moveRigh);
// contenedor.addEventListener("dragstart", cordenadaInicial);








function moveLeft(){
    contenedor.style.transform = `translateX(${-50}%)`;
}

function moveRigh(){
    contenedor.style.transform = `translateX(${0}%)`;
}


