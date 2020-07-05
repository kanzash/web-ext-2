import React from "react";
import "./App.css";
import Time from "./components/time/time.jsx";
import DateDisplay from "./components/date/date.jsx";
import Greeting from "./components/greeting/greeting.jsx";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Time timeFormat={12} />
          <DateDisplay dateFormat="verbose" />
          <Greeting />
        </header>
      </div>
    );
  }
}

export default App;
