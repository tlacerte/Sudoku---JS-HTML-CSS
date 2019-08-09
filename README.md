# Sudoku 

## Objective 
The goal of this project is to build a web-based game application. This is an adapted version of the classic game Sudoku.

Sudoku involves a game board that is a grid of 81 squares. The grid is divided into nine blocks, each containing nine squares. The rules of the game are simple: each of the nine blocks has to contain all the numbers 1-9 within its squares. Each number can only appear once in a row, column or box.

## Technology used
This game is built using JavaScript, HTML, and CSS.

## Wireframe
This is how the page of the game will be set up when levels are established. 
![alt wireframe](https://i.imgur.com/O8BnCJ8.png)

## User stories 
Ideal User  - Someone looking to relax, such as one does on a beach, by playing a few games of Sudoku.

- As a user, I can play the classic game of Sudoku on a web application. 
- I can play the game by myself and win or lose depending on my own problem solving abilities. 
- My guess saves when it is correct so I can move on to the other options. 
- I can restart and solve the game as many times as I want to. 

## Features list 
- Generates three different boards, all with their own difficulty level
- Solve button for when the user gives up 
- New Game button will refresh the page and the level buttons will generate the board of that level
- Directly type guesses in the board
- Correct guesses turn green and store in the board so the user can move on 

## Stretch goals 
1. Highlight the Row and Column when hovering over a box on the game grid
2. Score counter to count how many times the user has won/timer and record best time 
3. Only have 3 tries to get an answer wrong resulting in Game Over 
4. Generate random boards with logic of no repeats within the boxes, rows, or columns 

## Pseudocode
Pseudocode 

1. The page opens with three level options to choose from, press the button to generate a board

2. Use forEach to loop through 9x9 array and create div elements through JS

3. Make each element an input so players can type directly into the game board

4. After a user types (handleKeyUp function), the input is checked if it is the same as the solution 

5. The function will check if there is a winner by looking if there are any open inputs

6. If the input is correct, the value will be stored and turn green 

7. If the user get stuck, there is a solve button that will fill in the board with the solution

8. Repeat for any of the level options 

