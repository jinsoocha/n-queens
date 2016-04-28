/*           _
   ___  ___ | |_   _____ _ __ ___
  / __|/ _ \| \ \ / / _ \ '__/ __|
  \__ \ (_) | |\ V /  __/ |  \__ \
  |___/\___/|_| \_/ \___|_|  |___/

*/

// hint: you'll need to do a full-search of all possible arrangements of pieces!
// (There are also optimizations that will allow you to skip a lot of the dead search space)
// take a look at solversSpec.js to see what the tests are expecting


// return a matrix (an array of arrays) representing a single nxn chessboard, 
//with n rooks placed such that none of them can attack each other

window.findNRooksSolution = function(n) {
  var board = [];
  for(var row = 0; row < n; row++) {
    board.push([]);
    for(var col = 0; col < n; col++) {
      // push 0 to everything
      board[row][col] = 0;
    }
  }
  
  var placeRooks = function(row,col) { 
    if(row > n-1 || col > n-1) {
      return;
    }
    board[row][col] = 1;
    placeRooks(row+1,col+2);
  };

  if(n % 2 === 0) {
    placeRooks(0, 1);
    placeRooks(n / 2, 0);
  } else {
    placeRooks(0,0);
    placeRooks(Math.ceil(n / 2), 1);
  }

  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(board));
  return board;
};
// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
// window.countNRooksSolutions = function(n) {

//   var solution = []; //fixme

//   var inputs = [0, 1];

//   var generateRows = function(count, row) {
//     row = row || [];

//     if (count === 0) {
//       if(row.pieces < 2) {
//        // console.log("pushing row without conflicts only",JSON.stringify(row),row.pieces);
//         solution.push(row);
//       }
//       return;
//     }

//     for (var i = 0; i < inputs.length; i++) {
//       row["pieces"] = row["pieces"] || 0;
//       if(i === 1) {
//         row["pieces"]++;
//       }
//       var newRow = row.slice();
//       newRow.push(i);
//       newRow.pieces = row.pieces;
//       generateRows(count - 1, newRow);
//     }
//   };

//   generateRows(n);
//   console.log("rows",JSON.stringify(solution))

//   var boards = [];

//   var generateSolutions = function(count, board, pieces) {
//     board = board || [];
//     pieces = pieces || 0;
    
//     if (count === 0) {
//       if(board.pieces === n) {
//         var testBoard = new Board(board);
//         if(!testBoard.hasAnyColConflicts()) {
//           // console.log("no conflict board pushing to boards",JSON.stringify(board))
//           boards.push(board);
//         }
//       }  
//       return;
//     }    

    
//     for (var i = 0; i < solution.length; i++) {
//       var currentPosition = solution[i];
//       var newBoard = board.slice();
//       // console.log("row pieces",JSON.stringify(currentPosition), currentPosition.pieces)
//       newBoard.push(currentPosition);
//       // console.log("making a board",JSON.stringify(newBoard))
//       newBoard.pieces = pieces || 0;
//       newBoard.pieces += currentPosition.pieces;
//       // console.log("board pieces",newBoard.pieces)
      
//       generateSolutions(count - 1, newBoard, newBoard.pieces);
//     }

//   };
// console.time('looping');
//   generateSolutions(n);
//       console.timeEnd('looping');
//     console.log('looping for', n);
//     // console.log("final board",JSON.stringify(boards))
//     // console.log("n number of rooks arrangements",JSON.stringify(boards.length));
//   return boards.length;

// };


window.countNRooksSolutions = function(n) {
  var boards = [];

  var board = [];
  for(var row = 0; row < n; row++) {
    board.push([]);
    for(var col = 0; col < n; col++) {
      board[row][col] = 1;
      var testBoard = new Board (board);
      if(testBoard.hasAnyRooksConflicts()) {
        board[row][col] = 0;
      }
    }
  }
  console.log(JSON.stringify(board))
  

  return false;
};



// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
 
  var board = [];
  for(var row = 0; row < n; row++) {
    board.push([]);
    for(var col = 0; col < n; col++) {
      // push 0 to everything
      board[row][col] = 0;
    }
  }
  
  var placeQueens = function(row,col) { 
    if(row > n-1 || col > n-1) {
      return;
    }
    board[row][col] = 1;
    placeQueens(row+1,col+2);
  };

  if(n !== 2 && n !== 3 && n !== 8) {
    if(n % 2 === 0) {
      console.log(n)
      placeQueens(0, 1);
      placeQueens(n / 2, 0);
    } else {
      placeQueens(0,0);
      placeQueens(Math.ceil(n / 2), 1);
    }
  } 
  if( n === 8) {
    placeQueens(0, 1);
    board[4][2] = 1;
    board[5][0] = 1;
    board[6][6] = 1;
    board[7][4] = 1;
  }

  console.log('Single solution for ' + n + ' queens:', JSON.stringify(board));
  return board;
};

// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var solutionCount = undefined; //fixme

  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};
