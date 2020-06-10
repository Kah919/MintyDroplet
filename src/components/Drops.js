import React, {useState, useEffect} from 'react';
import anime from 'animejs/lib/anime.es.js';

export default ({direction}) => {
    let [tick, setTick] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            setTick(tick + 1);
          }, 500);
    }, [])

    return(
        <div className="drop">

        </div>
    )
}