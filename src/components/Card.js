import React, { useState } from "react";

const Card = (props) => {
    const [clicked, setClicked] = useState(false);
    let done = false;
    
    const click = () => {
        if(!clicked) {
            setClicked(!clicked);
        } else {
            done = true;
        }
    }

    return (
        <div onClick={click}>{props.title}</div>
    );
}

export default Card;