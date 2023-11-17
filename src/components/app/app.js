import { useState } from "react";

import Calc from "../calc/calc";
import mockData from "../../mockData";

import "./app.css";

const App = () => {
	const [data, setData] = useState(mockData ?? []);
	const [displayOperations, setDisplayOperations] = useState("0");


	const clickBtn = (value) => {

		if (value === "ac") {
			return setDisplayOperations("0")
		} else if (displayOperations === "0") {
			setDisplayOperations(value);
		} else if (value === "=") {
			try {
				setDisplayOperations(eval(displayOperations).toString());
			} catch (error) {
				setDisplayOperations('Error');
			}
		}  /* else if (value === "1" || "2" || "3" || "4" || "5" || "6" || "7" || "8" || "9" ) {
			setDisplayOperations(displayOperations + value);
		} */ else {
			setDisplayOperations(displayOperations + value);
		}
		

		
	}
	console.log(displayOperations);

	// const btnNames = data.map((elem) => {
	//   elem = elem.name;
	//   return elem;
	// });

	return (
	  <div>
		<Calc displayOperations={displayOperations} data={data}  
		clickBtn={clickBtn}/>
	  </div>
	);
};

export default App;
