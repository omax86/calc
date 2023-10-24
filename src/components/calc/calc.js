import { Fragment } from "react";

import "./calc.css";

const Calc = ({ displayOperations, btnNames = [] }) => {
  return (
    <div>
      <h1>{displayOperations}</h1>
      {btnNames.map(({ name }) => {
        return (
          <Fragment key={name}>
            <button name={name}>{name}</button>
          </Fragment>
        );
      })}
    </div>
  );
};

export default Calc;
