const container = document.querySelector(".container");

const board = [
  [null, null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null, null],
];

function render(){
  board.forEach(function(row, ridx){
    row.forEach(function(cell, cidx){
        let newDiv = document.createElement('div');
        newDiv.setAttribute('class', 'cell');
        container.appendChild(newDiv);
    })
  })
}

render();