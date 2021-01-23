import './App.css';
import { useEffect, useState } from 'react';
import SearchAppBar from "./components/Header"

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
    <SearchAppBar />
    </div>
  );
}

export default App;
