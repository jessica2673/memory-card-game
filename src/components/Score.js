import React from "react";

const Score = (props) => {
    return (
        <div className='Score'>
            <div className="currScore">Current score: {props.score}</div>
            <div className="bestScore">Best score: {props.best}</div>
            <div className="tries">Total tries: {props.tries}</div>
        </div>
    )
}

export default Score;