import React from 'react'
import Cell from './Cell';


function Board({ squares, onClick }) {
    return (
        <div className="board">
            {squares.map((squareValue, index) => (
                <Cell key={index} value={squareValue} onClick={() => onClick(index)} />
            ))}
        </div>
    );
}

export default Board