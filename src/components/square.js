import React, {useState, useEffect} from 'react';
import {connect} from 'react-redux';
import {addClick, endGame, showAllBombs} from '../actions';

const getNumAdjacentBombs = (bombList, name) => {
    let numAdjBombs = 0;
    const neighbors = [];

    const coordinates = name.split(':');

    for (let i = -1; i < 2; i++) {
        for (let j = -1; j < 2; j++) {
            const row = parseInt(coordinates[0]) + i;
            const col = parseInt(coordinates[1]) + j;

            const neighborName = row + ':' + col;

            neighbors.push(neighborName)
        }
    }

    neighbors.map((el)=>{
        if (bombList.includes(el)) {
            numAdjBombs ++
        }
    });

    return {numAdjBombs, neighbors}
};


const Square = (props) => {
    const squareStyle = {
        border: 'solid black 1px',
        minHeight: '65px',
        minWidth: '65px',
        textAlign: 'center',
    };

    const {name,
        bombList,
        clickedList,
        addClick,
        endGame,
        gameOver,
        showBombs,
        showAllBombs
    } = props;

    const [expanded, setExpanded] = useState(false);

    const isBomb = bombList.includes(name);
    const {numAdjBombs, neighbors} = getNumAdjacentBombs(bombList, name);

    const content = isBomb ? 'B' : numAdjBombs;

    const clicked = clickedList.includes(name);
    let show = clicked ? content : '';

    const handleClick = () => {
        if (isBomb) {
            showAllBombs(bombList);
            endGame('lose');
        }

        addClick(name);
    };

    if (show === 0) {show = ''}

    if (numAdjBombs === 0 && !expanded && clicked && !isBomb) {
        neighbors.forEach((el)=>{
            if (!bombList.includes(el)) {
                addClick(el)
            }
        });

        setExpanded(true)
    }

    if (clicked && isBomb) {
        squareStyle.backgroundColor = 'red';
        show = 'B';
    }

    if (showBombs && isBomb) {
        squareStyle.backgroundColor = 'red';
        show = 'B'
    }

    if (clicked && !isBomb) {
        squareStyle.backgroundColor = 'lightgray';
        squareStyle.opacity = 0.5;
    }


    return (
        <div style={squareStyle} onClick={()=>handleClick()}>
            <h4>{show}</h4>
        </div>
    )
};

const mapStateToProps = (state) => {
    return {
        clickedList: state.clickedList,
        gameOver: state.gameOver
    }
};

export default connect(mapStateToProps, {addClick, endGame, showAllBombs})(Square)