
class GameBoard {
    constructor(rows, cols) {
        this.rows = rows;
        this.cols = cols;
        this.board = this.createBoard();
    }

    createBoard() {
        const board = [];
        for (let r = 0; r < this.rows; r++) {
            let row = [];
            for (let c = 0; c < this.cols; c++) {
                row.push(null);
            }
            board.push(row);
        }
        return board;
    }

    renderBoard(containerId) {
        const container = document.getElementById(containerId);
        container.innerHTML = '';                                               // is seting the table to blank so it can be rendered from scratch

        const table = document.createElement("table");                          //is usign the tag table to create the table, it doesnt create the tags nested
        table.classList.add("game-board");

        for (let r = 0; r < this.rows; r++) {
            const row = document.createElement("tr");
            for (let c = 0; c < this.cols; c++) {
                const cell = document.createElement("td");
                cell.textContent = this.board[r][c] || '';   
                cell.dataset.row = r;                            //dataset is an object that all elements have in js and i it is empty is going to create the row in it
                cell.dataset.col = c;
                row.appendChild(cell);                          // is nesting the elements
            }
            table.appendChild(row);                             // is nesting the elements
        }
        container.appendChild(table);                           // is nesting the elements
    }

    updateCell(row, col, value) {
        this.board[row][col] = value;
    }
}

export default GameBoard;