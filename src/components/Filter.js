import React from 'react';

function Filter({handleFilterChange}) {

    

    return(
        <div>
            Greased: 
            <select 
                name="Greased"
                onChange={e => handleFilterChange(e.target.value)}>
                <option>Yes</option>
                <option>No</option>
            </select>
        </div>
    )
}

export default Filter;