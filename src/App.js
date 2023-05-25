import logo from './logo.svg';
import './App.css';
import useScript from 'hooks/useScript';

function App() {
  const MyComponent = props => {
    useScript('/ccp-script.js');
  }
  return (
    <div className="App">
      <header className="App-header">
        
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          TEST TEST TEST
        </a>
        <div id="containerDiv" ></div>
      </header>
    </div>
  );
}
export default App;
