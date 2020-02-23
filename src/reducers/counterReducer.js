import { ACTION_TYPES } from "../actions/counter";
const initState = {counter: 0};

const counterReducer = (state = initState, action) => {
  switch (action.type) {
    case ACTION_TYPES.INCREASE:
      return { ...initState, counter: state.counter + 1 }
    case ACTION_TYPES.DECREASE:
      return { ...initState, counter: state.counter - 1 }
    default:
      return state;
  }
};

export default counterReducer;

