/*
Input: no input
Output: no output
Behavior: change current scope background color to the color picked from colorPicker
*/
function changeColor() {
    const color = document.getElementById("colorPicker").value;
    this.style.background = color;
}



/*
Input: no input
Output: no output
Behavior : It creates a table with width and height from input. Each cell contains 
            onclick event handler that calls changeColor() function.
            After the event, the behavior stays without going to default.
*/
function makeGrid() {
    const gridHeight = document.getElementById("input_height").value;
    const gridWidth = document.getElementById("input_width").value;
    const pixelCanvas = document.getElementById("pixel_canvas"); 
    pixelCanvas.innerText=""; // empty table   
    
    for (let h=0; h<gridHeight; ++h) {
        const row = pixelCanvas.insertRow(-1); // insert new row at the last position
        for (let w=0; w<gridWidth; ++w) {
            const cell = row.insertCell(-1); //insert new cell at the last position
            cell.onclick = changeColor;
        }
    }
    event.preventDefault();
}