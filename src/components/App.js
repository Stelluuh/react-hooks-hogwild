import React, { useState } from "react";
import Nav from "./Nav";

import hogsData from "../porkers_data";
import HogContainer from "./HogContainer";
import Filter from './Filter'

function App() {
	const [hogs, setHogs] = useState(hogsData)
	const [greased, setGreased] = useState('Yes')
	
	function onFilterChange(selected) {
		setGreased(selected)
	}

	console.log(greased)

	
	const displayedHogs = hogs.filter(hog => greased === "Yes" ? hog.greased : !hog.greased)

	
	return (
		<div className="App">
			<Nav />
			<Filter handleFilterChange = {onFilterChange} />
			<HogContainer hogs={displayedHogs}/>
		</div>
	);
}

export default App;
