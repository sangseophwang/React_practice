import React from "react";

class App extends React.Component {
  state = {
    count: 0,
  };
  add = () => {
    this.setState((current) => ({ count: current.count + 1 }));
  };
  minus = () => {
    this.setState((current) => ({ count: current.count - 1 }));
  };
  render() {
    return (
      <div>
        <h1>
          The number is : {this.state.count}
          <br />
          <button onClick={this.add}>Add</button>
          <button onClick={this.minus}>minus</button>
        </h1>
      </div>
    );
  }
}

export default App;
