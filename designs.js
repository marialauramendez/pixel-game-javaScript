//Pick Color
let colorSelection = document.getElementById('colorPicker');

//Pick Size
let canvas = document.getElementById('pixelCanvas');
function makeGrid(){
    // creating rows
    let _N_ = document.getElementById('inputHeight').value;
    for(let i = 1; i<= _N_; i++){
        let rows = document.createElement('tr');
        canvas.appendChild(rows);
        // creating cells
        let _M_ = document.getElementById('inputWidth').value;
        for(let j= 1; j<=_M_; j++){
            let cells = document.createElement('td');
            rows.appendChild(cells);
            // adding color to the cells
            cells.addEventListener('click',function(){
                cells.style.backgroundColor = colorSelection.value;
            })
        }
    }
}
// When size is submitted by the user, call makeGrid()
// getting element sizePicker and assigment to submitQuery variable
let submitQuery = document.getElementById('sizePicker');
//To submitQuery I add onSubmit, a global event handeler, the event fires when is submitted
submitQuery.onsubmit= function(grid){
    //I use preventDefault to prevent the browser from executing the default action
    grid.preventDefault();
    clearColor();
    makeGrid();
};

// Creating Function that when is called will clear the color in cells
function clearColor(){
    //While Loop will loops through the code as long as the canvas cells meet the condition(has color value),
         canvas.innerHTML = '';
}
