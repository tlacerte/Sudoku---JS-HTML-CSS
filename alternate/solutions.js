//-----------board answers----------------
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
    [1, null, null, 4, 8, 9, 3, 7, 6],
    [7, 3, 9, 2, 5, 6, 8, 4, 1],
    [4, 6, 8, 3, 7, null, 2, 9, 5],
    [3, 8, 7, 1, 2, 4, 6, 5, 9],
    [5, null, 1, 7, 6, 3, 4, 2, 8],
    [2, 4, 6, 8, 9, 5, 7, 1, 3],
    [9, 1, 4, 6, 3, 7, 5, 8, 2],
    [6, 2, 5, 9, 4, 8, 1, null, 7],
    [8, 7, 3, null, 1, 2, 9, 6, 4]
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
    [7, 4, 9, 8, null, 1, null, null, 2],
    [5, null, 1, 6, 7, null, 4, null, 9],
    [6, null, null, null, 2, 4, null, 7, 5],
    [null, 1, 5, 7, null, null, 6, null, null],
    [null, 6, 7, 1, 4, null, 5, null, 8],
    [8, 9, null, 3, null, 5, null, 2, null],
    [4, 3, null, 2, null, 8, 9, null, 7],
    [null, 5, 2, null, 3, 7, 8, 1, 6],
    [1, null, 8, 5, null, 6, 2, 3, null]
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

var board3 = [
    [null, 9, null, null, 7, 3, null, 1, 4],
    [7, 4, null, null, null, 1, 8, null, 5],
    [null, 1, null, 4, null, 8, null, 7, null],
    [4, 5, null, null, null, 2, null, 9, 1],
    [null, null, 8, null, 3, null, 2, null, 7],
    [1, null, 3, null, 4, null, null, 6, null],
    [2, null, null, null, 9, null, 4, null, 3],
    [null, 3, null, 2, null, 4, null, null, 6],
    [6, null, null, 3, null, 7, 1, 2, null]
]
//where the sudoku board is going to go
const container = document.querySelector(".container");

//only can enter numbers 1-9
function checkKeyDown(event) {
    if (event.key !== 'Backspace' && !event.key.match(/^[1-9]$/g))
        event.preventDefault();
}
//reload the page for a new game
function newGame(){
    document.location.reload()
}
//new game button
document.getElementById('newgame').addEventListener('click', newGame);

//------event listeners--------------
//event listener to check the input against the solution with functions handleKeyUp, checkInput and checkWinner
document.querySelector('.container').addEventListener('keyup', handleKeyUpL1, handleKeyUpL2, handleKeyUpL3)

//buttons

//level1 buttons
document.getElementById('level1').addEventListener('click', createFieldL1)
//solve button - to solve the whole board, uses solveField function
document.getElementById('solve1').addEventListener('click', solveFieldL1)

//level 2 buttons
document.getElementById('level2').addEventListener('click', createFieldL2)
document.getElementById('solve2').addEventListener('click', solveFieldL2)

//level 3 buttons
document.getElementById('level3').addEventListener('click', createFieldL3)
document.getElementById('solve3').addEventListener('click', solveFieldL3)

//------------functions------------------

//LEVEL ONE//
//LEVEL ONE//
//LEVEL ONE//
//build the whole game board
function createFieldL1(){
  solution1.forEach(function(row, ridx){
    row.forEach(function(cell, cidx){
        let newDiv = document.createElement('div');
        newDiv.setAttribute('class', 'cell');
        container.appendChild(newDiv);
        newDiv.innerHTML = board1[ridx][cidx];
        if (board1[ridx][cidx] === null) {
            newDiv.innerHTML = `<input type='text' data-answer=${solution1[ridx][cidx]} class='guesses'></input>`;
            newDiv.setAttribute('value', null)
            newDiv.addEventListener('keydown', checkKeyDown);
        }
    })
  })
}


//function for the keyup event listener 
function handleKeyUpL1(evt){
    checkWinnerL1(checkInputL1(evt));
}

//check if the input matches the solution board 
function checkInputL1(evt){
    let guessInput = evt.target
    let guess = evt.target.value;
    // console.log(guess)
    let answer = evt.target.getAttribute('data-answer');
    if (guess === answer) {
        //console.log(true);
        let correctAnswerEl = document.createElement('div');
        correctAnswerEl.setAttribute('class', 'newcell');
        correctAnswerEl.innerText = answer;
        console.log(correctAnswerEl)
        if (guessInput !== null){
            guessInput.parentNode.replaceChild(correctAnswerEl, guessInput);
        }
        return true;
    } else {
        return false;
    }
}

//check if all of the inputs are entered and changes board if won 
function checkWinnerL1(isSolved){ //@param -> boolean
    let inputAmount = document.querySelectorAll('input'); //returns a dom list
    console.log(inputAmount)
    if ((isSolved === true) && (inputAmount.length === 0)) {
        console.log('winner');
        container.style.color = 'green';
        let winnerHeadline = document.getElementById('headline');
        winnerHeadline.innerText = "You Win!";
    }
}

//function for the solve button to replace the board with the solution board
function solveFieldL1(){
    const solvedBoard = solution1.map(array => array.map(num => {
        let newDiv = document.createElement('div');
        newDiv.setAttribute('class', 'cell');
        newDiv.innerText = num;
        return newDiv
    })).flat()
    //console.log(solvedBoard)
    let oldDivs = document.querySelectorAll('.cell')
    //console.log(oldDivs)
    oldDivs.forEach((node, index) => {
        node.replaceWith(solvedBoard[index])
    })
}


//-----------------------------LEVEL 2 LEVEL 2 LEVEL 2

//LEVEL 2//
//LEVEL 2//


//build the whole game board
function createFieldL2(){
    solution2.forEach(function(row, ridx){
      row.forEach(function(cell, cidx){
          let newDiv = document.createElement('div');
          newDiv.setAttribute('class', 'cell');
          container.appendChild(newDiv);
          newDiv.innerHTML = board2[ridx][cidx];
          if (board2[ridx][cidx] === null) {
              newDiv.innerHTML = `<input type='text' data-answer=${solution2[ridx][cidx]} class='guesses'></input>`;
              newDiv.setAttribute('value', null)
              newDiv.addEventListener('keydown', checkKeyDown);
          }
      })
    })
  }
  
  
  //function for the keyup event listener 
  function handleKeyUpL2(evt){
      checkWinnerL2(checkInputL2(evt));
  }
  
  //check if the input matches the solution board 
  function checkInputL2(evt){
      let guessInput = evt.target
      let guess = evt.target.value;
      // console.log(guess)
      let answer = evt.target.getAttribute('data-answer');
      if (guess === answer) {
          //console.log(true);
          let correctAnswerEl = document.createElement('div');
          correctAnswerEl.setAttribute('class', 'newcell');
          correctAnswerEl.innerText = answer;
          console.log(correctAnswerEl)
          if (guessInput !== null){
              guessInput.parentNode.replaceChild(correctAnswerEl, guessInput);
          }
          return true;
      } else {
          return false;
      }
  }
  
  //check if all of the inputs are entered and changes board if won 
  function checkWinnerL2(isSolved){ //@param -> boolean
      let inputAmount = document.querySelectorAll('input'); //returns a dom list
      console.log(inputAmount)
      if ((isSolved === true) && (inputAmount.length === 0)) {
          console.log('winner');
          container.style.color = 'green';
          let winnerHeadline = document.getElementById('headline');
          winnerHeadline.innerText = "You Win!";
      }
  }
  
  //function for the solve button to replace the board with the solution board
  function solveFieldL2(){
      const solvedBoard = solution2.map(array => array.map(num => {
          let newDiv = document.createElement('div');
          newDiv.setAttribute('class', 'cell');
          newDiv.innerText = num;
          return newDiv
      })).flat()
      //console.log(solvedBoard)
      let oldDivs = document.querySelectorAll('.cell')
      //console.log(oldDivs)
      oldDivs.forEach((node, index) => {
          node.replaceWith(solvedBoard[index])
      })
  }

//----------LEVEL 3///---------------------
//LEVEL 3//
//LEVEL 3//

//build the whole game board
function createFieldL3(){
    solution3.forEach(function(row, ridx){
      row.forEach(function(cell, cidx){
          let newDiv = document.createElement('div');
          newDiv.setAttribute('class', 'cell');
          container.appendChild(newDiv);
          newDiv.innerHTML = board3[ridx][cidx];
          if (board3[ridx][cidx] === null) {
              newDiv.innerHTML = `<input type='text' data-answer=${solution3[ridx][cidx]} class='guesses'></input>`;
              newDiv.setAttribute('value', null)
              newDiv.addEventListener('keydown', checkKeyDown);
          }
      })
    })
  }
  
  
  //function for the keyup event listener 
  function handleKeyUpL3(evt){
      checkWinnerL3(checkInputL3(evt));
  }
  
  //check if the input matches the solution board 
  function checkInputL3(evt){
      let guessInput = evt.target
      let guess = evt.target.value;
      // console.log(guess)
      let answer = evt.target.getAttribute('data-answer');
      if (guess === answer) {
          //console.log(true);
          let correctAnswerEl = document.createElement('div');
          correctAnswerEl.setAttribute('class', 'newcell');
          correctAnswerEl.innerText = answer;
          console.log(correctAnswerEl)
          if (guessInput !== null){
              guessInput.parentNode.replaceChild(correctAnswerEl, guessInput);
          }
          return true;
      } else {
          return false;
      }
  }
  
  //check if all of the inputs are entered and changes board if won 
  function checkWinnerL3(isSolved){ //@param -> boolean
      let inputAmount = document.querySelectorAll('input'); //returns a dom list
      console.log(inputAmount)
      if ((isSolved === true) && (inputAmount.length === 0)) {
          console.log('winner');
          container.style.color = 'green';
          let winnerHeadline = document.getElementById('headline');
          winnerHeadline.innerText = "You Win!";
      }
  }
  
  //function for the solve button to replace the board with the solution board
  function solveFieldL3(){
      const solvedBoard = solution3.map(array => array.map(num => {
          let newDiv = document.createElement('div');
          newDiv.setAttribute('class', 'cell');
          newDiv.innerText = num;
          return newDiv
      })).flat()
      //console.log(solvedBoard)
      let oldDivs = document.querySelectorAll('.cell')
      //console.log(oldDivs)
      oldDivs.forEach((node, index) => {
          node.replaceWith(solvedBoard[index])
      })
  }