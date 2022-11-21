import React from 'react';

function Filter({ handleFilterChange, handleSortChange }) {
    
    

    return(
        <div>
            Greased: 
            <select 
                name="Greased"
                onChange={e => handleFilterChange(e.target.value)}>
                <option>Yes</option>
                <option>No</option>
            </select>
            <br />
            Sort By:
            <select
                name="SortBy"
                onChange={e => handleSortChange(e.target.value)}
            >
                <option>name</option>
                <option>weight</option>
            </select>
        </div>
    )
}

export default Filter;