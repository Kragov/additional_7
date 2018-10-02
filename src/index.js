module.exports = function solveSudoku(matrix) {

    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            if (matrix[i][j] === 0) {
                for (let possibleNumber = 1; possibleNumber <= 9; possibleNumber++) {
                    if (numberCheck(matrix, i, j, possibleNumber)) {
                        matrix[i][j] = possibleNumber;
                        if (solveSudoku(matrix)) {
                            return matrix;
                        }
                        matrix[i][j] = 0;
                    }
                }
                return false;
            }
        }
    }

    return true;
}

function numberCheck(matrix, tempRow, tempCol, possibleNumber) {
    let mainRow = Math.floor(tempRow / 3) * 3;
    let mainCol = Math.floor(tempCol / 3) * 3;

    for (let col = 0; col < 9; col++) {
        if (col != tempCol && matrix[tempRow][col] === possibleNumber) {
            return false;
        }
    }

    for (let row = 0; row < 9; row++) {
        if (row != tempRow && matrix[row][tempCol] === possibleNumber) {
            return false;
        }
    }

    for (let row = 0; row < 3; row++) {
        for (let col = 0; col < 3; col++) {
            if (row != tempRow && col != tempCol && matrix[mainRow + row][mainCol + col] === possibleNumber) {
                return false;
            }
        }
    }

    return true;
}