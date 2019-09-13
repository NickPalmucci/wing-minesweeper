export const addClick = (square) => {

    return {
        type: 'ADD_CLICK',
        payload: square
    }
};

export const endGame = (gameState) => {

    return {
        type: 'END_GAME',
        payload: gameState
    }
};

export const restart = () => {

    return {
        type: 'RESTART'
    }
};

export const showAllBombs = (list) => {

    return {
        type: 'SHOW_BOMBS',
        payload: list
    }
};

export const setDiff = (level) => {
    return {
        type: 'SET_DIFF',
        payload: level
    }
};
