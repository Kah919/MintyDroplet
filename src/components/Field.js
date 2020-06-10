import React, {useState, useEffect} from 'react';
import Drops from './Drops';
import anime from 'animejs/lib/anime.es.js';


export default ({leftSpawn, gameOver, impact}) => {
    const [left, setLeft] = useState(Math.random() >= 0.5);
    let [tick, setTick] = useState(0);

    anime({
        targets: 'span',
        translateY: 450,
        easing: 'steps(5)',
        duration: 500,
        loopComplete: () => {
            console.log("reached the bottom");
            // console.log(tick)
            // impact(left);
            // setTick(tick += 1);
        }
    });

    useEffect(() => {
        const interval = setInterval(() => {
            setTick(tick + 1);
          }, 500);
    }, [])

    



    return(
        <div className="field">
            <span className={left ? 'left_drop' : 'right_drop'}>
                <Drops direction={left} tick={tick} />
            </span>
        </div>
    )
}