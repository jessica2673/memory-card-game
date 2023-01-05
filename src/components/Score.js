import React, { useState } from "react";
import Card from './Card';

const Score = (props) => {
    return (
        <React.Fragment>
            {props.score}
            {props.best}
        </React.Fragment>
    )
}

export default Score;