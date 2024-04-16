/**
 * start: [x, x]
 * end: [y, y]
 *
 * function knightMoves(start, end)
 * Check to make sure input is valid.
 * Set up an 8x8 matrix, with each entry initialized to 0 (with 0 === not visited and 1 === visited).
 * Print path returned from bfs call.
 *
 * Return an array of possible knight moves (unvisited squares) from the given square.
 * function getMoves(square, visitedMatrix)
 * Create array to store moves.
 * Add all possible moves to unvisited squares to array.
 * Return array.
 *
 * https://stackoverflow.com/questions/8922060/how-to-trace-the-path-in-a-breadth-first-search
 * function bfs(startSquare, endSquare)
 * Set up a queue of possible paths.
 * Enqueue the first path - [startSquare]
 * While the queue is not empty:
 *   Get first path in queue.
 *   Check if the last square in the path is endSquare.
 *   If so, we've found the path and we can return it.
 *   Otherwise, iterate over all possible move squares from the last square in the current path.
 *   At each square:
 *     Create a new path array containing the current path and the new square.
 *     Enqueue the new path.
 *     Mark the new square as visited.
 */

// Returns an array of possible knight moves to unvisited squares from the given square.
const getMoves = (start, visitedMatrix) => {
    const moves = [];
    moves.push([start[0] - 2, start[1] - 1]);
    moves.push([start[0] - 2, start[1] + 1]);
    moves.push([start[0] - 1, start[1] - 2]);
    moves.push([start[0] - 1, start[1] + 2]);
    moves.push([start[0] + 1, start[1] - 2]);
    moves.push([start[0] + 1, start[1] + 2]);
    moves.push([start[0] + 2, start[1] - 1]);
    moves.push([start[0] + 2, start[1] + 1]);
    return moves.filter(
        (square) =>
            square[0] >= 0 &&
            square[0] < 8 &&
            square[1] >= 0 &&
            square[1] < 8 &&
            visitedMatrix[square[0]][square[1]] === 0
    );
};
