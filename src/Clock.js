import React from 'react';
class Clock extends React.Component {
    constructor(props) {
      super(props);
      this.xyz="Hello"
      this.state = {date: new Date()};
    }
  
    componentDidMount() {
      this.timerID = setInterval(
        () => this.tick(),
        1000
      );
    }
  
    componentWillUnmount() {
      clearInterval(this.timerID);
    }
    handleClick(){
      this.setState({date:new Date()});
    }
  
    tick() {
      this.setState({
        date: new Date()
      });
    }
    handleWithParams(param){
      console.log(param);
      this.setState({date:param});
    }
  
    render() {
      var name ="xyz"
      return (
        <div>
          <h1>Hello, world!</h1>
          <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
          <button onClick={()=>{this.tick();console.log(name);}}
          >Click here</button>
          <button onClick={this.handleWithParams.bind(this,new Date())}>Click WithParam</button>

        </div>
      );
    }
  }
  export default Clock;