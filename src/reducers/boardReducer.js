import { ACTION_TYPES } from "../actions/board";

const boardSchem = require('../ExamInput');
const bouncingClass = require('../bouncingClass');

const newgame = new bouncingClass(1, 1, boardSchem.board);
const initState = { board: newgame.getBoard() };
//const initState = { board: boardSchem.board };

const boardReducer = (state = initState, action) => {
  switch (action.type) {
    case ACTION_TYPES.NEXTSTEP:
      const newboard = newgame.nextStep(); 
      return { ...initState, board: newboard.slice(0) }   
    default:
      return state;
  }
};

export default boardReducer;