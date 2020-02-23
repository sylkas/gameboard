import React, { useState, useEffect } from 'react';
import Board from './components/Board/Board';
const board = require('./ExamInput');

class App extends Comment {
  render() {

  //  const [board, setBoard] = useState([]);
    const handleButton = () => {

    };
    const b = board.board;



    return (
      <div>
        Bouncing game
      <TableRow />
        <button onClick={handleButton}>Step</button>
      </div>
    );
  }
}
const TableRow = ({b}) => (
  <table>
    {b.map(row => <tr>
      {row.map(el => <td>{el}</td>)}
    </tr>)}
  </table>
)
export default App;
