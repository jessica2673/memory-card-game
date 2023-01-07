import React from "react";

const Score = (props) => {
    return (
        <div className='Score'>
            <div>Current score: {props.score}</div>
            <div>Best score: {props.best}</div>
        </div>
    )
}

export default Score;