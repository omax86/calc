import { Fragment } from "react";

import "../app/app";

import "./calc.css";

const Calc = ({ displayOperations, data = [], clickBtn }) => {

	
  	return (
		<div className="calcContainer">
			<div className="displayOperations">{displayOperations}</div>
			<div className="btnContainer">
				{data.map(({ name, btnSymbol, operator }) => {
					return (
						<Fragment key={name}>
							<button 
								className={name} 
								name={name}
								onClick={() => clickBtn(operator)}>
								{btnSymbol}
							</button>
						</Fragment>
					);
				})}
			</div>
		</div>
  	);
};

export default Calc;
