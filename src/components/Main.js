import React, { useEffect, useState } from "react";
import Card from './Card';
import Score from "./Score";

const Main = () => {
    const [cardsArr, setCardsArr] = useState(["A", "B", "C", "D", "E", "F"]);
    let [cardsVisited, setCardsVisited] = useState([]);
    const [score, setScore] = useState(0);
    const [best, setBest] = useState(0);

    const click = (e) => {
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

    useEffect(() => {
        const shuffleCards = async () => {
            const temp = [];
            const newCardsArr = [];
    
            while(temp.length < cardsArr.length) {
                let index = await generate(temp);
                temp.push(index);
                newCardsArr.concat(cardsArr[index]);
            }
            console.log(temp);
            setCardsArr(newCardsArr);
        };
        shuffleCards();
    }, []);

    const generate = async (temp) => {
        let random = (Math.random() * 6).toFixed(0);
        console.log(random);
        if(temp.includes(await random)) {
            generate(temp);
        } else {
            return random;
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