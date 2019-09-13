import React from 'react';
import {connect} from 'react-redux';
import {restart, showBombs} from '../actions';

const EndGame = (props) => {
    const endGameStyle = {
        position: 'absolute',
        top: '5rem',
        left: '25rem',
        color: 'white',
        backgroundColor: 'black',
        padding: '4rem',
        opacity: 0.6
    };

    const {gameOver, gameState, restart} = props;

    const message = gameState === 'lose' ? 'Game Over' : 'You Win !!!';

    const handleClick = () => {
        restart()
    };

    if (!gameOver) {
        endGameStyle.display = 'none'
    }

    return (
        <div style={endGameStyle} onClick={()=>handleClick()}>
            <h1>{message}</h1>
        </div>
    )
};

const mapStateToProps = (state) => {
    return {
        gameOver: state.gameOver,
        gameState: state.gameState
    }
};

export default connect(mapStateToProps,{restart})(EndGame)