function createSquareGrid(dimension) {
    //grab grid-container
    let gridContainer = document.getElementById('grid-container');


    for(let count = 0; count < dimension*dimension; count ++){
        let newDiv = document.createElement('div');
        newDiv.classList.add('grid-block');
        gridContainer.appendChild(newDiv);
    }


}


createSquareGrid(16);