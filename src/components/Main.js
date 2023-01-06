import React, { useEffect, useRef, useState } from "react";
import Card from './Card';
import Score from "./Score";

const Main = () => {
    const [cardsArr, setCardsArr] = useState(["A", "B", "C", "D", "E", "F"]);
    let [cardsVisited, setCardsVisited] = useState([]);
    let index = 0;
    const [score, setScore] = useState(0);
    const [best, setBest] = useState(0);
    const randomized = useRef(false);

    const click = (e) => {
        if(cardsVisited.includes(e.target.textContent)) {
            restart();
        } else {
            setCardsVisited(cardsVisited.concat(e.target.textContent));
            setScore(score + 1);
        }
        shuffleCards();
    }

    const restart = () => {
        if(best < score) {
            setBest(score);
        }
        setScore(0);
        setCardsVisited([]);
    }

    useEffect(() => {
        if(randomized.current) return;
        shuffleCards();
    }, []);

    const shuffleCards = async () => {
        randomized.current = true;
        let newCardsArr = [];

        while(newCardsArr.length < cardsArr.length) {
            await generate(newCardsArr);
            newCardsArr.push(cardsArr[index]);
        }
        await setCardsArr(newCardsArr);
    };

    const generate = (temp) => {
        let random = (Math.random() * 5).toFixed(0);
        if(temp.includes(cardsArr[random])) {
            generate(temp);
        } else {
            index = random;
        }
    }

    const printCards = () => {
        const arr = (cardsArr).map((card) => (
            <Card title={card} key={cardsArr.indexOf(card)} handleClick={click}/>
        ));
        return arr;
    }

    return (
        <React.Fragment>
            <Score score={score} best={best}/>
            <div>{printCards()}</div>
        </React.Fragment>
    )
}

export default Main;