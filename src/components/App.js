import React, { useState } from "react";
import Nav from "./Nav";

import hogsData from "../porkers_data";
import HogContainer from "./HogContainer";
import Filter from './Filter'

function App() {
	const [hogs, setHogs] = useState(hogsData)
	const [greased, setGreased] = useState('Yes')
	const [sortBy, setSortBy] = useState('name')
	
	function onFilterChange(selected) {
		setGreased(selected)
	}

	function onSortByChange(sortSelected) {
		setSortBy(sortSelected)
	}

	
	const displayedHogs = hogs
    .filter((hog) => (greased === 'Yes'? hog.greased : !hog.greased))
    .sort((hog1, hog2) => {
      if (sortBy === "name") {
        return hog1.name.localeCompare(hog2.name)
      } else {
        return hog1.weight - hog2.weight;
		;
      }
    });

	
	return (
		<div className="App">
			<Nav />
			<Filter handleFilterChange = {onFilterChange} handleSortChange ={onSortByChange}/>
			<HogContainer hogs={displayedHogs}/>
		</div>
	);
}

export default App;
