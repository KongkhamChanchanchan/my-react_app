import logo from './logo.svg';
import './App.css';
import HELLO from './HELLO'
import Demo from './Demo';
import Welcom from './Props';
import Clock from './Clock';
import ReactDOM from './ReactDOM';
import Toggle from './Toggle';
import Binding from './Binding';
import ClockWithHooks from './ClockWithHooks';
import ClockwithHook from './ClockwithHook';
import Clocks from './Clocks';
import Weather from './Weather';
import TemperatureInCelcius from './TemperatureInCelcius';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* <p>
          hello <code>src/App.js</code> and save to reload.
        </p>
        <HELLO/>
        <Demo/> 
       <Clock/> 
       <ReactDOM/>
       <Toggle/>
       <Binding/>
       <ClockWithHooks/>
       <ClockwithHook/>
        <Clocks/> */}
        <Weather/>
        <TemperatureInCelcius/>
        <Welcom name ="every" xyz="body"/>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
