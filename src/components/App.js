import React, { useState } from "react";
import Nav from "./Nav";

import hogsData from "../porkers_data";
import HogContainer from "./HogContainer";

function App() {
	const [hogs, setHogs] = useState(hogsData)
	
	
	
	return (
		<div className="App">
			<Nav />
			<HogContainer hogs={hogs}/>
		</div>
	);
}

export default App;
