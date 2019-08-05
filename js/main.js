/*----- constants -----*/

/*----- app's state (variables) -----*/
// var sudoku = [
//     [null, null, null, null, null, null, null, null, null],
//     [null, null, null, null, null, null, null, null, null],
//     [null, null, null, null, null, null, null, null, null],
//     [null, null, null, null, null, null, null, null, null],
//     [null, null, null, null, null, null, null, null, null],
//     [null, null, null, null, null, null, null, null, null],
//     [null, null, null, null, null, null, null, null, null],
//     [null, null, null, null, null, null, null, null, null],
//     [null, null, null, null, null, null, null, null, null],
//   ];
  
/*----- cached element references -----*/
// const container = document.querySelector(".container");

/*----- event listeners -----*/

/*----- functions -----*/
// init();

// function init(){
//   sudoku.forEach(function(row, ridx){
//     row.forEach(function(cell, cidx){
//         let newDivs = document.createElement('div');
//         newDivs.setAttribute('class', 'cell');
//         container.appendChild(newDivs);
//         newDivs.innerHTML = "<input></input";
//     })
//   })
// }


// write your code below
let board = [];

function buildBoard() {
	for (let row = 1; row <= 9; row++) {
		let tr = document.createElement('tr');
		tr.id = 'row' + row;
	for (let col = 1; col <= 9; col++) {
		let td = document.createElement('td');
			td.id = 'col' + col;
			let input = document.createElement('input');
			input.type = 'text';
			input.maxLength = 1;
			input.addEventListener('keydown', checkKeyDown);
			input.addEventListener('input', updateFieldsLeft);
			td.appendChild(input);
			tr.appendChild(td);
		}
	document.getElementById('sudoku-table').appendChild(tr);
	}
}

function fillBoard() {
	board = [];
	for (let y = 0; y < 9; y++) {
	    field[y] = [];
	    for (let x = 0; x < 9; x++) {
		    field[y][x] = 0;
		}
    }
    console.log(board);
}