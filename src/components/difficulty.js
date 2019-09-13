import React from 'react'
import {connect} from 'react-redux'
import {setDiff} from '../actions'

const diffStyle = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center'
};

const buttonStyle = {
    padding: '1rem'
};

const Diff = (props) => {
    const {setDiff} = props;

    const handleClick = (level) => {
        setDiff(level)
    };

    return (
        <div style={diffStyle}>
            <h3 style={buttonStyle} onClick={()=>handleClick('easy')}>Easy</h3>
            <h3 style={buttonStyle} onClick={()=>handleClick('med')}>Medium</h3>
            <h3 style={buttonStyle} onClick={()=>handleClick('hard')}>Hard</h3>
        </div>
    )
};

export default connect(()=>{{}}, {setDiff})(Diff)