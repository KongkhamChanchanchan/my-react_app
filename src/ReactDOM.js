import React from "react";
class ReactDOM extends React.Component {
  state = { check: false };
  handleCheck = () => {
    console.log("hello");
    this.setState({ check: !this.state.check });
  };
  componentDidMount() {
    setTimeout(() => {
      this.handleCheck();
    }, 10000);
  }
  timer() {
    setTimeout(() => {
      this.handleCheck();
    }, 10000);
  }
  render() {
    return (
      <div>
        <p>hello</p>
        {this.state.check ? (
          <button onClick={this.timer}>Next</button>
        ) : (
          <div>button not showing </div>
        )}
      </div>
    );
  }
}

export default ReactDOM;