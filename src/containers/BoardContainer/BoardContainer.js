import { connect } from "react-redux";

import { nextstep } from "../../actions/board";
import Board from "../../components/Board/Board";

const getBoard = state => state.board;

const mapStateToProps = state => ({
    board: getBoard(state.board)
});

const mapDispatchToProps = {
    nextstep
};

const BoardContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Board);

export default BoardContainer;
