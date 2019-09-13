export default (state, action) => {

    const initialState = {
        clickedList: [],
        gameOver: false,
        gameState: '',
        height: 10,
        width: 10,
        bombs: 10,
        bombList: false
    };

    if (!state) {
        return initialState
    }

    if (action.type === 'ADD_CLICK') {
        const newState = {...state};
        newState.clickedList = [...state.clickedList, action.payload];

        return newState
    }

    if (action.type === 'END_GAME') {
        const newState = {...state};

        newState.gameState = action.payload;
        newState.gameOver = true;

        return newState
    }

    if (action.type === 'RESTART') {
        return initialState
    }

    if (action.type === 'SHOW_BOMBS') {
        const newState = {...state};

        newState.bombList = action.payload;

        return newState
    }

    if (action.type === 'SET_DIFF') {
        const newState = {...state};

        if (action.payload === 'easy') {
            newState.height = 5;
            newState.width = 5;
            newState.bombs = 5
        }
        if (action.payload === 'med') {
            newState.height = 10;
            newState.width = 10;
            newState.bombs = 15;
        }
        if (action.payload === 'hard') {
            newState.height = 15;
            newState.width = 15;
            newState.bombs = 30;
        }

        return newState
    }



    return state
}