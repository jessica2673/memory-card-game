import React, { useEffect, useState } from "react";
import Card from './Card';
import Score from "./Score";

const Main = () => {
    const cardsArr = ["A", "B", "C", "D", "E", "F"];
    let [cardsVisited, setCardsVisited] = useState([]);
    const [score, setScore] = useState(0);
    const [best, setBest] = useState(0);

    const printCards = () => {
        const arr = cardsArr.map((card) => (
            <Card title={card} key={cardsArr.indexOf(card)} handleClick={click}/>
        ));
        return arr;
    }

    const click = (e) => {
        console.log(cardsVisited);
        if(cardsVisited.includes(e.target.textContent)) {
            restart();
        } else {
            setCardsVisited(cardsVisited.concat(e.target.textContent));
            setScore(score + 1);
        }
    }

    const restart = () => {
        if(best < score) {
            setBest(score);
        }
        setScore(0);
    }

    return (
        <React.Fragment>
            <Score score={score} best={best}/>
            <div>{printCards()}</div>
        </React.Fragment>
    )
}

export default Main;