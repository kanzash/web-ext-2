import React from "react";
// import logo from "./logo.svg";
import "./App.css";
import Time from "./components/time/time.jsx";
import DateDisplay from "./components/date/date.jsx";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          {/* <p>
            Edit <code>src/App.js</code> and save to reload.
          </p> */}
          {/* <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a> */}
          <Time TimeFormat={12} />
          <DateDisplay DateFormat="verbose" />
        </header>
      </div>
    );
  }
}

//convert to TS
//make app a class component ✓
//pass in props to time and date components ✓
// do conditional logic with date-fns ✓

export default App;
