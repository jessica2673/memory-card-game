import React from "react";
import bulldog from '../assets/bull-dog.jpg';
import husky from '../assets/husky.png';
import border from '../assets/border-collie.jpg';
import german from '../assets/german-shepherd.jpg';
import golden from '../assets/golden-retriever.jpg';
import maltipoo from '../assets/maltipoo.jpg';

const originals = ["border-collie.jpg", "bull-dog.jpg", "german-shepherd.jpg", "golden-retriever.jpg", "husky.png", "maltipoo.jpg"];
const alias = [border, bulldog, german, golden, husky, maltipoo];

const Card = (props) => {
    return (
        <img src={alias[originals.indexOf(props.source)]} onClick={props.handleClick} alt={props.title}/>
    );
}

export default Card;