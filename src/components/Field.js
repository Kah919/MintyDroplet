import React, {useState} from 'react';
import Drops from './Drops';
import anime from 'animejs/lib/anime.es.js';


export default ({leftSpawn}) => {
    const [left, setLeft] = useState(Math.random() >= 0.5);

    anime({
        targets: 'span',
        translateY: 450,
        easing: 'steps(5)',
        // update: function(anim) {
            
        // }
    });

    return(
        <div className="field">
            <span className={left ? 'left_drop' : 'right_drop'}>
                <Drops direction={left}/>
            </span>
        </div>
    )
}