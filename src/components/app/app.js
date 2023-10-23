import { Component } from "react";

import Calc from "../calc/calc";

import './app.css';


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                    {name: 'ac', operator: ''}, 
                    {name: 'negativePositive', operator: ''}, 
                    {name: 'percents', operator: '%'}, 
                    {name: 'divide', operator: '/'}, 
                    {name: 'seven', operator: '7'}, 
                    {name: 'eight', operator: '8'}, 
                    {name: 'nine', operator: '9'}, 
                    {name: 'multiply', operator: '*'}, 
                    {name: 'four', operator: '4'},
                    {name: 'five', operator: '5'}, 
                    {name: 'six', operator: '6'}, 
                    {name: 'minus', operator: '-'}, 
                    {name: 'one', operator: '1'}, 
                    {name: 'two', operator: '2'}, 
                    {name: 'three', operator: '3'}, 
                    {name: 'plus', operator: '+'}, 
                    {name: 'zero', operator: '0'}, 
                    {name: 'dot', operator: '.'}, 
                    {name: 'equals', operator: ''}
            ],
            displayOperations: '0'
        }
    }
    
    // getNames = this.data.map((elem) => {
    //     elem = elem.name;
    //     return elem;
    // })
    

    render() {
        const {data} = this.state;
        const btnNames = data.map((elem) => {
            elem = elem.name;
            return elem;
        });
        
        const {displayOperations} = this.state;
        

        return (
            <div>
                <Calc displayOperations={displayOperations} btnNames={btnNames}/>
                {btnNames}
            </div>
        );
    }
}

export default App;