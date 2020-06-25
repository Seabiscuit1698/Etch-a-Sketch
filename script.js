
const container = document.querySelector('#container');
const body = document.querySelector('body');
const sizeBtn = document.querySelector('#setSizeBtn');
const colorBtn = document.querySelector('#setColorBtn');
const randColBtn = document.querySelector('#randomColorBtn');

let clicked = false;
let color = "#FFF";

function createGrid(gridSize) {
    container.innerHTML = "";
    container.setAttribute('style', `grid-template-columns: repeat(${gridSize}, auto);`);
    let num = gridSize * gridSize;
    for (let i = 0; i < num; i++) {
        const gridSquare = document.createElement("div");
        gridSquare.setAttribute("class", "gridSquare");
        gridSquare.addEventListener("mouseover", setColor);
        container.appendChild(gridSquare);
    }
}

function setSize() {
    let sizeInput = prompt("How many squares per side?");
    createGrid(sizeInput);
}

function setClickedTrue() {
    clicked = true;
}

function setClickedFalse() {
    clicked = false;
}

function setColor() {
    if (clicked) this.setAttribute("style", `background-color: ${color};`);
}

function chooseColor() {
    color = prompt("Set color as hex code, like #000000.", '#000');
}

function chooseRandomColor() {
    let red;
    let green;
    let blue;
    let colorValues = new Array(256);
    for (let i = 0; i < colorValues.length; i++) {
        colorValues[i] = i;
    }
    red = colorValues[Math.floor(Math.random() * colorValues.length)];
    green = colorValues[Math.floor(Math.random() * colorValues.length)];
    blue = colorValues[Math.floor(Math.random() * colorValues.length)];
    if (red == 0 && green == 0 && blue == 0) {
        color = rgba(45, 45, 45, 1);
    } else {
        color = `rgba(${red}, ${green}, ${blue}, 1)`;
    }
}

container.addEventListener("mousedown", setClickedTrue);
container.addEventListener("mouseup", setClickedFalse);
createGrid(16);

