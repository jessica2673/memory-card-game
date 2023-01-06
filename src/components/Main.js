import React, { useEffect, useRef, useState } from "react";
import Card from './Card';
import Score from "./Score";

const Main = () => {
    const [cardsArr, setCardsArr] = useState(["A", "B", "C", "D", "E", "F"]);
    let [cardsVisited, setCardsVisited] = useState([]);
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
        const shuffleCards = async () => {
            randomized.current = true;
            let newCardsArr = [];
    
            while(newCardsArr.length < cardsArr.length) {
                let index =  await generate(newCardsArr);
                await newCardsArr.push(cardsArr[index]);
                await console.log(newCardsArr);
            }
            await setCardsArr(newCardsArr);
        };
        shuffleCards();
    }, []);

    const generate = async (temp) => {
        let random = await (Math.random() * 5).toFixed(0);
        if(temp.includes(await cardsArr[random])) {
            await generate(temp);
        } else {
            console.log("random: " + random);
            return await random;
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