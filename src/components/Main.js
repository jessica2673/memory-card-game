import React, { useEffect, useState } from "react";
import Card from './Card';
import Score from "./Score";

const Main = () => {
    const cardsArr = ["A", "B", "C", "D", "E", "F"];

    const printCards = () => {
        const arr = cardsArr.map((card) => (
                            <Card title={card} key={cardsArr.indexOf(card)}/>
        ));
        return arr;
    }
    

    return (
        <React.Fragment>
            <Score />
            <div>{printCards()}</div>
        </React.Fragment>
    )
}

export default Main;