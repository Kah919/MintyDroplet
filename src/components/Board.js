import React, { useState } from 'react';
import anime from 'animejs/lib/anime.es.js';
import Field from './Field';
import PlayerBoard from './PlayerBoard';
import ArrowKeysReact from 'arrow-keys-react';

export default () => {
    const [left, setLeft] = useState(true);
    const [leftSpawn, setLeftSpawn] = useState(true);

    ArrowKeysReact.config({
        left: () => {
          setLeft(true)
        },
        right: () => {
          setLeft(false)
        },
      });

    const gameOver = () => {
        const end = impact()
        console.log(`thisi is the ${end}`)
        if(left === end) {
            console.log(left, end)
            alert("GAME OVER")
        }
    }

    const impact = (direction) => {
        console.log(direction, "here")
        return direction;
    }

    return(
        <div className="board" {...ArrowKeysReact.events} tabIndex="1">
            <Field leftSpawn={leftSpawn} gameOver={gameOver} impact={(direction) => impact} />
            <PlayerBoard left={left} />
            { gameOver() }
        </div>
    )
}