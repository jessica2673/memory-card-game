import React, { useEffect, useRef, useState } from "react";
import Card from './Card';
import Score from "./Score";
import data from './CardImg';

const Main = () => {
    const [cardsArr, setCardsArr] = useState(data); //stored as their file name
    let [cardsVisited, setCardsVisited] = useState([]); //stored as their alt text
    const [score, setScore] = useState(0);
    const [best, setBest] = useState(0);
    let index = 0;
    const randomized = useRef(false);

    const click = (e) => {
        if(cardsVisited.includes(e.target.alt)) {
            restart();
        } else {
            setCardsVisited(cardsVisited.concat(e.target.alt));
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
            <Card title={card} source={card} key={cardsArr.indexOf(card)} handleClick={click}/>
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