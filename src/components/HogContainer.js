import React from 'react';
import HogTile from './HogTile'



function HogContainer({ hogs }) {

    console.log(hogs)

    const renderHogCard = hogs.map(hog => {
        return <HogTile key={hog.name} hog={hog}/>
    })

  return (
    <div>
      <h2>{renderHogCard}</h2>
    </div>
  )
}

export default HogContainer

