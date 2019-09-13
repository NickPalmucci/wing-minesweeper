import React from 'react'
import Square from './square';

const rowStyle = {
    display: 'flex',
    flexDirection: 'row'
};

export default (props) => {

    const {rowNumber, rowLength, bombList, showBombs} = props;

    const squareFact = () => {
        const squares = [];

        for (let i = 0; i < rowLength; i++) {
            const name = rowNumber + ':' + i;
            const square = (
                <Square
                    name={name}
                    bombList={bombList}
                    showBombs={showBombs}
                    key={i}
                />
            );

            squares.push(square)
        }

        return squares
    };

    const squares = squareFact();


    return (
        <div style={rowStyle}>
            {squares}
        </div>
    )
}