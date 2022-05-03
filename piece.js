class Piece {
  constructor(row, col, type, player) {
    this.row = row;
    this.col = col;
    this.type = type;
    this.player = player;
  }

  getOpponent() {
    if (this.player === WHITE_PLAYER) {
      return BLACK_PLAYER;
    }
    return WHITE_PLAYER;
  }

  getPossibleMoves(boardData) {
    // Get moves
    let moves;
    if (this.type === MAN) {
      moves = this.getManMoves(boardData);
    } else if (this.type === KING) {
      moves = this.getkingMoves(boardData);
    } else {
      console.log("Unknown type", type)
    }

    // Get filtered absolute moves
    let filteredMoves = [];
    for (const absoluteMove of moves) {
      const absoluteRow = absoluteMove[0];
      const absoluteCol = absoluteMove[1];
      if (absoluteRow >= 0 && absoluteRow <= 7 && absoluteCol >= 0 && absoluteCol <= 7) {
        filteredMoves.push(absoluteMove);
      }
    }
    return filteredMoves;
  }


  getManMoves(boardData) {
    let result = [];
    
    // white man capture opponent piece
    if (this.player === WHITE_PLAYER) {
      let position = [this.row + 1, this.col + 1];
      if (boardData.isPlayer(position[0], position[1], this.getOpponent()) && boardData.isEmpty(position[0] + 1, position[1] + 1)) {
        position = [position[0] + 1, position[1] + 1, position[0], position[1]];
        result.push(position);
      }

      position = [this.row + 1, this.col - 1];
      if (boardData.isPlayer(position[0], position[1], this.getOpponent()) && boardData.isEmpty(position[0] + 1, position[1] - 1)) {
        position = [position[0] + 1, position[1] - 1, position[0], position[1]];
        result.push(position);
      }
    }
    
    // black man capture opponent piece
    if (this.player === BLACK_PLAYER) {
      let position = [this.row - 1, this.col - 1];
      if (boardData.isPlayer(position[0], position[1], this.getOpponent()) && boardData.isEmpty(position[0] - 1, position[1] - 1)) {
        position = [position[0] - 1, position[1] - 1, position[0], position[1]];
        result.push(position);
      }
      position = [this.row - 1, this.col + 1];
      if (boardData.isPlayer(position[0], position[1], this.getOpponent()) && boardData.isEmpty(position[0] - 1, position[1] + 1)) {
        position = [position[0] - 1, position[1] + 1, position[0], position[1]];
        result.push(position);
      }
    }

    // return to the player only the moves he can capture opponent if exsict
    /*if (result[0] !== undefined) {
      return result;
    } */


    // white man move to empty cell
    if (this.player === WHITE_PLAYER) {
    let position = [this.row + 1, this.col + 1];
    if (boardData.isEmpty(position[0], position[1])) {
      position = [this.row + 1, this.col + 1, undefined, undefined];
      result.push(position);
    }

    position = [this.row + 1, this.col - 1];
    if (boardData.isEmpty(position[0], position[1])) {
      position = [this.row + 1, this.col - 1, undefined, undefined];
      result.push(position);
    }
  }

// black man move to empty cell
  if (this.player === BLACK_PLAYER) {
    let position = [this.row - 1, this.col + 1];
    if (boardData.isEmpty(position[0], position[1])) {
      position = [this.row - 1, this.col + 1, undefined, undefined];
      result.push(position);
    }

    position = [this.row - 1, this.col - 1];
    if (boardData.isEmpty(position[0], position[1])) {
      position = [this.row - 1, this.col - 1, undefined, undefined];
      result.push(position);
    }
  }

    return result;
  }


  /*getkingMoves(boardData) {
    let result = [];
    result = result.concat(this.getMovesInDirection(-1, -1, boardData));
    result = result.concat(this.getMovesInDirection(-1, 1, boardData));
    result = result.concat(this.getMovesInDirection(1, -1, boardData));
    result = result.concat(this.getMovesInDirection(1, 1, boardData));
    return result;
  }

  getMovesInDirection(directionRow, directionCol, boardData) {
    let result = [];

    for (let i = 1; i < BOARD_SIZE; i++) {
      let row = this.row + directionRow * i;
      let col = this.col + directionCol * i;
      if (boardData.isEmpty(row, col)) {
        // empty cells
        result.push([row, col, undefined, undefined]);
      }
      // cell with player (can't move)
      else if (boardData.isPlayer(row, col, this.player)) {
        return result;
      }
    }
    return result;
  } */


  getkingMoves(boardData) {
    let result = [];
    // king moving to empty cell (1,1)
    let position = [this.row + 1, this.col + 1];
    if (boardData.isEmpty(position[0], position[1])) {
      position = [this.row + 1, this.col + 1, undefined, undefined];
      result.push(position);
    }

    position = [this.row + 2, this.col + 2];
    if (boardData.isEmpty(position[0], position[1])) {
      position = [this.row + 2, this.col + 2, undefined, undefined];
      result.push(position);
    }
    position = [this.row + 3, this.col + 3];
    if (boardData.isEmpty(position[0], position[1])) {
      position = [this.row + 3, this.col + 3, undefined, undefined];
      result.push(position);
    }
    position = [this.row + 4, this.col + 4];
    if (boardData.isEmpty(position[0], position[1])) {
      position = [this.row + 4, this.col + 4, undefined, undefined];
      result.push(position);
    }
    position = [this.row + 5, this.col + 5];
    if (boardData.isEmpty(position[0], position[1])) {
      position = [this.row + 5, this.col + 5, undefined, undefined];
      result.push(position);
    }
    position = [this.row + 6, this.col + 6];
    if (boardData.isEmpty(position[0], position[1])) {
      position = [this.row + 6, this.col + 6, undefined, undefined];
      result.push(position);
    }

    //white king moving to empty cell (1,-1)
    position = [this.row + 1, this.col - 1];
    if (boardData.isEmpty(position[0], position[1])) {
      position = [this.row + 1, this.col - 1, undefined, undefined];
      result.push(position);
    }

    position = [this.row + 2, this.col - 2];
    if (boardData.isEmpty(position[0], position[1])) {
      position = [this.row + 2, this.col - 2, undefined, undefined];
      result.push(position);
    }
    position = [this.row + 3, this.col - 3];
    if (boardData.isEmpty(position[0], position[1])) {
      position = [this.row + 3, this.col - 3, undefined, undefined];
      result.push(position);
    }
    position = [this.row + 4, this.col - 4];
    if (boardData.isEmpty(position[0], position[1])) {
      position = [this.row + 4, this.col - 4, undefined, undefined];
      result.push(position);
    }
    position = [this.row + 5, this.col - 5];
    if (boardData.isEmpty(position[0], position[1])) {
      position = [this.row + 5, this.col - 5, undefined, undefined];
      result.push(position);
    }
    position = [this.row + 6, this.col - 6];
    if (boardData.isEmpty(position[0], position[1])) {
      position = [this.row + 6, this.col - 6, undefined, undefined];
      result.push(position);
    }
    position = [this.row + 7, this.col - 7];
    if (boardData.isEmpty(position[0], position[1])) {
      position = [this.row + 7, this.col - 7, undefined, undefined];
      result.push(position);
    }

    // king moving to empty cell (-1,1)
    position = [this.row - 1, this.col + 1];
    if (boardData.isEmpty(position[0], position[1])) {
      position = [this.row - 1, this.col + 1, undefined, undefined];
      result.push(position);
    }

    position = [this.row - 2, this.col + 2];
    if (boardData.isEmpty(position[0], position[1])) {
      position = [this.row - 2, this.col + 2, undefined, undefined];
      result.push(position);
    }
    position = [this.row - 3, this.col + 3];
    if (boardData.isEmpty(position[0], position[1])) {
      position = [this.row - 3, this.col + 3, undefined, undefined];
      result.push(position);
    }
    position = [this.row - 4, this.col + 4];
    if (boardData.isEmpty(position[0], position[1])) {
      position = [this.row - 4, this.col + 4, undefined, undefined];
      result.push(position);
    }
    position = [this.row - 5, this.col + 5];
    if (boardData.isEmpty(position[0], position[1])) {
      position = [this.row - 5, this.col + 5, undefined, undefined];
      result.push(position);
    }
    position = [this.row - 6, this.col + 6];
    if (boardData.isEmpty(position[0], position[1])) {
      position = [this.row - 6, this.col + 6, undefined, undefined];
      result.push(position);
    }
    position = [this.row - 7, this.col + 7];
    if (boardData.isEmpty(position[0], position[1])) {
      position = [this.row - 7, this.col + 7, undefined, undefined];
      result.push(position);
    }

    // king moving to empty cell (-1,-1)
    position = [this.row - 1, this.col - 1];
    if (boardData.isEmpty(position[0], position[1])) {
      position = [this.row - 1, this.col - 1, undefined, undefined];
      result.push(position);
    }

    position = [this.row - 2, this.col - 2];
    if (boardData.isEmpty(position[0], position[1])) {
      position = [this.row - 2, this.col - 2, undefined, undefined];
      result.push(position);
    }
    position = [this.row - 3, this.col - 3];
    if (boardData.isEmpty(position[0], position[1])) {
      position = [this.row - 3, this.col - 3, undefined, undefined];
      result.push(position);
    }
    position = [this.row - 4, this.col - 4];
    if (boardData.isEmpty(position[0], position[1])) {
      position = [this.row - 4, this.col - 4, undefined, undefined];
      result.push(position);
    }
    position = [this.row - 5, this.col - 5];
    if (boardData.isEmpty(position[0], position[1])) {
      position = [this.row - 5, this.col - 5, undefined, undefined];
      result.push(position);
    }
    position = [this.row - 6, this.col - 6];
    if (boardData.isEmpty(position[0], position[1])) {
      position = [this.row - 6, this.col - 6, undefined, undefined];
      result.push(position);
    }

    // king capture opponent piece (1,1) 

    position = [this.row + 1, this.col + 1];
    if (boardData.isPlayer(position[0], position[1], this.getOpponent()) && boardData.isEmpty(position[0] + 1, position[1] + 1)) {
      position = [position[0] + 1, position[1] + 1, position[0], position[1]];
      result.push(position);
    }
    position = [this.row + 2, this.col + 2];
    if (boardData.isPlayer(position[0], position[1], this.getOpponent()) && boardData.isEmpty(position[0] + 1, position[1] + 1)) {
      position = [position[0] + 1, position[1] + 1, position[0], position[1]];
      result.push(position);
    }

    position = [this.row + 3, this.col + 3];
    if (boardData.isPlayer(position[0], position[1], this.getOpponent()) && boardData.isEmpty(position[0] + 1, position[1] + 1)) {
      position = [position[0] + 1, position[1] + 1, position[0], position[1]];
      result.push(position);
    }
    position = [this.row + 4, this.col + 4];
    if (boardData.isPlayer(position[0], position[1], this.getOpponent()) && boardData.isEmpty(position[0] + 1, position[1] + 1)) {
      position = [position[0] + 1, position[1] + 1, position[0], position[1]];
      result.push(position);
    }
    position = [this.row + 5, this.col + 5];
    if (boardData.isPlayer(position[0], position[1], this.getOpponent()) && boardData.isEmpty(position[0] + 1, position[1] + 1)) {
      position = [position[0] + 1, position[1] + 1, position[0], position[1]];
      result.push(position);
    }

    // king capture opponent piece (1,-1)
    position = [this.row + 1, this.col - 1];
    if (boardData.isPlayer(position[0], position[1], this.getOpponent()) && boardData.isEmpty(position[0] + 1, position[1] - 1)) {
      position = [position[0] + 1, position[1] - 1, position[0], position[1]];
      result.push(position);
    }
    position = [this.row + 2, this.col - 2];
    if (boardData.isPlayer(position[0], position[1], this.getOpponent()) && boardData.isEmpty(position[0] + 1, position[1] - 1)) {
      position = [position[0] + 1, position[1] - 1, position[0], position[1]];
      result.push(position);
    }
    position = [this.row + 3, this.col - 3];
    if (boardData.isPlayer(position[0], position[1], this.getOpponent()) && boardData.isEmpty(position[0] + 1, position[1] - 1)) {
      position = [position[0] + 1, position[1] - 1, position[0], position[1]];
      result.push(position);
    }
    position = [this.row + 4, this.col - 4];
    if (boardData.isPlayer(position[0], position[1], this.getOpponent()) && boardData.isEmpty(position[0] + 1, position[1] - 1)) {
      position = [position[0] + 1, position[1] - 1, position[0], position[1]];
      result.push(position);
    }
    position = [this.row + 5, this.col - 5];
    if (boardData.isPlayer(position[0], position[1], this.getOpponent()) && boardData.isEmpty(position[0] + 1, position[1] - 1)) {
      position = [position[0] + 1, position[1] - 1, position[0], position[1]];
      result.push(position);
    }
    position = [this.row + 6, this.col - 6];
    if (boardData.isPlayer(position[0], position[1], this.getOpponent()) && boardData.isEmpty(position[0] + 1, position[1] - 1)) {
      position = [position[0] + 1, position[1] - 1, position[0], position[1]];
      result.push(position);
    }

    // king capture opponent piece (-1,1) 

    position = [this.row - 1, this.col + 1];
    if (boardData.isPlayer(position[0], position[1], this.getOpponent()) && boardData.isEmpty(position[0] - 1, position[1] + 1)) {
      position = [position[0] - 1, position[1] + 1, position[0], position[1]];
      result.push(position);
    }
    position = [this.row - 2, this.col + 2];
    if (boardData.isPlayer(position[0], position[1], this.getOpponent()) && boardData.isEmpty(position[0] - 1, position[1] + 1)) {
      position = [position[0] - 1, position[1] + 1, position[0], position[1]];
      result.push(position);
    }
    position = [this.row - 3, this.col + 3];
    if (boardData.isPlayer(position[0], position[1], this.getOpponent()) && boardData.isEmpty(position[0] - 1, position[1] + 1)) {
      position = [position[0] - 1, position[1] + 1, position[0], position[1]];
      result.push(position);
    }
    position = [this.row - 4, this.col + 4];
    if (boardData.isPlayer(position[0], position[1], this.getOpponent()) && boardData.isEmpty(position[0] - 1, position[1] + 1)) {
      position = [position[0] - 1, position[1] + 1, position[0], position[1]];
      result.push(position);
    }
    position = [this.row - 5, this.col + 5];
    if (boardData.isPlayer(position[0], position[1], this.getOpponent()) && boardData.isEmpty(position[0] - 1, position[1] + 1)) {
      position = [position[0] - 1, position[1] + 1, position[0], position[1]];
      result.push(position);
    }
    position = [this.row - 6, this.col + 6];
    if (boardData.isPlayer(position[0], position[1], this.getOpponent()) && boardData.isEmpty(position[0] - 1, position[1] + 1)) {
      position = [position[0] - 1, position[1] + 1, position[0], position[1]];
      result.push(position);
    }

    // king capture opponent piece (-1,-1) 

    position = [this.row - 1, this.col - 1];
    if (boardData.isPlayer(position[0], position[1], this.getOpponent()) && boardData.isEmpty(position[0] - 1, position[1] - 1)) {
      position = [position[0] - 1, position[1] - 1, position[0], position[1]];
      result.push(position);
    }
    position = [this.row - 2, this.col - 2];
    if (boardData.isPlayer(position[0], position[1], this.getOpponent()) && boardData.isEmpty(position[0] - 1, position[1] - 1)) {
      position = [position[0] - 1, position[1] - 1, position[0], position[1]];
      result.push(position);
    }
    position = [this.row - 3, this.col - 3];
    if (boardData.isPlayer(position[0], position[1], this.getOpponent()) && boardData.isEmpty(position[0] - 1, position[1] - 1)) {
      position = [position[0] - 1, position[1] - 1, position[0], position[1]];
      result.push(position);
    }
    position = [this.row - 4, this.col - 4];
    if (boardData.isPlayer(position[0], position[1], this.getOpponent()) && boardData.isEmpty(position[0] - 1, position[1] - 1)) {
      position = [position[0] - 1, position[1] - 1, position[0], position[1]];
      result.push(position);
    }
    position = [this.row - 5, this.col - 5];
    if (boardData.isPlayer(position[0], position[1], this.getOpponent()) && boardData.isEmpty(position[0] - 1, position[1] - 1)) {
      position = [position[0] - 1, position[1] - 1, position[0], position[1]];
      result.push(position);
    }

    return result;
  }

}