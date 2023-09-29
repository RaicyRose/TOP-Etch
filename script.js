//List of Variables, Lets, and Constants, as well as Properties

let gridWidth = 16;

// List of Event Listeners

document.getElementById("promptPlayer").addEventListener("click", checkGridWidth);
document.getElementById("resetCanvas").addEventListener("click", cleanPage);

// General functions
function updateCanvasSizeText() {
    let canvasSizeText = `${gridWidth} x ${gridWidth}`;
    document.getElementById("canvasSize").innerHTML = canvasSizeText;
}

function promptPlayerCanvasSize() {
    gridWidth = prompt("Set canvas height & equal width", "Highest number being 100");
    return gridWidth;
}

function checkGridWidth() {
    promptPlayerCanvasSize();
    while (isNaN(gridWidth) || gridWidth > 100) {
        gridWidth = prompt("Set canvas height & its equal width.", "Add a number under 100");
    }
    updateCanvasSizeText();
    updateGridSize();
    createGridSquare();
}

function updateGridSize() {
    document.documentElement.style.setProperty('--columns', gridWidth)
    document.documentElement.style.setProperty('--rows', gridWidth);
}

function clearGrid() {
    const container = document.getElementById('etchContainer');
    while (container.firstChild) {
      container.removeChild(container.firstChild);
    }
  }

function createGridSquare() {
    clearGrid();
    const container = document.getElementById('etchContainer');
    numberOfDivs = gridWidth * gridWidth;
    for (let i = 0; i < numberOfDivs; i++) {
        const div = document.createElement('div');
        div.classList.add('divEtchSquare');
        container.appendChild(div);
    }
}

function cleanPage() {
    divEtches.forEach((divEtchSquare) => {
        console.log("Cleaning page...");
            divEtchSquare.classList.remove("normalMode");
      });
}

// Function on Initialize Page

updateCanvasSizeText();
updateGridSize();
createGridSquare();

// Normal Mode functions
const divEtches = document.querySelectorAll(".divEtchSquare");

divEtches.forEach((divEtchSquare) => {
    divEtchSquare.addEventListener("mouseenter", () => {
        if (!divEtchSquare.classList.contains("normalMode")) {
            divEtchSquare.classList.add("normalMode");
        }
    });
});
    
// Colorful Mode functions


// Transparency Mode functions




