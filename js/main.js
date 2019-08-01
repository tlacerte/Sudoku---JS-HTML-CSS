/*----- constants -----*/

var board = [
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
/*----- app's state (variables) -----*/

/*----- cached element references -----*/
const container = document.querySelector(".container");

/*----- event listeners -----*/

/*----- functions -----*/
init();

function init(){
  board.forEach(function(row, ridx){
    row.forEach(function(cell, cidx){
        let newDiv = document.createElement('div');
        newDiv.setAttribute('class', 'cell');
        container.appendChild(newDiv);
        newDiv.innerHTML = "<input></input";
    })
  })
}



