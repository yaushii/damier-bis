var btnsolver = document.querySelector("#btn-solver");
var maindamier = document.querySelector("#damier");
var inputSize = document.querySelector("#size");

btnsolver.addEventListener("click", solve);

function solve() {
    console.log("nimporte");
    maindamier.innerHTML = "";
    //genere les lignes
    for (var i = 0; i < inputSize.value; i++) {
        var row = document.createElement("div");
        row.className = "row"
        // genere les colonnes
        for (var j = 0; j <inputSize.value; j++) {
            var cell = document.createElement("div");
            cell.className = "cell"
            row.appendChild(cell);
        }
        maindamier.appendChild(row);
    }
}























/*const EVEN_CLASS = 'black';
const ODD_CLASS = 'white';
const grid = document.querySelector('main');
const form = document.querySelector('form');
const rowInput = document.querySelector('#row-input');
const colInput = document.querySelector('#col-input');

function makeCell(isEven){
  let cell = document.createElement('div');
  cell.classList.add( isEven ? EVEN_CLASS : ODD_CLASS)
  grid.appendChild(cell);  
}

function makeGrid(event){
  event.preventDefault();
  const MAX_ROWS = rowInput.value;
  const MAX_COLUMNS = colInput.value ;
  
  if (!MAX_ROWS || !MAX_COLUMNS){
    alert('Please specify a number of rows AND columns.')
    return;
  }
  
  grid.innerHTML = '';
  grid.style.setProperty('--col-size', MAX_COLUMNS);
  grid.style.setProperty('--row-size', MAX_ROWS);

  for (let i = 0; i < MAX_ROWS; i++){
	  for (let j = 0; j < MAX_COLUMNS; j++){
    	makeCell((i+j) % 2 === 0);
    }
  }
}

form.addEventListener('submit', makeGrid);*/