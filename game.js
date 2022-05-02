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
        console.log(possibleMove[3]);
        if (possibleMove[2] !== undefined && possibleMove[3] !== undefined) {
          console.log(3);
          const name = this.boardData.removePiece(possibleMove[2], possibleMove[3]);
          const capturedPiece = this.boardData.getPiece (possibleMove[2], possibleMove[3]) ;
        }
        const removedPiece = this.boardData.removePiece(row, col);
        piece.row = row;
        piece.col = col;
        console.log(4);

        /*if (possibleMove[3] !== undefined && possibleMove[4] !== undefined) {
          console.log (4);
          const name = this.boardData.removePiece(possibleMove[3], possibleMove[4]);
        } */
        console.log(5);
        if (removedPiece !== undefined && removedPiece.type === KING) {
          this.winner = piece.player;
        }

        this.currentPlayer = piece.getOpponent();
        return true;
      }
    }
    return false;
  }


  /*
    // Tries to actually make a move. Returns true if successful.
    tryMove(piece, row, col) {
      const possibleMoves = this.getPossibleMoves(piece);
      console.log(possibleMoves);
      // possibleMoves looks like this: [[1,2], [3,2]]
      for (const possibleMove of possibleMoves) {
        // possibleMove looks like this: [1,2]
        if (possibleMove[3] !== undefined && possibleMove[4] !== undefined) {
          // There is a legal move
           if (cheacKIfCapturedPiece(row, col) === true) {
            const capturedPiece = this.boardData.removePiece();
          } 
          const removedPiece = this.boardData.removePiece(row, col);
          piece.row = row;
          piece.col = col;
  
          if (removedPiece !== undefined && removedPiece.type === KING) {
            this.winner = piece.player;
          }
  
          this.currentPlayer = piece.getOpponent();
          return true;
        }
      }
      return false;
    } */

  getPossibleMoves(piece) {
    if (this.currentPlayer !== piece.player || this.winner !== undefined) {
      return [];
    }
    return piece.getPossibleMoves(this.boardData);
  }

  // function cheak if piece Captured opponent piece
  /*cheacKIfCapturedPiece(row, col) {
   if () {

   } */
}






