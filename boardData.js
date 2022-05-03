class BoardData {
  constructor() {
    this.initPieces();
  }

  initPieces() {
    // Create list of pieces (24 total)
    this.pieces = [];


    for (let i = 0; i < BOARD_SIZE; i = i + 2) {
      this.pieces.push(new Piece(0, i + 1, MAN, WHITE_PLAYER));
      this.pieces.push(new Piece(1, i, MAN, WHITE_PLAYER));
      this.pieces.push(new Piece(2, i + 1, MAN, WHITE_PLAYER));
      this.pieces.push(new Piece(5, i, MAN, BLACK_PLAYER));
      this.pieces.push(new Piece(6, i + 1, MAN, BLACK_PLAYER));
      this.pieces.push(new Piece(7, i, MAN, BLACK_PLAYER));
    }

  }

  // Returns piece in row, col, or undefined if not exists.
  getPiece(row, col) {
    for (const piece of this.pieces) {
      if (piece.row === row && piece.col === col) {
        return piece;
      }
    }
  }

  removePiece(row, col) {
    for (let i = 0; i < this.pieces.length; i++) {
      const piece = this.pieces[i];
      if (piece.row === row && piece.col === col) {
        // Remove piece at index i
        this.pieces.splice(i, 1);
        return piece;
      }
    }
  }

  isEmpty(row, col) {
    return this.getPiece(row, col) === undefined;
  }

  isPlayer(row, col, player) {
    const piece = this.getPiece(row, col);
    return piece !== undefined && piece.player === player;
  }
/*
  cheackVictory(piece) {
    let opponentPossibleMoves = undefined;
    const pieces = this.pieces;
    const opponent =  piece.getOpponent() ;
    for (let i = 0; i < pieces.length; i++) {
       opponentPossibleMoves = game.getPossibleMoves(pieces[i]) ;
       console.log(opponentPossibleMoves);
      if (opponent == pieces[i].player &&  opponentPossibleMoves !== undefined) {
        return false;
      }
    }
    return true;
  } */

  cheackVictory(piece) {
    const pieces = this.pieces;
    const opponent = piece.getOpponent();
    for (let i = 0; i < pieces.length; i++) {
      if (opponent == pieces[i].player) {
        return false;
      }
    }
    return true;
  } 

  becomeKing(row, col) {
    const piece = this.getPiece(row, col);
    if ((piece.player === WHITE_PLAYER && piece.row == 7) || (piece.player === BLACK_PLAYER && piece.row == 0)) {
      return true;
    }
    return false

  }
}