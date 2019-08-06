const solution1 = [
    [1, 5, 2, 4, 8, 9, 3, 7, 6],
    [7, 3, 9, 2, 5, 6, 8, 4, 1],
    [4, 6, 8, 3, 7, 1, 2, 9, 5],
    [3, 8, 7, 1, 2, 4, 6, 5, 9],
    [5, 9, 1, 7, 6, 3, 4, 2, 8],
    [2, 4, 6, 8, 9, 5, 7, 1, 3],
    [9, 1, 4, 6, 3, 7, 5, 8, 2],
    [6, 2, 5, 9, 4, 8, 1, 3, 7],
    [8, 7, 3, 5, 1, 2, 9, 6, 4]
]

var board1 = [
    [1, null, null, 4, 8, null, null, 7, 6],
    [7, null, 9, 2, null, 6, null, null, 1],
    [null, 6, null, null, null, 1, 2, 9, null],
    [3, null, 7, null, 2, null, null, 5, 9],
    [null, 9, null, 7, null, null, null, null, 8],
    [null, 4, null, 8, null, 5, null, 1, null],
    [9, null, 4, null, null, 7, null, 8, 2],
    [6, null, 5, null, null, 8, 1, null, 7],
    [null, 7, null, null, 1, null, 9, null, 4]
]

const solution2 = [
    [7, 4, 9, 8, 5, 1, 3, 6, 2],
    [5, 2, 1, 6, 7, 3, 4, 8, 9],
    [6, 8, 3, 9, 2, 4, 1, 7, 5],
    [2, 1, 5, 7, 8, 9, 6, 4, 3],
    [3, 6, 7, 1, 4, 2, 5, 9, 8],
    [8, 9, 4, 3, 6, 5, 7, 2, 1],
    [4, 3, 6, 2, 1, 8, 9, 5, 7],
    [9, 5, 2, 4, 3, 7, 8, 1, 6],
    [1, 7, 8, 5, 9, 6, 2, 3, 4]
]

var board2 = [
    [null, null, 9, 8, null, 1, null, null, 2],
    [5, null, null, 6, 7, null, 4, null, 9],
    [6, null, null, null, 2, null, null, null, 5],
    [null, 1, null, null, null, null, 6, null, null],
    [null, 6, null, 1, 4, null, 5, null, 8],
    [8, 9, null, 3, null, 5, null, 2, null],
    [4, null, null, 2, null, 8, 9, null, 7],
    [null, 5, 2, null, 3, 7, 8, null, 6],
    [1, null, null, 5, null, 6, null, 3, null]
]

const solution3 = [
    [8, 9, 2, 5, 7, 3, 6, 1, 4],
    [7, 4, 6, 9, 2, 1, 8, 3, 5],
    [3, 1, 5, 4, 6, 8, 9, 7, 2],
    [4, 5, 7, 6, 8, 2, 3, 9, 1],
    [9, 6, 8, 1, 3, 5, 2, 4, 7],
    [1, 2, 3, 7, 4, 9, 5, 6, 8],
    [2, 7, 1, 8, 9, 6, 4, 5, 3],
    [5, 3, 9, 2, 1, 4, 7, 8, 6],
    [6, 8, 4, 3, 5, 7, 1, 2, 9]
]

var board3 = []

const container = document.querySelector(".container");

init();

function init(){
    createField();
}

function createField(){
  solution1.forEach(function(row, ridx){
    row.forEach(function(cell, cidx){
        let newDiv = document.createElement('div');
        newDiv.setAttribute('class', 'cell');
        container.appendChild(newDiv);
        //let halfBoard = solution1[ridx][cidx][Math.floor(Math.random()*solution1.length*4)];
        newDiv.innerHTML = board1[ridx][cidx];
        if (board1[ridx][cidx] === null) {
            newDiv.innerHTML = "<input id='guess'></input>";
        }
    })
  })
}

function checkInput(num){
    let guess = parseFloat(document.getElementById('guess').value);
    board1.forEach(function(){
        if (board1.indexOf(guess) === solution1.includes(guess)){
            console.log(true);
        } else return false;
    })
}
