import React from "react";
import ReactDOM from "react-dom";
import { chartData } from "./actions/generateData";
import AccordionComponent from "./accordionComponent/accordionComponent";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      chartData: []
    };
  }
  componentDidMount() {
    let chartOptions = chartData();
    this.setState({ chartData: chartOptions });
  }
  handleCLick = ind => {
    const { chartData } = this.state;
    chartData.map((val, key) => {
      val.isOpen = key === ind ? !val.isOpen : false;
      return val;
    });
    this.setState({ chartData });
  };
  render() {
    return (
      <div className="App">
        <h1>Invisalign record under and over 22 hours (June 2018-July 2019)</h1>
        
        <div>
          {this.state.chartData.map((option, ind) => (
            <AccordionComponent
              key={ind}
              option={option}
              index={ind}
              onClick={this.handleCLick}
            />
          ))}
        </div>
      </div>
    );
  }
}







export default App;


