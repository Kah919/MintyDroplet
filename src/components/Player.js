import React, { useState } from 'react';

export default () => {
    const [left, setLeft] = useState(true);



    return(
        <div className={left ? 'player left' : 'player right'}>

        </div>
    )
}