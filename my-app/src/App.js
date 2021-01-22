import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [result, setResult] = useState("");

  useEffect(() => {
    fetch("/ping")
    .then((res) => res.json())
    .then((data) => {
      setResult(data.pong)
    })
  }, [])
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          This is the result from the api call: {result}
        </p>
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
