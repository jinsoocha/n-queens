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
  var solution = []; //fixme

  var inputs = [0, 1];

  var generateRows = function(count, row) {
    row = row || [];

    if (count === 0) {
      solution.push(row);
      return;
    }

    for (var i = 0; i < inputs.length; i++) {
      generateRows(count - 1, row.concat(i));
    }
  };

  generateRows(n);

  var boards = [];

  var generateSolutions = function(count, board) {
    board = board || [];

    if (count === 0) {
      boards.push(board);
      return;
    }

    for (var i = 0; i < solution.length; i++) {
      var currentPosition = solution[i];
      var set = [];
      set.push(currentPosition);
      generateSolutions(count - 1, board.concat(set));
    }
  };

  generateSolutions(n);
// console.log(JSON.stringify(boards[0]))
  for (var i = 0; i < boards.length; i++) {

    var testBoard = new Board(boards[i]);
    console.log(JSON.stringify(testBoard));

    if (!testBoard.hasAnyColConflicts() && !testBoard.hasAnyRowConflicts()) {
      console.log('Single solution for ' + n + ' rooks:', JSON.stringify(boards[i]));
      return boards[i];
    }
  }
};
// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  var solutionCount = undefined; //fixme

  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return solutionCount;
};

// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  var solution = undefined; //fixme

  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  return solution;
};

// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var solutionCount = undefined; //fixme

  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};
