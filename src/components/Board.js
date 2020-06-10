import React, { useState } from 'react';
import anime from 'animejs/lib/anime.es.js';
import Field from './Field';
import PlayerBoard from './PlayerBoard';
import ArrowKeysReact from 'arrow-keys-react';

export default () => {
    const [left, setLeft] = useState(true);
    const [leftSpawn, setLeftSpawn] = useState(true);
    const [impact, setImpact] = useState(false);

    ArrowKeysReact.config({
        left: () => {
          setLeft(true)
        },
        right: () => {
          setLeft(false)
        },
      });

    const gameOver = () => {
        if(impact) {
            alert("GAME OVER")
        }
    }

    return(
        <div className="board" {...ArrowKeysReact.events} tabIndex="1">
            <Field leftSpawn={leftSpawn} playerSide={left} />
            <PlayerBoard left={left} />
            { gameOver() }
        </div>
    )
}