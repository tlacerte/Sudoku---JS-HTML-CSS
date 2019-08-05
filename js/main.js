/*----- constants -----*/

/*----- app's state (variables) -----*/
let field = [];

/*----- cached element references -----*/

/*----- event listeners -----*/

/*----- functions -----*/

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
			input.addEventListener('input', updateFieldsLeft);
			td.appendChild(input);
			tr.appendChild(td);
		}
		document.getElementById('sudoku-table').appendChild(tr);
	}
}
function fillField() {
	field = [];
	for (let y = 0; y < 9; y++) {
		field[y] = [];
		for (let x = 0; x < 9; x++) {
			field[y][x] = 0;
		}
	}
	console.log(field);
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

