# Sudoku 

## Objective 
The goal of this project is to build a web-based game application. This is a take on the class game Sudoku.

Sudoku involves a game board that is a grid of 81 squares. The grid is divided into nine blocks, each containing nine squares. The rules of the game are simple: each of the nine blocks has to contain all the numbers 1-9 within its squares. Each number can only appear once in a row, column or box.

## Technology used
This game is built using JavaScript, HTML, and CSS.

## Wireframe
This is how the page of the game will be set up when levels are established. 
![alt wireframe](https://i.imgur.com/O8BnCJ8.png)

## User stories 

## Features list 
- Randomly generates Sudoku board on launch
- Solve button for when stuck 
- New Game button will generate a new game board
- Directly type guesses in the board
- Board animates when the user wins the game

## Stretch goals 
1. Have level options that will randomly fill the board with more or less numbers to start out with
2. Background color of box will change where the guess is right or wrong
3. Highlight the Row and Column when hovering over a box on the game grid
4. Score counter to count how many times the user has won
5. Timer and record best time 

## Pseudocode
Pseudocode 

1. Initialize application by having the game board ready to play 
1.1 Use forEach to loop through 9x9 array and create div elements through JS
1.2 Make each element an input so players can type directly into the game board

2. Through the render function, establish solution possibilities
2.1 Use addition to see if the boxes, columns and rows all === 45
2.2 Within the solution, randomly input half of the board for the players to use to play
2.3 Continue to check if the user’s input matches the solution 
2.3.1 Store the input 
2.3.2 Change back ground of input depending if the guess matches the solution

3. When the board is complete, display a message and animate the board

4. Pressing the “new game” button will regenerate a board to play 
