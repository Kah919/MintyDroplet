import React, { useEffect } from 'react';
import Player from './Player';


export default ({left}) => {
    return(
        <div className="player_board">
            <Player left={left}/>
        </div>
    )
}