import React, { Component } from 'react';
import { Provider } from "react-redux";

// import Board from './components/Board/Board';
import store from "./store";

import CounterContainer from "./containers/CounterContainer/CounterContainer";
import BoardContainer from "./containers/BoardContainer/BoardContainer";

class App extends Component {

  render() {
    return (
      <div>
        <Provider store={store}>
          <BoardContainer />
          <CounterContainer />
        </Provider>
      </div>
    );
  }
}

export default App;
