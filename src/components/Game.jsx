import { useState } from 'react';
import Board from './Board';

function Game() {
    const [board, setBoard] = useState(Array(9).fill(null));
    const [xIsNext, setXIsNext] = useState(true);
    const [scores, setScores] = useState({ X: 0, O: 0, draw: 0 });

    function handleClick(index) {
        const newBoard = [...board];
        if (calculateWinner(newBoard) || newBoard[index]) return;
        newBoard[index] = xIsNext ? 'X' : 'O';
        setBoard(newBoard);
        setXIsNext(!xIsNext);
        updateScores(newBoard);
    }

    function calculateWinner(squares) {
        const lines = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ];

        for (let i = 0; i < lines.length; i++) {
            const [a, b, c] = lines[i];
            if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
                return squares[a];
            }
        }

        return null;
    }

    function updateScores(newBoard) {
        const winner = calculateWinner(newBoard);
        if (winner) {
            setScores(prevScores => ({
                ...prevScores,
                [winner]: prevScores[winner] + 1
            }));
        } else if (!newBoard.includes(null)) {
            setScores(prevScores => ({
                ...prevScores,
                draw: prevScores.draw + 1
            }));
        }
    }

    const winner = calculateWinner(board);
    let status;
    if (winner) {
        status = `Winner: ${winner}`;
    } else if (!board.includes(null)) {
        status = 'Draw!';
    } else {
        status = `Next player: ${xIsNext ? 'X' : 'O'}`;
    }

    return (
        <div className="game">
            <div className="game-board">
                <Board squares={board} onClick={handleClick} />
            </div>
            <div className="game-info">
                <div>{status}</div>
                <div >Score: X ({scores.X}) - O ({scores.O}) - Draw ({scores.draw})</div>
            </div>
        </div>
    );
}

export default Game;
