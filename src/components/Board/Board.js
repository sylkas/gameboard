import React from 'react';

const Board = ({ board, nextstep }) => {

  return (
    <div>
      <table>
        <tbody>
          {board.map((row, index) => <tr key={index}>
            {row.map((el, index) => <td key={index}>{el}</td>)}
          </tr>)}
        </tbody>
      </table>
      <button onClick={nextstep}>Next step</button>
    </div>
  )

}

export default Board;