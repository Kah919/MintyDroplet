import React, { useState } from 'react';
import anime from 'animejs/lib/anime.es.js';
import Field from './Field';
import PlayerBoard from './PlayerBoard';
import ArrowKeysReact from 'arrow-keys-react';

export default () => {
    const [left, setLeft] = useState(true)

    ArrowKeysReact.config({
        left: () => {
          setLeft(true)
        },
        right: () => {
          setLeft(false)
        },
      });

    return(
        <div className="board" {...ArrowKeysReact.events} tabIndex="1">
            <Field />
            <PlayerBoard left={left}/>
        </div>
    )
}