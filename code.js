let j = 0;
let N = 100;
const verde = document.querySelector('#verde2');
const rojo = document.querySelector('#rojo2');
const amarillo = document.querySelector('#amarillo2');
const circles = [rojo, amarillo, verde];
const colors = ["green", "yellow", "red"];
const blackColor = "black";
let COLORES = ['ROJO', 'AMARILLO', 'VERDE']
const semaforoImg = document.querySelector('#semaforo-img');

function semaforoLuz() {
    /**La funcion semaforoLuz selecciona uno de los 3 valores al usar pop, cambiando de imagen en ciclo cada vez que se ejecuta. creando la ilusión de un semaforo. */
    const color = COLORES.pop()
    console.log(color)
    if (!COLORES.length)
        COLORES = ['ROJO', 'AMARILLO', 'VERDE']
    semaforoImg.src = "img/" + color + ".png"
    return color
}
function cambiaColor() {
    /**La función cambio de color deja los tres circulos de color negro y selecciona solo un cambio de color para cada circulo. 
     * Dando la ilusión de un semaforo cuando se hace click en el boton */
    if(j > 2){
        j = 0;
    }
    for (let k = 0; k < circles.length; k++) {
        circles[k].style.backgroundColor = blackColor;
        circles[k].style.color = blackColor;
    }

    switch (j) {
        case 0:
            rojo.style.backgroundColor = colors[2];
            rojo.style.color = colors[2];
            console.log(colors[2]);
            break;
        case 1:
            amarillo.style.backgroundColor = colors[1];
            amarillo.style.color = colors[1];
            console.log(colors[1]);
            break;
        case 2:
            verde.style.backgroundColor = colors[0];
            verde.style.color = colors[0];
            console.log(colors[0]);
            break;
    }
    j++;
    console.log(j);

}


const intervalID = setInterval(semaforoLuz, 3500)
