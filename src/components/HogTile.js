import React, { useState } from 'react';
import HogDetails from './HogDetails'


function HogTile({ hog }) {
    const [details, setDetails] = useState(false)

    function handleClick() {
        setDetails(clicked => !clicked)
    }

    return(
        <div onClick={handleClick}>
            <h2>HogTile!</h2>
            <h3>{hog.name}</h3>
            <img src={hog.image} alt="hogPic" />
            <div className='details'>
                {details ? <HogDetails hog={hog}/> : null}
            </div>
        </div>
        
    )
}

export default HogTile;