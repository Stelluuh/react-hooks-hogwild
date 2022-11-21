import React from 'react';

function HogDetails({ hog }) {
    
    const {specialty, weight, greased, "highest medal achieved": medal } = hog

    return(
        <div>
            <br/>
            <p>{`Specialty: ${specialty}`}</p>
            <p>{`Weight: ${weight}`}</p>
            <p>{`greased: ${greased === false ? "yes" : "no"}`}</p>
            <p>{`Highest Medal Achieved: ${medal}`}</p>
            <br />
            <hr />
        </div>
    )
}

export default HogDetails;