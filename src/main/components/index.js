import React from 'react'
import CardOne from './contents/cardOne'
import CardTwo from './contents/cardTwo'
import { useSelector } from "react-redux";

const CardHandler = () => {
    const { level } = useSelector(({ Card }) => Card);
    return (
        <div>
            {level === "cardOne" && <CardOne />}
            {level === "cardTwo" && <CardTwo />}
        </div>
    )
}

export default CardHandler;
