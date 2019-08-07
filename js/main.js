//field - the whole sudoku playing board
let field = [];

//all the functions that will happen on load 
init();

function init() {
    buildField();
    fillField();
    randomize();
}
//creating the table to insert into html
function buildField() {
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
			td.appendChild(input);
			tr.appendChild(td);
		}
		document.getElementById('sudoku-table').appendChild(tr);
	}
}
//filling the 9x9 gameboard 
function fillField() {
	field = [];
	for (let y = 0; y < 9; y++) {
		field[y] = [];
		for (let x = 0; x < 9; x++) {
			field[y][x] = 0;
		}
	}
	//console.log(field);
}       
            
//functions for checking the solution of sudoku
function validateRow(row) {
    let contains = [];
    for (let x = 0; x < row.length; x++) {
        if (contains.indexOf(row[x]) > -1) {
            // Already exists
            return false;
        } else {
            // If it's not empty
            if (row[x] !== 0) {
                // Not exists
                contains.push(row[x]);
            }
        }
    }
    return true;
}

function validateCol(x, rows) {
    let contains = [];
    for (let y = 0; y < rows.length; y++) {
        if (contains.indexOf(rows[y][x]) > -1) {
            // Already exists
            return false;
        } else {
            // If it's not empty
            if (rows[y][x] !== 0) {
                // Not exists
                contains.push(rows[y][x]);
            }
        }
    }
    return true;
}

function validateBlock(blockNum, blockRow) {
    let block = [];
    for (let y = 0; y < 3; y++) {
        let row = [];
        row[0] = blockRow[y][blockNum * 3];
        row[1] = blockRow[y][blockNum * 3 + 1];
        row[2] = blockRow[y][blockNum * 3 + 2];
        block.push(row);
    }
    let contains = [];
    for (let y = 0; y < block.length; y++) {
        for (let x = 0; x < block[y].length; x++) {
            if (contains.indexOf(block[y][x]) > -1) {
                // Already exists
                return false;
            } else {
                // If it's not empty
                if (block[y][x] !== 0) {
                    // Not exists
                    contains.push(block[y][x]);
                }
            }
        }
    }
    return true;
}

function validateField() {
    // Validate rows
    for (let y = 0; y < field.length; y++) {
        if (!validateRow(field[y])) {
            return false;
        }
    }
    // Validate cols
    for (let x = 0; x < field[0].length; x++) {
        if (!validateCol(x, field)) {
            return false;
        }
    }
    // Validate blocks
    for (let blockY = 0; blockY < 3; blockY++) {
        let blockRow = [
            field[blockY * 3],
            field[blockY * 3 + 1],
            field[blockY * 3 + 2]
        ];
        for (let blockX = 0; blockX < 3; blockX++) {
            if (!validateBlock(blockX, blockRow)) {
                return false;
            }
        }
    }
    return true;
}

//functions to build the whole board
function getField() {
    for (let row = 1; row <= 9; row++) {
        for (let col = 1; col <= 9; col++) {
            let currentValue = parseInt(document.querySelectorAll('#row' + row + ' #col' + col + ' input')[0].value);
            if (!isNaN(currentValue)) {
                field[row - 1][col - 1] = currentValue;
            } else {
                field[row - 1][col - 1] = 0;
            }
        }
    }
}

function updateField() {
    for (let row = 1; row <= 9; row++) {
        for (let col = 1; col <= 9; col++) {
            if (field[row - 1][col - 1] !== 0) {
                document.querySelectorAll('#row' + row + ' #col' + col + ' input')[0].value = field[row - 1][col - 1];
            } else {
                document.querySelectorAll('#row' + row + ' #col' + col + ' input')[0].value = '';
            }
        }
    }
}

//make sure the input is 1-9
function checkKeyDown(event) {
    if (event.key !== 'Backspace' && !event.key.match(/^[1-9]$/g))
        event.preventDefault();
}

//create a random board that is solvable 
function randomize() {
    fillField();
    updateField();
    for (let y = 0; y < field.length; y++) {
        for (let x = 0; x < field[y].length; x++) {
            if (Math.floor(Math.random()) === 0) {
                field[y][x] = Math.floor((Math.random() * 9) + 1);
                let valid = validateField();
                if (!valid) {
                    field[y][x] = 0;
                }
            }
        }
    }
    updateField();
}

//click new game to randomize another game board
document.getElementById('randomize').addEventListener('click', randomize);

//validate the board/make sure that user is on the right track
function validate() {
    let button = document.getElementById('validate');
    getField();
    let valid = validateField();
    if (valid) {
        button.classList.add('valid');
        button.innerHTML = '✔';
        button.style.backgroundColor = 'limegreen';
    } else {
        button.classList.add('invalid');
        button.innerHTML = '✘';
        button.style.backgroundColor = 'red';
    }
    setTimeout(function () {
        button.classList.remove('valid');
        button.classList.remove('invalid');
        button.innerHTML = 'Validate';
        button.style.backgroundColor = 'white';
    }, 1000);
}

//click validate to see if you are on the right track in the game
document.getElementById('validate').addEventListener('click', validate);