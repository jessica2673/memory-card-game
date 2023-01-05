import React, { useState } from "react";
import Card from './Card';

const Score = () => {
    const [score, setScore] = useState(0);
    const [best, setBest] = useState(0);

    if(Card.done) {
        restart();
    }

    const restart = () => {
        if(best < score) {
            setBest(score);
        }
        setScore(0);
    }

    return (
        <React.Fragment>
            {score}
            {best}
        </React.Fragment>
    )
}

export default Score;