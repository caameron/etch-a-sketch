function createSquareGrid(dimension) {
    //grab grid-container
    let gridContainer = document.getElementById('grid-container');

    let widthAndHeight = 500 / dimension;
    console.log(widthAndHeight);
    for(let count = 0; count < dimension*dimension; count ++){
        let newDiv = document.createElement('div');
        newDiv.classList.add('grid-block');
        newDiv.style.width = widthAndHeight + 'px';
        newDiv.style.height = widthAndHeight + 'px';
        newDiv.addEventListener('mouseover', changeBackgroundColor);
        newDiv.addEventListener('mousedown', changeBackgroundColor);
        // newDiv.addEventListener('mouseover', (event) => {changeBackgroundColor(event)});
        // newDiv.addEventListener('mousedown', (event) => {changeBackgroundColor(event)});
        gridContainer.appendChild(newDiv);
    }

}

let  mousedown = false;
document.body.onmousedown = () => (mousedown = true)
document.body.onmouseup = () => (mousedown = false)

function clearGrid() {
    let gridContainer = document.getElementById('grid-container');
    gridContainer.innerHTML = '';
}

function changeBackgroundColor(event){
    if(event.type === 'mouseover' && mousedown === true){
        event.target.style.backgroundColor = 'red';
    }
}

let gridSizeSlider = document.getElementById("gridSizeSlider");
let gridSizeText = document.getElementById("gridSizeText");
gridSizeSlider.oninput = (e) => {
    gridSizeText.innerHTML = e.target.value + "x" + e.target.value;
}

gridSizeSlider.onchange = (e) => {
    clearGrid();
    createSquareGrid(e.target.value);
}

createSquareGrid(16);