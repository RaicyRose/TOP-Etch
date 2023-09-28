//List of Variables, Lets, and Constants

let gridWidth = 16;

// List of Event Listeners

document.getElementById("promptPlayer").addEventListener("click",checkGridWidth);

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

    console.log(gridWidth);

    while (isNaN(gridWidth) || gridWidth > 100) {
        gridWidth = prompt("Set canvas height & its equal width.", "Add a number under 100");
    }
    updateCanvasSizeText();
}

    // Normal Mode functions


    // Colorful Mode functions


    // Transparency Mode functions


    // Function on Initialize Page

    updateCanvasSizeText();