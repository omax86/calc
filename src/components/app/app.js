import { useState } from "react";

import Calc from "../calc/calc";
import mockData from "../../mockData";

import "./app.css";
/*
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: mockData,
      displayOperations: "0"
    };
  }

  // getNames = this.data.map((elem) => {
  //     elem = elem.name;
  //     return elem;
  // })

  render() {
    const { data } = this.state;
    const btnNames = data.map((elem) => {
      elem = elem.name;
      return elem;
    });

    const { displayOperations } = this.state;

    return (
      <div>
        <Calc displayOperations={displayOperations} btnNames={btnNames} />
        {btnNames}
      </div>
    );
  }
}
*/
const App = () => {
  const [data, setData] = useState(mockData ?? []);
  const [displayOperations, setDisplayOperations] = useState("0");

  const btnNames = data.map((elem) => {
    elem = elem.name;
    return elem;
  });

  return (
    <div>
      <Calc displayOperations={displayOperations} btnNames={data} />
    </div>
  );
};

export default App;
