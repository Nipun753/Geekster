
function checkWord(board, word, index, row, col)
{
	
	// If index exceeds board range
	if (row < 0 || col < 0 ||
		row >= board.length ||
		col >= board[0].length)
		return false;
	
	// If the current cell does not
	// contain the required character
	if (board[row][col] !== word[index])
		return false;
		
	// If the cell contains the required
	// character and is the last character
	// of the word required to be matched
	else if (index === word.length - 1)
	
		// Return true as word is found
		return true;
	
	var temp = board[row][col];
	
	// Mark cell visited
	board[row][col] = "*";
	
	// Check adjacent cells
	// for the next character
	if (checkWord(board, word,
				index + 1, row + 1, col) ||
		checkWord(board, word,
				index + 1, row - 1, col) ||
		checkWord(board, word,
				index + 1, row, col + 1) ||
		checkWord(board, word,
				index + 1, row, col - 1))
	{
		board[row][col] = temp;
		return true;
	}
	
	// Restore cell value
	board[row][col] = temp;
	return false;
}


var board = [ [ "A", "B", "C", "E" ],
			[ "S", "F", "C", "S" ],
			[ "A", "D", "E", "E" ],];
var word = "CFDASABCESEE";
var f = 0;

for(var i = 0; i < board.length; i++)
{
	for(var j = 0; j < board[0].length; j++)
	{
		if (board[i][j] === word[0] &&
			checkWord(board, word, 0, i, j))
		{
			document.write("True");
			f = 1;
		}
	}
	if (f === 1)
	{
		i = board.length + 1;
	}
}
if (f === 0)
{
	document.write("False");
}


