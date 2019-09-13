import React from 'react';
import Board from './board';
import EndGame from './endgame';
import Diff from './difficulty';
import {connect} from 'react-redux'

const Root =  (props) => {

    const {height, width, bombs, gameOver, bombList} = props;

    const end = (
        [<Board
            height={height}
            width={width}
            bombs={bombs}
            showBombs={true}
            bombList={bombList}
        />,
            <EndGame/>
        ]
    );

    const content = gameOver ? end : (
        [
            <Diff/>,
            <Board
                height={height}
                width={width}
                bombs={bombs}
            />
        ]
    );

    return (
        <div>
            {content}
        </div>
    );
};

const mapStateToProps = (state) => {

    return {
        height: state.height,
        width: state.width,
        bombs: state.bombs,
        gameOver: state.gameOver,
        bombList: state.bombList
    }
};

export default connect(mapStateToProps, {})(Root)