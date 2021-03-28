// HTML Elements
const statusDiv = document.querySelector('.status');
const resetDiv = document.querySelector('.reset');
const cellDivs = document.querySelectorAll('.grid-cell');

//game variable
let isGameLive = true;
let xIsNext = true;

//Event Handelers
const handleReset = (e) => {
    console.log(e);
}

const handelCellClick = (e) => {
    const classList = e.target.classList;
    const location = classList[1];

    if(classList[2] === 'x' || classList[2] === 'o'){
        return;
    }
    
    if(xIsNext) { 
        classList.add('x');
        xIsNext = !xIsNext;
    }else {
        classList.add('o');
        xIsNext = !xIsNext;
    }

}
//Event Listners
resetDiv.addEventListener('click', handleReset);

for(const cellDiv of cellDivs){
    cellDiv.addEventListener('click', handelCellClick);

}