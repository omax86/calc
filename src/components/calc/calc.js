

import './calc.css';

const Calc = ({displayOperations, btnNames}) => {
    
    const elements = btnNames.map((btnLabel) => (
        <button name={btnLabel}>
            {btnLabel}
        </button>
    ))
    return (
        <div>
            <h1>{displayOperations}</h1>
            {elements}
        </div>
        
    )
}

export default Calc;