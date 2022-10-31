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
        newDiv.addEventListener('mouseover', (event) => {changeBackgroundColor(event)});
        gridContainer.appendChild(newDiv);
    }

}

function changeBackgroundColor(event){
    // console.log(this);
    event.target.style.backgroundColor = 'red';
}


createSquareGrid(16);