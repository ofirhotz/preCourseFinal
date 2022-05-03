class Game {
  constructor(firstPlayer) {
    this.boardData = new BoardData();
    this.currentPlayer = firstPlayer;
    this.winner = undefined;
  }

  // Tries to actually make a move. Returns true if successful.
  tryMove(piece, row, col) {
    const possibleMoves = this.getPossibleMoves(piece);
    // possibleMoves looks like this: [[1,2], [3,2]]
    for (const possibleMove of possibleMoves) {
      // possibleMove looks like this: [1,2]
      if (possibleMove[0] === row && possibleMove[1] === col) {
        // There is a legal move
        if (possibleMove[2] !== undefined && possibleMove[3] !== undefined) {
          //console.log(1);
          const name = this.boardData.removePiece(possibleMove[2], possibleMove[3]);
          //console.log(2);
        }
        const removedPiece = this.boardData.removePiece(row, col);
        piece.row = row;
        piece.col = col;

        if (this.boardData.becomeKing(row, col)) {
          piece.type = KING;

        }
        if (this.boardData.cheackVictory(piece)) {
          this.winner = piece.player;
        }

        this.currentPlayer = piece.getOpponent();
        return true;
      }
    }
    return false;
  }

  getPossibleMoves(piece) {
    const finalPossibleMoves = [];
    //console.log(piece);
    if (this.currentPlayer !== piece.player || this.winner !== undefined) {
      return [];
    }


   const filterGetPossibleMoves = piece.getPossibleMoves(this.boardData);
   //console.log(filterGetPossibleMoves);
   for (let i = 0; i< filterGetPossibleMoves.length ; i++ ) {
     if ((filterGetPossibleMoves[i][2] !== undefined) && (filterGetPossibleMoves[i][3] !== undefined) ){
        finalPossibleMoves.push(filterGetPossibleMoves[i]);
     }
     //console.log(1);
   }
     if (finalPossibleMoves[0] !== undefined) {
        return finalPossibleMoves ;
     }
     console.log(filterGetPossibleMoves);
    return filterGetPossibleMoves ;
  }

}





