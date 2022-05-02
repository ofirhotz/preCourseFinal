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
          const name = this.boardData.removePiece(possibleMove[2], possibleMove[3]);
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
    if (this.currentPlayer !== piece.player || this.winner !== undefined) {
      return [];
    }
    return piece.getPossibleMoves(this.boardData);
  }

}





