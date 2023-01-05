import React, { useState } from "react";

const Card = (props) => {

    return (
        <div onClick={props.handleClick}>{props.title}</div>
    );
}

export default Card;