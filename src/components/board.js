import React from 'react';
import Row from './row';

const boardStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
};

const bombFact = (height, width, bombs) => {
    const bombList = [];

    for (let i = 0; i < bombs; i++) {
        const row = Math.floor(Math.random(height) * Math.floor(height));
        const col = Math.floor(Math.random(width) * Math.floor(width));

        const bombName = row + ':' + col;
        bombList.push(bombName)
    }

    return bombList
};

export default (props) => {

    const {height, width, bombs, showBombs, bombList} = props;

    const bombListNew = bombList ? bombList : bombFact(height, width, bombs);

    const rowFact = () => {
        const rows = [];

        for (let i = 0; i < height; i++) {
            const row = (<Row rowNumber={i}
                              rowLength={width}
                              bombList={bombListNew}
                              showBombs={showBombs}
                              key={i}
                            />);
            rows.push(row)
        }

        return rows
    };

    const rows = rowFact();

    return (
        <div style={boardStyle}>
            {rows}
        </div>
    )
};
