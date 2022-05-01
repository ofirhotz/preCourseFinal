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
        let direction = 1;
        if (this.player === BLACK_PLAYER) {
          direction = -1;
        }
  
        // man move to empty cell
        let position = [this.row + direction, this.col + direction];
        if (boardData.isEmpty(position[0], position[1])) {
          result.push(position);
        }
  
        position = [this.row + direction, this.col - direction];
        if (boardData.isEmpty(position[0], position[1])) {
          result.push(position);
        }
        // white man capture opponent piece
        position = [this.row + direction, this.col + direction];
        if (boardData.isPlayer(position[0], position[1], this.getOpponent()) && boardData.isEmpty(position[0] + 1, position[1] + 1 ) ) {
          position = [position[0] + 1, position[1] + 1];
          result.push(position);
        }
    
        position = [this.row + direction, this.col - direction];
        if (boardData.isPlayer(position[0], position[1], this.getOpponent()) && boardData.isEmpty(position[0] + 1, position[1] - 1 ) ) {
          position = [position[0] + 1, position[1] - 1];
          result.push(position);
        } 
        
        return result;
      } 

  getMovesInDirection(directionRow, directionCol, boardData) {
    let result = [];

    for (let i = 1; i < BOARD_SIZE; i++) {
      let row = this.row + directionRow * i;
      let col = this.col + directionCol * i;
      if (boardData.isEmpty(row, col)) {
        result.push([row, col]);
      } else if (boardData.isPlayer(row, col, this.getOpponent())) {
        result.push([row, col]);
        return result;
      } else if (boardData.isPlayer(row, col, this.player)) {
        return result;
      }
    }
    return result;
  }



  getkingMoves(boardData) {
    let result = [];
    result = result.concat(this.getMovesInDirection(-1, -1, boardData));
    result = result.concat(this.getMovesInDirection(-1, 1, boardData));
    result = result.concat(this.getMovesInDirection(1, -1, boardData));
    result = result.concat(this.getMovesInDirection(1, 1, boardData));
    return result;
  }


  getKingMoves(boardData) {
    let result = [];
    result = result.concat(this.getMovesInDirection(-1, 0, boardData));
    result = result.concat(this.getMovesInDirection(1, 0, boardData));
    result = result.concat(this.getMovesInDirection(0, -1, boardData));
    result = result.concat(this.getMovesInDirection(0, 1, boardData));
    return result;
  }


  /*
    getKnightMoves(boardData) {
      let result = [];
      const relativeMoves = [[2, 1], [2, -1], [-2, 1], [-2, -1], [-1, 2], [1, 2], [-1, -2], [1, -2]];
      for (let relativeMove of relativeMoves) {
        let row = this.row + relativeMove[0];
        let col = this.col + relativeMove[1];
        if (!boardData.isPlayer(row, col, this.player)) {
          result.push([row, col]);
        }
      }
      return result;
    }
  
  
    getKingMoves(boardData) {
      let result = [];
      const relativeMoves = [[-1, -1], [-1, 0], [-1, 1], [0, -1], [0, 1], [1, -1], [1, 0], [1, 1]];
      for (let relativeMove of relativeMoves) {
        let row = this.row + relativeMove[0];
        let col = this.col + relativeMove[1];
        if (!boardData.isPlayer(row, col, this.player)) {
          result.push([row, col]);
        }
      }
      return result;
    }
 
    
     */
}