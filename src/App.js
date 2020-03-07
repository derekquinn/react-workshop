import React from 'react';
//import logo from './logo.svg';
import './App.css';
import Counter from './components/Counter';
import Timer from './components/Timer';
import Votes from './components/Votes';
function App() {
  return (
    <div className="App">
      <Counter/> 
      <Timer/>
    <Votes/>
    </div>
  );
}

export default App;
