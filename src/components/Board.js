import React from 'react';
import anime from 'animejs/lib/anime.es.js';
import Field from './Field';
import PlayerBoard from './PlayerBoard';

export default () => {
    return(
        <div className="board">
            <Field />
            <PlayerBoard />
        </div>
    )
}